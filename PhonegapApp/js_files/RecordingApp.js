$(document).ready(function() {
	$("#validateLogin").click( function() {
		var username = $("#user").val();
		var password = $("#pword").val();

		if( username != "" && password != "") {
			console.log("UserName: "+username);
			console.log("Password: "+password);

			record();
			/*$.ajax({
		         type: 'GET',
		         url: 'https://accounts.google.com/o/oauth2/revoke?token=' +gapi.auth.getToken().access_token,
		         async: false,
		         contentType: 'application/json',
		         dataType: 'jsonp',
		         success: function(result) {
		           console.log('Response revoked');
		         },
		         error: function(e) {
		           console.log(e);
		         }
			});*/
		}
	});

	$("img").click(function(){
		$(".active").toggle();
	});
	/*$("#mic").click( function() {
		$("#mic").hide();
		$("#pause").show();
	});

	$("#pause").click( function() {
		if($("#mic .active")) {
			$("#pause").hide();
			$("#mic").show();
		}
		else if($("#play .active")) {
			$("#pause").hide();
			$("#play").show();
		}
	});

	$("#play").click( function() {
		$("#play").hide();
		$("#pause").show();
	});*/
});

function record() {
	$("#loginPage").hide();
	$("#validLogin").show();
	$("#recordingPage").show();

	$("#mic").click( function() {
		$("#progress").show();
		$("#done").show();
		captureAudio();
	});

	$("#pause").click( function() {
		$("#progress").hide();
	});

	$("#done").click( function() {
		$("#progress").hide();
		$("#done").hide();
		$("#saving").show();
		$("#mic").removeClass("active").hide();
		$("#pause").hide();
		$("#play").addClass("active").show();
	});
}

function captureAudio() {
	// Launch device audio recording application,
	// allowing user to capture up to 2 audio clips
	navigator.device.capture.captureAudio(captureSuccess, captureError, {limit: 2});
}

function captureSuccess(mediaFiles) {
	var i, len;
	for (i = 0, len = mediaFiles.length; i < len; i += 1) {
		$("#saving").hide();
		$("#temp").append(mediaFiles[i]);
	}
}

// Called if something bad happens.//
function captureError(error) {
	var msg = 'An error occurred during capture: ' + error.code;
	navigator.notification.alert(msg, null, 'Uh oh!');
}

