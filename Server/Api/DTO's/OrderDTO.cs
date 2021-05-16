using System.ComponentModel.DataAnnotations;

namespace Api.DTO_s
{
    public class OrderDTO
    {

        [Required]
        public string UserName { get; set; }

        public string Producten { get; set; }

    }
}