using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Product
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public int Price { get; set; }


        public Product()
        {
        }

        public Product(string name) : this()
        {
            Name = name;
        }


    }
}
