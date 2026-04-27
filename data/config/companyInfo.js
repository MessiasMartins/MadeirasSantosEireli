const companyInfo = {
  brandName: 'Madeiras Santos',
  legalName: 'Madeiras Santos',
  address: {
    street: 'Avenida Portugal 901A - Santa Amélia',
    city: 'Belo Horizonte',
    state: 'MG',
    postalCode: '31550-000',
    country: 'BR',
    full: 'Avenida Portugal 901A - Santa Amélia, Belo Horizonte / MG',
  },
  contact: {
    phoneDisplay: '(31) 3653-2390',
    phoneRaw: '+553136532390',
    phoneHref: 'tel:+553136532390',
    email: 'comercial@madeirassantos.com.br',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '12:00',
    },
  ],
  links: {
    whatsapp:
      'https://api.whatsapp.com/send?phone=5531992482390&text=Ol%C3%A1!%20Vim%20pelo%20link%20do%20WhatsApp%20no%20site.%20Quero%20saber%20mais%20sobre%20seus%20produtos%20e%20servi%C3%A7os.',
    instagram: 'https://www.instagram.com/madeirassantos/',
    googleBusiness:
      'https://www.google.com/maps/place/Madeiras+Santos/@-19.8436181,-43.9877025,15z/data=!4m6!3m5!1s0x0:0xeae93a7279947fed!8m2!3d-19.8436181!4d-43.9877025!16s%2Fg%2F11j1nzd0tr',
    routeMap:
      'https://www.google.com/maps/place/Madeiras+Santos/@-19.8436181,-43.9877025,15z/data=!4m6!3m5!1s0x0:0xeae93a7279947fed!8m2!3d-19.8436181!4d-43.9877025!16s%2Fg%2F11j1nzd0tr',
  },
}

module.exports = companyInfo
