namespace Api.Data
{
    public class ProductDataInitializer
    {
        private readonly ProductContext _dbContext;

        public ProductDataInitializer(ProductContext dbContext)
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
