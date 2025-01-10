using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.EntityFrameworkCore;
using RetroSMD.Server.Context;

namespace RetroSMD.Server.Models
{
    public class Services
    {
        [Key]
        public required string ServiceID { get; set; }
        public required string Name { get; set; }
        public required string Description { get; set; }
        public required Decimal Price { get; set; }
        public required bool Available { get; set; }
    }
}
