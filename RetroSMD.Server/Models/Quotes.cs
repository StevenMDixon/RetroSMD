using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Numerics;

namespace RetroSMD.Server.Models
{
    public class Quotes
    {
        [Key]
        public required int QuoteID { get; set; }

        [ForeignKey("StatusID")]
        public required int StatusID { get; set; }

        public QuoteStatus Status { get; set; }

        [ForeignKey("CustomerInfoID")]
        public required int CustomerInfoID { get; set; }

        public CustomerInfo Customer { get; set; }

        public required DateTime CreatedDate { get; set; }
    }
}
