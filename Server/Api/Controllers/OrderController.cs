using Api.DTO_s;
using Api.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Api.Controllers
{
    [ApiConventionType(typeof(DefaultApiConventions))]
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderRepository _orderRepository;

        public OrderController(IOrderRepository context)
        {
            _orderRepository = context;
        }

        // GET: api/Order
        /// <summary>
        /// Get all orders ordered by name
        /// </summary>
        /// <returns>array of orders</returns>
        [HttpGet]
        public IEnumerable<Order> GetOrder(string userName = null, string producten = null)
        {
            if (string.IsNullOrEmpty(userName) && string.IsNullOrEmpty(producten))
                return _orderRepository.GetAll();
            return _orderRepository.GetBy(userName, producten);
        }

        // GET: api/Order/5
        /// <summary>
        /// Get the order with given id
        /// </summary>
        /// <param id="id">the id of the order</param>
        /// <returns>The order</returns>
        [HttpGet("{id}")]
        public ActionResult<Order> GetOrder(int id)
        {
            Order order = _orderRepository.GetBy(id);
            if (order == null) return NotFound();
            return order;
        }

        // POST: api/Order
        /// <summary>
        /// Adds a new order
        /// </summary>
        /// <param userName="order">the new order</param>
        [HttpPost]
        public ActionResult<Order> PostOrder(OrderDTO order)
        {
            Order orderToCreate = new Order() { UserName = order.UserName, Producten = order.Producten };
            _orderRepository.Add(orderToCreate);
            _orderRepository.SaveChanges();

            return CreatedAtAction(nameof(GetOrder), new { id = orderToCreate.Id }, orderToCreate);
        }

        // PUT: api/Order/5
        /// <summary>
        /// Modifies a order
        /// </summary>
        /// <param id="id">id of the order to be modified</param>
        /// <param userName="order">the modified order</param>
        [HttpPut("{id}")]
        public IActionResult PutOrder(int id, Order order)
        {
            if (id != order.Id)
            {
                return BadRequest();
            }
            _orderRepository.Update(order);
            _orderRepository.SaveChanges();
            return NoContent();
        }

        // DELETE: api/Order/5
        /// <summary>
        /// Deletes a order
        /// </summary>
        /// <param name="id">the id of the order to be deleted</param>

        [HttpDelete("{id}")]
        public IActionResult DeleteOrder(int id)
        {
            Order order = _orderRepository.GetBy(id);
            if (order == null)
            {
                return NotFound();
            }
            _orderRepository.Delete(order);
            _orderRepository.SaveChanges();
            return NoContent();
        }
    }

}
