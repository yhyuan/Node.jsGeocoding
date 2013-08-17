// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}
var __ = require("underscore");
var geocoder = require('geocoder');
 
var geocodeAddressArray = function(addressArray) {
	if(addressArray.length === 0) {
		return;
	} else {
		var address = addressArray[0].split("\t");
                var id = address[0];
		geocoder.geocode(address[1], function ( err, data ) {
                       if (data.hasOwnProperty('results') && (data.results.length > 0) ) {
			           console.log(id + "\t" + address[1]  + "\t" + data.results.length    + "\t" +  data.results[0].formatted_address  + "\t" + data.results[0].geometry.location.lat + "\t" + data.results[0].geometry.location.lng + "\t" + data.results[0].geometry.location_type);
                        }
			setTimeout(function(){
				geocodeAddressArray(__.rest(addressArray));
			},3000);
		});	
	}
}
// Read the file and print its contents.
var fs = require('fs')
  , filename = process.argv[2];
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  var addressArray = data.trim().split("\n");
  geocodeAddressArray(addressArray);
});