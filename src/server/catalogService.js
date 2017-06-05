const catalogService = (locationId) => {
  const allServices = [
    { category: 'sports',
      products: [{
        product: 'Arsenal TV',
        locationId: '1111',
      },
      {
        product: 'Chelsea TV',
        locationId: '1111',
      },
      {
        product: 'Liverpool TV',
        locationId: '1141',
      }] },
    { category: 'news',
      products: [{
        product: 'Sky News',
        locationId: '1111',
      },
      {
        product: 'Sky Sports News',
        locationId: '1111',
      }] },
  ];

  const getServicesById = allServices.map((service) => {
    const filteredProducts = service.category === 'sports' ? service.products.filter(product => product.locationId === locationId) : service.products;
    service.products = filteredProducts;
    return service;
  });
  return getServicesById;
};
export default catalogService;
