using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LibAPI.Models
{
    public class Book
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int UserId { get; set; }
        public string Name { get; set; }
        public int Rating { get; set; }
        public string Author { get; set; }
        public string Genre { get; set; }
        public string Available { get; set; }
        public string Description { get; set; }
        public int LentById { get; set; }
        public int CurrentlyBorrowedById { get; set; }
        public string LenderName { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }
    }
}
