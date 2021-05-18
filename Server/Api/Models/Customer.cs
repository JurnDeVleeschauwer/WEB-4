using System.Collections.Generic;
using System.Linq;

namespace Api.Models
{
    public class Customer
    {

        //add extra properties if needed
        public int CustomerId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        //public ICollection<Order> Orders { get; private set; }

        #region Constructors
        public Customer()
        {
            //Orders = new List<Order>();
        }
        #endregion
        //public void AddOrder(Order order)
        //{
        //Orders.Add(new Order());
        //}

    }
}