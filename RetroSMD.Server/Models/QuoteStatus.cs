using System.ComponentModel.DataAnnotations;

namespace RetroSMD.Server.Models
{
    public class QuoteStatus
    {
        [Key]
        public required int StatusID { get; set; }
        public required string Name { get; set; }
    }
}