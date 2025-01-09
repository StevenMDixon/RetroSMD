using System.ComponentModel.DataAnnotations;
using System.Numerics;

namespace RetroSMD.Server.Models
{
    public class Quote
    {
        [Key]
        public required int id { get; set; }
    }
}
