using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Data
{
    public class OrderContext : DbContext
    {
        public OrderContext(DbContextOptions<OrderContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<Order>().Property(r => r.UserName).IsRequired().HasMaxLength(50);
            builder.Entity<Order>().Property(r => r.Producten).IsRequired();

            //Another way to seed the database
            builder.Entity<Order>().HasData(
                 new Order { Id = 1, UserName = "Jurn", Producten = "{ Id = 1, Name = 'spagetti', Price = 5 }" },
                 new Order { Id = 2, UserName = "Jurn", Producten = "{ Id = 1, Name = 'soep', Price = 9 }" }
  );

        }

        public DbSet<Order> Orders { get; set; }
    }
}
