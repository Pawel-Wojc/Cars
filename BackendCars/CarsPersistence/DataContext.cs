
using CarsDomain;
using Microsoft.EntityFrameworkCore;
namespace CarsPersistence
{
    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Car> Cars { get; set; }
    }
}

