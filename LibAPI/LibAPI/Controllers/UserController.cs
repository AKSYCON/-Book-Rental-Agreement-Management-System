using LibAPI.DataAccess;
using LibAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LibAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public readonly LibDbContext _context;
        public UserController(IConfiguration configuration, LibDbContext context)
        {
            this._configuration = configuration;
            this._context = context;
        }
        [AllowAnonymous]
        [HttpPost("CreateUser")]
        public async Task<IActionResult> Create(User user)
        {
            if (await _context.Users.Where(u => u.Email == user.Email).FirstOrDefaultAsync() != null)
            {
                return Ok("Alerady User");
            }
            user.Token = 3;
            user.NumberOfBorrow = 0;
            user.NumberOfLent = 0;
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return Ok("Done");
        }
        [AllowAnonymous]
        [HttpPost("Login")]
        public async Task<IActionResult> Login(Login login)
        {
            var chk = await _context.Users.Where(u => u.Email == login.Email && u.Password == login.Password).FirstOrDefaultAsync();
            if (chk != null)
            {
                return Ok(new JWTs(_configuration).GenerateToken(chk.UserId.ToString(),chk.Name, chk.Email));
            }
            else
            {
                return Ok("fail");
            }
        }
   
        [HttpGet("GetUser/{userId}")]
        public async Task<IActionResult> GetUser(int userId)
        {
            try
            {
                var user = await _context.Users.Where(u => u.UserId == userId).FirstOrDefaultAsync();

                if (user == null)
                {
                    return NotFound("User not found");
                }

             

                return Ok(user);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal Server Error");
            }
        }

    }
}

/* https://localhost:44340/ */
