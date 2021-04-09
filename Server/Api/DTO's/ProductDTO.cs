using System.ComponentModel.DataAnnotations;

namespace Api.DTO_s
{
    public class ProductDTO
    {

        [Required]
        public string Name { get; set; }

        public int Price { get; set; }
    
    }
}
