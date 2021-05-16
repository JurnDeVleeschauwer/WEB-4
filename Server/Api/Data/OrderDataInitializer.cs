namespace Api.Data
{
    public class OrderDataInitializer
    {
        private readonly OrderContext _dbContext;

        public OrderDataInitializer(OrderContext dbContext)
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
