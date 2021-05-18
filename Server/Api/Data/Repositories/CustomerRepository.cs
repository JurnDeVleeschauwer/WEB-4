using Microsoft.EntityFrameworkCore;
using Api.Models;
using System.Linq;

namespace Api.Data.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly ProductContext _context;
        private readonly DbSet<Customer> _customers;

        public CustomerRepository(ProductContext dbContext)
        {
            _context = dbContext;
            _customers = dbContext.Customers;
        }

        //public Customer GetBy(string email)
        //{
            //return _customers.Include(c => c.Orders).ThenInclude(f => f.Order).SingleOrDefault(c => c.Email == email);
        //}

        public void Add(Customer customer)
        {
            _customers.Add(customer);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }
    }
}