using Microsoft.EntityFrameworkCore;

namespace RetroSMD.Server.Context
{
    public class DatabaseContext(DbContextOptions<DatabaseContext> options) : DbContext(options)
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLowerCaseNamingConvention();

            base.OnConfiguring(optionsBuilder);
        }

        public DbSet<RetroSMD.Server.Models.Quotes> quotes { get; set; }
        public DbSet<RetroSMD.Server.Models.QuoteStatus> quoteStatus { get; set; }
        public DbSet<RetroSMD.Server.Models.CustomerInfo> customerInfo { get; set; } 
        public DbSet<RetroSMD.Server.Models.Services> services { get; set; }
        public DbSet<RetroSMD.Server.Models.QuoteServices> quoteServices { get; set; }
    }
}
