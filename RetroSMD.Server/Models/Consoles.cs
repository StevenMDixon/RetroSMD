using System.ComponentModel.DataAnnotations;

namespace RetroSMD.Server.Models
{
    public class Consoles
    {
        [Key]
        public required int ConsoleID { get; set; }

        public required string Name { get; set; }
    }
}
