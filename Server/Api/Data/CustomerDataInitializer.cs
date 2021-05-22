namespace Api.Data
{
    public class CustomerDataInitializer
    {
        private readonly ProductContext _dbContext;

        public CustomerDataInitializer(ProductContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void InitializeData()
        {
            _dbContext.Database.EnsureDeleted();
            if (_dbContext.Database.EnsureCreated())
            {
                //seeding the database with producten, see DBContext               
            }
        }

    }

}
