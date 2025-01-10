using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RetroSMD.Server.Models
{
    public class QuoteServices
    {
        [Key]
        public required string QuoteServiceID { get; set; }
        [ForeignKey("QuoteID")]
        public required string QuoteID { get; set; }
        public Quotes Quote { get; set; }
        [ForeignKey("ServiceID")]
        public required string ServiceID { get; set; }
        public Services Service { get; set; }
    }
}
