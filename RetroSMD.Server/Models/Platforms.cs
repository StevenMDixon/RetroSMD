using System.ComponentModel.DataAnnotations;

namespace RetroSMD.Server.Models
{
    public class Platforms
    {
        [Key]
        public required int PlatformID { get; set; }

        public required string Name { get; set; }
    }
}
