using LibAPI.DataAccess;
using LibAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LibAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly LibDbContext _context;

        public BookController(LibDbContext context)
        {
            _context = context;
        }

        [HttpPost("AddBook")]
        public async Task<IActionResult> AddBook([FromBody] Book book, int userId)
        {
            try
            {
                
                var user = await _context.Users.Where(u => u.UserId == userId).FirstOrDefaultAsync();

                if (user == null)
                {
                    return NotFound("User not found");
                }

                
                book.UserId = user.UserId;
                book.User = user;
                book.LenderName = user.Name;
                book.LentById = user.UserId;
                book.Available = "Yes";
                user.NumberOfLent = user.NumberOfLent + 1;

                await _context.Books.AddAsync(book);
                await _context.SaveChangesAsync();

                return Ok();
            }
            catch
            {
                
                return StatusCode(500, "Internal Server Error");
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAllBooks()
        {
            var book = await _context.Books.ToListAsync();
            return Ok(book);
        }
        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetBookById([FromRoute] int id)
        {
            var book = await _context.Books.FirstOrDefaultAsync(x => x.Id == id);
            if(book == null)
            {
                return Ok("Not Found");
            }
            return Ok(book);
        }

        [HttpGet("BookUser/{id}")]
        public async Task<ActionResult<List<Book>>> GetBookbyUser(int id)
        {
            var userBook = await _context.Books.Where(x => x.UserId == id).ToListAsync();
            if(userBook == null)
            {
                return NotFound();
            }
            return Ok(userBook);
        }

        [HttpPost("BorrowBook")]
        public async Task<IActionResult> BorrowBook(int bookId, int borrowerUserId)
        {
            try
            {
                var book = await _context.Books.FindAsync(bookId);
                var borrower = await _context.Users.FindAsync(borrowerUserId);

                if (book == null || borrower == null)
                {
                    return NotFound();
                }

                
                if (book.Available == "")
                {
                    return BadRequest();
                }
                book.Available = "No"; 
                book.CurrentlyBorrowedById = borrower.UserId; 
                borrower.Token--; 
                borrower.NumberOfBorrow++; 
                
                var lender = await _context.Users.FindAsync(book.UserId);

                if (lender != null)
                {
                    
                    lender.Token++; 
                }

                await _context.SaveChangesAsync();

                return Ok();
            }
            catch
            {
                return StatusCode(500, "Internal Server Error");
            }
        }

        [HttpGet("Borrow/{id}")]
        public async Task<ActionResult<List<Book>>> GetBorrowBookById(int id)
        {
            var borrowBook = await _context.Books.Where(x => x.CurrentlyBorrowedById == id).ToListAsync();
            if(borrowBook == null)
            {
                return NotFound();
            }
            return Ok(borrowBook);
        }

    }
}
