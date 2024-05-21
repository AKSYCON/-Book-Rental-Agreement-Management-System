using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LibAPI.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int Token { get; set; }
        public int NumberOfBorrow { get; set; }
        public int NumberOfLent { get; set; }
        public ICollection<Book> Books { get; set; }
    }
}
