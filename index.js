//when the jQuery Mobile page is initialised
$(document).on('pageinit', function() {
	var watchID;

	//set up listener for button click
	$('#getLocationButtonOn').on('click', getPosition);
    $('#getLocationButtonOff').on('click', clearPosition);
	
	//change time box to show message
	$('#time').val("Press the button to get location data");
	
});


//Call this function when you want to get the current position
function getPosition() {
	
	//change time box to show updated message
	$('#time').val("Getting data...");
	    var locationOptions = {
maximumAge: 10000,
timeout: 6000,
enableHighAccuracy: true
};
	//instruct location service to get position with appropriate callbacks
    watchID = navigator.geolocation.watchPosition(success, fail, locationOptions);

}

//Call this function when you want to get the current position
function clearPosition() {
	
	navigator.geolocation.clearWatch(watchID);

}
//called when the position is successfully determined
function success(position) {
	
	//You can find out more details about what the position obejct contains here:
	// http://www.w3schools.com/html/html5_geolocation.asp
	

	//lets get some stuff out of the position object
	
    var unixtime = new Date(position.timestamp);
    
    var time = unixtime.toDateString();
	var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
	
	//OK. Now we want to update the display with the correct values
	$('#time').val("Recieved data at " + time + unixtime.toTimeString());
	$('#lattext').val(latitude);
    $('#longtext').val(longitude);
	
}

//called if the position is not obtained correctly
function fail(error) {
	//change time box to show updated message
	$('#time').val("Error getting data: " + error);
	
}