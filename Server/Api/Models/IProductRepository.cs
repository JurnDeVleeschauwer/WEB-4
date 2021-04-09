using System.Collections.Generic;

namespace Api.Models
{
    public interface IProductRepository
    {
        Product GetBy(int id);
        bool TryGetProduct(int id, out Product product);
        IEnumerable<Product> GetAll();
        IEnumerable<Product> GetBy(string name = null, int price = 0);
        void Add(Product product);
        void Delete(Product product);
        void Update(Product product);
        void SaveChanges();
    }
}
