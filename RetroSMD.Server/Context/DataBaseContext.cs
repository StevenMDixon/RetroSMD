using Microsoft.EntityFrameworkCore;

namespace RetroSMD.Server.Context
{
    public class DatabaseContext(DbContextOptions<DatabaseContext> options) : DbContext(options)
    {
        public DbSet<Models.Quote> Quotes { get; set; }

        public DbSet<Models.Car> cars { get; set; }
    }
}
