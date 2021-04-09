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
        public class WebShopController : ControllerBase
        {
            private readonly IProductRepository _productRepository;

            public WebShopController(IProductRepository context)
            {
                _productRepository = context;
            }

            // GET: api/Producten
            /// <summary>
            /// Get all producten ordered by name
            /// </summary>
            /// <returns>array of producten</returns>
            [HttpGet]
            public IEnumerable<Product> GetProducten(string name = null, int price = 0)
            {
                if (string.IsNullOrEmpty(name) && (0 == price))
                    return _productRepository.GetAll();
                return _productRepository.GetBy(name, price);
            }

            // GET: api/Producten/5
            /// <summary>
            /// Get the product with given id
            /// </summary>
            /// <param name="id">the id of the product</param>
            /// <returns>The product</returns>
            [HttpGet("{id}")]
            public ActionResult<Product> GetProduct(int id)
            {
                Product product = _productRepository.GetBy(id);
                if (product == null) return NotFound();
                return product;
            }

            // POST: api/Producten
            /// <summary>
            /// Adds a new product
            /// </summary>
            /// <param name="product">the new product</param>
            [HttpPost]
            public ActionResult<Product> PostProduct(ProductDTO product)
            {
                Product productToCreate = new Product() { Name = product.Name, Price = product.Price };
                _productRepository.Add(productToCreate);
                _productRepository.SaveChanges();

                return CreatedAtAction(nameof(GetProduct), new { id = productToCreate.Id }, productToCreate);
            }

            // PUT: api/Producten/5
            /// <summary>
            /// Modifies a product
            /// </summary>
            /// <param name="id">id of the product to be modified</param>
            /// <param name="recipe">the modified product</param>
            [HttpPut("{id}")]
            public IActionResult PutProduct(int id, Product product)
            {
                if (id != product.Id)
                {
                    return BadRequest();
                }
                _productRepository.Update(product);
                _productRepository.SaveChanges();
                return NoContent();
            }

            // DELETE: api/Producten/5
            /// <summary>
            /// Deletes a product
            /// </summary>
            /// <param name="id">the id of the product to be deleted</param>

            [HttpDelete("{id}")]
            public IActionResult DeleteProduct(int id)
            {
                Product product = _productRepository.GetBy(id);
                if (product == null)
                {
                    return NotFound();
                }
                _productRepository.Delete(product);
                _productRepository.SaveChanges();
                return NoContent();
            }

        }
    
}
