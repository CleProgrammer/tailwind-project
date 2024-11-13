/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    screens: {
      'mobile': {'max': '480px'},
      'extrasmalldevices': {'min': '481px', 'max': '767px'},
      'smalltablets': {'min': '768px', 'max': '991px'},
      'largetablets/laptops': {'min': '992px', 'max': '1199'},
      'desktops': {'min': '1200px', 'max': '1919px'},
      'extralargescreens': {'min': '1920px'},
    },

    extend: {
      width: {
        '10': '10%',
        '20': '20%',
        '40': '40%',
        '60': '60%',
        '80': '80%',
        '90': '90%',
      },
      height: {
        '10': '10%',
        '20': '20%',
        '40': '40%',
        '60': '60%',
        '80': '80%',
        '90': '90%',
      }
    },
  },
  plugins: [],
}

