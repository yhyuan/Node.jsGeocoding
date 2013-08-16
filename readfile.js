// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}
var __ = require("underscore");
var geocodeAddressArray = function(addressArray) {
	if(addressArray.length === 0) {
		return;
	} else {
		console.log(addressArray[0]);
		geocodeAddressArray(__.rest(addressArray));
	}
}
// Read the file and print its contents.
var fs = require('fs')
  , filename = process.argv[2];
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  //console.log('OK: ' + filename);
  console.log(data.trim().split("\n"))
  var addressArray = data.trim().split("\n");
  geocodeAddressArray(addressArray);
});