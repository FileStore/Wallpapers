//****************************************
//PHONEGAP DEVICE READY FUNCTIONS:
//****************************************

function onPageLoad()
{
	document.addEventListener("deviceready", onDeviceReady, false);
}

//This code runs when the device is ready
function onDeviceReady()
{
	navigator.notification.alert("PhoneGap is ready...", false, "READY", "OK");
}

//****************************************
//DEVICE MOTION (ACCELEROMETER) FUNCTIONS:
//****************************************
function getDeviceMotion()
{
	navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);
}

function accelerometerSuccess(acceleration)
{
	var myAcceleration = document.getElementById("accelerometerInfo");
	myAcceleration.innerHTML = "<b>X =</b> " + acceleration.x + "<br><b>Y =</b> " + acceleration.y + "<br><b>Z =</b> " + acceleration.z;
}

function accelerometerError()
{
	navigator.notification.alert("ERROR: Sorry, the accelerometer is not available.", false, "Accelerometer Error", "That's odd....");
}

//***************************************
//DEVICE ORIENTATION (COMPASS) FUNCTIONS:
//***************************************
function getCompassInfo()
{
	navigator.compass.getCurrentHeading(compassSuccess, compassError);
}

function compassSuccess(heading)
{
	var myCompassDirection = document.getElementById("compassInfo");
	myCompassDirection.innerHTML = "Heading: " + heading.magneticHeading;
}

function compassError()
{
	navigator.notification.alert("ERROR: Sorry, the compass is not available.", false, "Compass Error", "That's odd....");
}

//***************************************
//DEVICE INFORMATION FUNCTION:
//***************************************
function getDeviceInfo(info)
{
	var myDeviceInfo = document.getElementById("deviceInfo");
	myDeviceInfo.innerHTML = "Cordova Version: " + device.cordova + "<br>" +
	                         "Device Model: " + device.model + "<br>" +
							 "Device Platform: " + device.platform + "<br>" + 
							 "Device UUID: " + device.uuid + "<br>" + 
							 "Operating System Version: " + device.version + "<br>";
}

//***************************************
//GEOLOCATION FUNCTIONS:
//***************************************
function getLocation()
{
	navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);
}

function geolocationSuccess(position)
{
	var myLocation = document.getElementById("locationResult");
	myLocation.innerHTML = "Latitude: " + position.coords.latitude + "<br>" +
						   "Longitude: " + position.coords.longitude + "<br>" +
                           "Altitude: " + position.coords.altitude + "<br>" +
                           "Accuracy: " + position.coords.accuracy + "<br>" +
                           "Altitude Accuracy: " + position.coords.altitudeAccuracy + "<br>" +
                           "Heading: " + position.coords.heading + "<br>" +
                           "Speed: " + position.coords.speed + "<br>" +
                           "Timestamp: " + position.timestamp + "<br>";
}

function geolocationError()
{
	navigator.notification.alert("ERROR: Sorry, I cannot find you.", false, "Location Error", "That's odd....");
}

//***************************************
//VIBRATION FUNCTION:
//***************************************
function timedVibration()
{
	navigator.vibrate(6000);
	var timedVib = document.getElementById("vibrationResult");
	timedVib.innerHTML = "Device should now vibrate for 6 seconds.";
}

function patternVibration()
{
	navigator.vibrate([300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300]);
	var patternVib = document.getElementById("vibrationResult");
	patternVib.innerHTML = "Device should now pulse 6 times.";
}

//****************************************
//CAMERA FUNCTIONS:
//****************************************
function takePicture()
{
	navigator.camera.getPicture(cameraSuccess, cameraError, {quality : 45, destinationType: Camera.DestinationType.FILE_URI, targetWidth : 800, targetHeight : 600, correctOrientation:true});
}

function cameraSuccess(imageURI)
{
	var image = document.getElementById('takenImage');
    image.src = imageURI;
	image.innerHTML = "<img src=\"" + imageURI + "\" width=\"100%\"></img>";
}

function cameraError()
{
	navigator.notification.alert("ERROR: Sorry, camera is not working.", false, "Camera Error", "That's odd....");
}