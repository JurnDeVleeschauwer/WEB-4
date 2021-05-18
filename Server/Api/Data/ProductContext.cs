using Api.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Api.Data
{
    public class ProductContext : IdentityDbContext
    {
        public ProductContext(DbContextOptions<ProductContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
             builder.Entity<Product>().Property(r => r.Name).IsRequired().HasMaxLength(50);
            builder.Entity<Product>().Property(r => r.Price).IsRequired();

            builder.Entity<Customer>().Property(c => c.LastName).IsRequired().HasMaxLength(50);
            builder.Entity<Customer>().Property(c => c.FirstName).IsRequired().HasMaxLength(50);
            builder.Entity<Customer>().Property(c => c.Email).IsRequired().HasMaxLength(100);

            //Another way to seed the database
            builder.Entity<Product>().HasData(
                 new Product { Id = 1, Name = "Spaghetti", Price = 5 },
                 new Product { Id = 2, Name = "Tomato soup", Price = 6 }
  );

        }

        public DbSet<Product> Producten { get; set; }
        public DbSet<Customer> Customers { get; set; }
    }
}
