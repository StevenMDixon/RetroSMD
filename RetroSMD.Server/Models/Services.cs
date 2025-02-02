using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RetroSMD.Server.Models
{
    public class Services
    {
        [Key]
        public required int ServiceID { get; set; }
        public required string Name { get; set; }
        public required string Description { get; set; }
        public required Decimal Price { get; set; }

        [ForeignKey("TypeID")]
        public required int TypeID { get; set; }
        public required Types Type { get; set; }

        [ForeignKey("CategoryID")]
        public required int CategoryID { get; set; }
        public required Categories Category{ get; set; }

        [ForeignKey("ConsoleID")]
        public required int ConsoleID { get; set; }
        public required Consoles Console { get; set; }

        [ForeignKey("PlatformID")]
        public required int PlatformID { get; set; }
        public required Platforms Platform { get; set; }

        public required bool Available { get; set; }
    }
}
