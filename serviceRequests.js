const serviceRequests = [
  {
    date: new Date(),
    service: "drywall",
    description: "Fix hole in drywall",
    location: {
      address: "1310 Water St",
      unit: "",
      city: "Kelowna",
      postal_code: "V1Y 9P3",
      province: "BC",
    },
    contact: {
      first_name: "John",
      family_name: "Smith",
      phone: "6472336916",
      email: "john.smith@yahoo.com"
    }
  },
  {
    date: new Date(),
    service: "painting",
    description: "Paint outside fence with total length of 20 yards",
    location: {
      address: "5500 Clements Crescent",
      unit: "23",
      city: "Peachland",
      postal_code: "V0H 1X6",
      province: "BC",
    },
    contact: {
      first_name: "Karen",
      family_name: "Johnson",
      phone: "2407881234",
      email: "karen01@hotmail.com"
    }
  }
];

module.exports = serviceRequests;