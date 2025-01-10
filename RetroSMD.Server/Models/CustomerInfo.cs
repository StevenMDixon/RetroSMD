using System.ComponentModel.DataAnnotations;

namespace RetroSMD.Server.Models
{
    public class CustomerInfo
    {
        public required int CustomerInfoID { get; set; }
        public required string Name { get; set; }
        public required string Address { get; set; }
        public required string Email { get; set; }
        public required string Phone { get; set; }
    }
}
