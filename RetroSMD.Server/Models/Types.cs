using System.ComponentModel.DataAnnotations;

namespace RetroSMD.Server.Models
{
    public class Types
    {
        [Key]
        public required int TypeID { get; set; }

        public required string Name { get; set; }
    }
}
