using Api.Models;
using Microsoft.AspNetCore.Identity;

namespace Api.Data
{
    public class ProductDataInitializer
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly ICustomerRepository _customerRepository;
        private readonly ProductContext _dbContext;

        public ProductDataInitializer(ProductContext dbContext, UserManager<IdentityUser> userManager,
          ICustomerRepository customerRepository)
        {
            _userManager = userManager;
            _customerRepository = customerRepository;
            _dbContext = dbContext;
        }

        public void InitializeData()
        {
            _dbContext.Database.EnsureDeleted();
            if (_dbContext.Database.EnsureCreated())
            {

                //seeding the database with producten, see DBContext  
                SeedCustomer("Fake@email.com", "FakeFirstName", "FakeLastName");
                SeedCustomer("admin@email.com", "admin", "admin");
            }
        }
        
        private void SeedCustomer(string Email, string FirstName, string LastName)
        {
            IdentityUser user = new IdentityUser { UserName = Email, Email = Email };
            Customer customer = new Customer { FirstName = FirstName, LastName = LastName, Email = Email };
            var result = _userManager.CreateAsync(user, "Azerty123+").Result;


            if (result.Succeeded)
            {
                _customerRepository.Add(customer);
                _customerRepository.SaveChanges();
            }
        }
    }

}
