using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RetroSMD.Server.Models
{
    public class QuoteServices
    {
        [Key]
        public required int QuoteServiceID { get; set; }
        [ForeignKey("QuoteID")]
        public required int QuoteID { get; set; }
        public required Quotes Quote { get; set; }
        [ForeignKey("ServiceID")]
        public required int ServiceID { get; set; }
        public required Services Service { get; set; }
    }
}
