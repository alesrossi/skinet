using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class OrderDto
    {
        public string BasketId { get; set; }
        [Range(1, 4, ErrorMessage = "Delivery method is required")]
        public int DeliveryMethodId { get; set; }
        public AddressDto ShipToAddress { get; set; }
    }
}