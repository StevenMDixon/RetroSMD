using System.ComponentModel.DataAnnotations;

namespace RetroSMD.Server.Models
{
    public class Categories
    {
        [Key]
        public required int CategoryID { get; set; }

        public required string Name { get; set; }
    }
}
