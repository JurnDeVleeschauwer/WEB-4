using Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Api.Data.OrderRepository
{
    public class OrderRepository : IOrderRepository
    {
        private readonly OrderContext _context;
        private readonly DbSet<Order> _orders;

        public OrderRepository(OrderContext dbContext)
        {
            _context = dbContext;
            _orders = dbContext.Orders;
        }

        public IEnumerable<Order> GetAll()
        {
            return _orders.ToList();
        }

        public Order GetBy(int id)
        {
            return _orders.SingleOrDefault(r => r.Id == id);
        }

        public bool TryGetOrder(int id, out Order order)
        {
            order = _context.Orders.FirstOrDefault(t => t.Id == id);
            return order != null;
        }

        public void Add(Order order)
        {
            _orders.Add(order);
        }

        public void Update(Order order)
        {
            _context.Update(order);
        }

        public void Delete(Order order)
        {
            _orders.Remove(order);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public IEnumerable<Order> GetBy(string userName = null, string producten = null)
        {
            var orders = _orders.AsQueryable();
            if (!string.IsNullOrEmpty(userName))
                orders = orders.Where(r => r.UserName.IndexOf(userName) >= 0);
            if (!string.IsNullOrEmpty(producten))
                orders = orders.Where(r => r.Producten == producten);
            return orders.OrderBy(r => r.UserName).ToList();
        }

    }
}
