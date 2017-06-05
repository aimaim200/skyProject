const customerLocationService = (customerId) => {
  const customers = [
    {
      customerId: '12345',
      locationId: '1111',
      location: 'LONDON',
    },
    {
      customerId: '23456',
      locationId: '1141',
      location: 'LIVERPOOL',
    },
    {
      customerId: '34567',
      locationId: '1131',
    },
  ];

  const getLocationId = customers.filter(customer => customer.customerId === customerId);
  if (getLocationId.length < 0) {
    throw new Error('There was an error retrieving the customer\'s Info');
  }
  return getLocationId[0].locationId;
};
export default customerLocationService;
