using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Order
    {
        public int Id { get; set; }

        [Required]
        public string UserName { get; set; }

        public string Producten { get; set; }


        public Order()
        {
        }

        public Order(string userName, string producten) : this()
        {
            UserName = userName;
            Producten = producten;
        }


    }
}
