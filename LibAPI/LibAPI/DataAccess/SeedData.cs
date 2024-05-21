using LibAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LibAPI.DataAccess
{
    public class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new LibDbContext(serviceProvider.GetRequiredService<DbContextOptions<LibDbContext>>()))
            {
                if (context.Users.Any())
                {
                    return;
                }

                
                
                var user2 = new User
                {
                    Name = "Kalam",
                    Email = "kalam@gmail.com",
                    Password = "kalam123",
                    Token = 3,
                    NumberOfBorrow = 0,
                    NumberOfLent = 0
                };
                context.Users.Add(user2);
                var user3 = new User
                {
                    Name = "Ansari",
                    Email = "ansari@gmail.com",
                    Password = "ansari123",
                    Token = 3,
                    NumberOfBorrow = 0,
                    NumberOfLent = 0
                };
                context.Users.Add(user3);
                var user4 = new User
                {
                    Name = "Aman",
                    Email = "aman@gmail.com",
                    Password = "aman123",
                    Token = 3,
                    NumberOfBorrow = 0,
                    NumberOfLent = 0
                };
                context.Users.Add(user4);
                var user10 = new User
                {
                    Name = "Mohd",
                    Email = "mohd@gmail.com",
                    Password = "mohd123",
                    Token = 3,
                    NumberOfBorrow = 0,
                    NumberOfLent = 0
                };
                context.Users.Add(user10);
                context.SaveChanges();
            }
        }
    }
}
