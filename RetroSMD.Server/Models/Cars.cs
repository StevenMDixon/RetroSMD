using System.ComponentModel.DataAnnotations;
using System.Numerics;

namespace RetroSMD.Server.Models
{
    public class Car
    {
        [Key]
        public required int carid { get; set; }
        public required string brand { get; set; }
        public required string model { get; set; }
        public required int year { get; set; }
    }
}
