const ShopInfo = () => {
  const services = [
    { name: 'Knippen', price: 25, duration: '30 min' },
    { name: 'Baard trimmen', price: 15, duration: '15 min' },
    { name: 'Knippen + Baard', price: 35, duration: '45 min' },
    { name: 'Hot Towel Shave', price: 30, duration: '30 min' }
  ];

  return (
    <section>
      <h2>Onze Services</h2>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.name}</h3>
            <p>€{service.price}</p>
            <p>{service.duration}</p>
          </div>
        ))}
      </div>
      
      <div className="shop-details">
        <p><strong>Openingstijden:</strong> Ma-Za 9:00-18:00</p>
        <p><strong>Adres:</strong> Kerkstraat 123, Amsterdam</p>
      </div>
    </section>
  );
};

export default ShopInfo;
