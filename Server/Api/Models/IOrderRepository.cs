using System.Collections.Generic;

namespace Api.Models
{
    public interface IOrderRepository
    {
        Order GetBy(int id);
        bool TryGetOrder(int id, out Order order);
        IEnumerable<Order> GetAll();
        IEnumerable<Order> GetBy(string userName = null, string producten = null);
        void Add(Order order);
        void Delete(Order order);
        void Update(Order order);
        void SaveChanges();

    }
}
