using Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Api.Data.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly ProductContext _context;
        private readonly DbSet<Product> _producten;

        public ProductRepository(ProductContext dbContext)
        {
            _context = dbContext;
            _producten = dbContext.Producten;
        }

        public IEnumerable<Product> GetAll()
        {
            return _producten.ToList();
        }

        public Product GetBy(int id)
        {
            return _producten.SingleOrDefault(r => r.Id == id);
        }

        public bool TryGetProduct(int id, out Product product)
        {
            product = _context.Producten.FirstOrDefault(t => t.Id == id);
            return product != null;
        }

        public void Add(Product product)
        {
            _producten.Add(product);
        }

        public void Update(Product product)
        {
            _context.Update(product);
        }

        public void Delete(Product product)
        {
            _producten.Remove(product);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public IEnumerable<Product> GetBy(string name = null, int price = 0)
        {
            var producten = _producten.AsQueryable();
            if (!string.IsNullOrEmpty(name))
                producten = producten.Where(r => r.Name.IndexOf(name) >= 0);
            if (!(0 == price))
                producten = producten.Where(r => r.Price == price);
            return producten.OrderBy(r => r.Name).ToList();
        }
    }
}
