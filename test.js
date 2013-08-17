var geocoder = require('geocoder');
 
// Geocoding
geocoder.geocode("Atlanta, GA", function ( err, data ) {
  // do stuff with data
   console.log(data.results[0].formatted_address);
   console.log(data.results[0].geometry.location.lat);
   console.log(data.results[0].geometry.location.lng);
   console.log(data.results[0].geometry.location_type);
});