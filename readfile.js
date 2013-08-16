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
		geocoder.geocode(addressArray[0], function ( err, data ) {
			console.log(addressArray[0]);
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