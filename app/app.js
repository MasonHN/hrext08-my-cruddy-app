URL = window.URL 

var gumStream;                   //stream from getUserMedia()
var rec;                      //Recorder.js object
var input;                    //MediaStreamAudioSourceNode we'll be recording

// shim for AudioContext when it's not avb. 
var AudioContext = window.AudioContext 
var audioContext //audio context to help us record

var recordButton = document.getElementById("recordButton");
var stopButton = document.getElementById("stopButton");
var pauseButton = document.getElementById("pauseButton");

var loadLocalStorage = function () {
	var keys = Object.keys(localStorage)
	var htmlString = '';
	for (var i = 0; i < keys.length; i++) {
		htmlString += `<tr><td>${keys[i]}</td><td>${localStorage[keys[i]]}</tr></tr>`;
	}
	$('tbody').html(htmlString)
};

var updateStatusLabel = function(message) {
	$('#statusLabel').text('Status: ' + message);
}
 //jQuery document ready initialization stuff
 ////button and form event handlers
 // logic for determining action probably needs to go in the event handler
$(document).ready(function () {
	loadLocalStorage();
	// sets the defaul sound library to be piano
	var instrument = 'piano';
	// gives user option to choose between two distinct sound libraries
	$('#btn-808').on('click', function(e) {
			instrument = '808'
			console.log(instrument)
			return instrument;
	});

	$('#btn-piano').on('click', function(e) {
			instrument = 'piano'
			console.log(instrument)
			return instrument;
	});
	// logic for determining which key is pressed, and which sound to play
	// changes visual representation of keyboard on keydown and keyup
	$(document).on('keydown', function(e) {
    if (e.which === 65) {
    	$("#C2-Key").prop('src', 'file:///Users/huntermason/Desktop/C%20Key%20copy%202.jpg')
    	if (instrument === '808') {
			var audioA = new Audio('file:///Users/huntermason/Documents/Samples/Free%20808%20From%20Mars/Maschine/Free%20808%20From%20Mars/Cleancut%20Kit%20-%20Free%20808%20From%20Mars%20Samples/BD%20808%20Noise%2001.wav')
		} else {
			var audioA = new Audio('file:///Users/huntermason/Documents/Long%20Piano%20Samples/Piano%20C2.wav')
		}
		audioA.play();
		$(document).on('keyup', function() {
			$("#C2-Key").prop('src', 'file:///Users/huntermason/Desktop/C%20Key.jpg')
		});

    } else if (e.which === 87) {
 		var audioSnare = new Audio('file:///Users/huntermason/Documents/Samples/Free%20808%20From%20Mars/Maschine/Free%20808%20From%20Mars/Cleancut%20Kit%20-%20Free%20808%20From%20Mars%20Samples/SD%20B%20808%20Tape%20Tone%20C%2006.wav')
		var audioW = new Audio('file:///Users/huntermason/Documents/Long%20Piano%20Samples/Piano%20C%232.wav')
		var audioClap = new Audio('file:///Users/huntermason/Documents/Samples/Free%20808%20From%20Mars/Maschine/Free%20808%20From%20Mars/Heavy%20Sat%20Kit%20-%20Free%20808%20From%20Mars%20Samples/Clap%20808%20Sat%20B%2003.wav')
    	$("#C2Sharp-Key").prop('src', 'file:///Users/huntermason/Desktop/C%20Sharp%20Key%20copy.jpg')
		if (instrument === '808') {
			audioClap.play();
			audioSnare.play();
		} else {
			audioW.play();
		}
		$(document).on('keyup', function() {
			$("#C2Sharp-Key").prop('src', 'file:///Users/huntermason/Desktop/C%20Sharp%20Key.gif')
		});
    } else if (e.which === 83) {
    	$("#D2-Key").prop('src', 'file:///Users/huntermason/Desktop/D%20Key%20copy.jpg')
		var audioHiHat = new Audio('file:///Users/huntermason/Documents/Samples/Free%20808%20From%20Mars/Maschine/Free%20808%20From%20Mars/Cleancut%20Kit%20-%20Free%20808%20From%20Mars%20Samples/CH%20A%20808%20Tape.wav')
		var audioS = new Audio('file:///Users/huntermason/Documents/Long%20Piano%20Samples/Piano%20D2.wav')
		if (instrument === '808') {
			audioHiHat.play();
		} else {
			audioS.play();
		}
		$(document).on('keyup', function() {
			$("#D2-Key").prop('src', 'file:///Users/huntermason/Desktop/D%20Key.gif')
		});
    } else if (e.which === 69) {
    	$("#D2Sharp-Key").prop('src', 'file:///Users/huntermason/Desktop/D%20Sharp%20Key%20copy.jpg')
    	var audioE = new Audio('file:///Users/huntermason/Documents/Long%20Piano%20Samples/Piano%20D%232.wav');
    	audioE.play();
		$(document).on('keyup', function() {
			$("#D2Sharp-Key").prop('src', 'file:///Users/huntermason/Desktop/D%20Sharp%20Key.gif')
		});
    } else if (e.which === 68) {
     	$("#E2-Key").prop('src', 'file:///Users/huntermason/Desktop/E%20Key%20copy.jpg')
    	var audioD = new Audio('file:///Users/huntermason/Documents/Long%20Piano%20Samples/Piano%20E2.wav');
    	audioD.play();
		$(document).on('keyup', function() {
			$("#E2-Key").prop('src', 'file:///Users/huntermason/Desktop/E%20Key.gif')
		});
    } else if (e.which === 70) {
    	$("#F2-Key").prop('src', 'file:///Users/huntermason/Desktop/C%20Key%20copy%202.jpg')
    	var audioF = new Audio('file:///Users/huntermason/Documents/Long%20Piano%20Samples/Piano%20F2.wav');
    	audioF.play();
		$(document).on('keyup', function() {
			$("#F2-Key").prop('src', 'file:///Users/huntermason/Desktop/C%20Key.jpg')
		});
    } else if (e.which === 84) {
    	$("#F2Sharp-Key").prop('src', 'file:///Users/huntermason/Desktop/C%20Sharp%20Key%20copy.jpg')
    	var audioT = new Audio('file:///Users/huntermason/Documents/Long%20Piano%20Samples/Piano%20F%232.wav');
    	audioT.play();
		$(document).on('keyup', function() {
			$("#F2Sharp-Key").prop('src', 'file:///Users/huntermason/Desktop/C%20Sharp%20Key.gif')
		});
    } else if (e.which === 71) {
    	$("#G2-Key").prop('src', 'file:///Users/huntermason/Desktop/D%20Key%20copy.jpg')
    	var audioG = new Audio('file:///Users/huntermason/Documents/Long%20Piano%20Samples/Piano%20G2.wav');
    	audioG.play();
		$(document).on('keyup', function() {
			$("#G2-Key").prop('src', 'file:///Users/huntermason/Desktop/D%20Key.gif')
		});
    } else if (e.which === 89) {
    	$("#G2Sharp-Key").prop('src', 'file:///Users/huntermason/Desktop/D%20Sharp%20Key%20copy.jpg')
    	var audioY = new Audio('file:///Users/huntermason/Documents/Long%20Piano%20Samples/Piano%20G%232.wav');
    	audioY.play();
		$(document).on('keyup', function() {
			$("#G2Sharp-Key").prop('src', 'file:///Users/huntermason/Desktop/D%20Sharp%20Key.gif')
		});
    } else if (e.which === 72) {
    	$("#A2-Key").prop('src', 'file:///Users/huntermason/Desktop/D%20Key%20copy.jpg')
    	var audioH = new Audio('file:///Users/huntermason/Documents/Long%20Piano%20Samples/Piano%20A2.wav');
    	audioH.play();
		$(document).on('keyup', function() {
			$("#A2-Key").prop('src', 'file:///Users/huntermason/Desktop/D%20Key.gif')
		});
    } else if (e.which === 85) {
    	$("#A2Sharp-Key").prop('src', 'file:///Users/huntermason/Desktop/C%20Sharp%20Key%20copy.jpg')
    	var audioU = new Audio('file:///Users/huntermason/Documents/Long%20Piano%20Samples/Piano%20A%232.wav');
    	audioU.play();
		$(document).on('keyup', function() {
			$("#A2Sharp-Key").prop('src', 'file:///Users/huntermason/Desktop/C%20Sharp%20Key.gif')
		});
    } else if (e.which === 74) {
    	$("#B2-Key").prop('src', 'file:///Users/huntermason/Desktop/E%20Key%20copy.jpg')
    	var audioJ = new Audio('file:///Users/huntermason/Documents/Long%20Piano%20Samples/Piano%20B2.wav');
    	audioJ.play();
		$(document).on('keyup', function() {
			$("#B2-Key").prop('src', 'file:///Users/huntermason/Desktop/E%20Key.gif')
		});
    } else if (e.which === 75) {
    	$("#C3-Key").prop('src', 'file:///Users/huntermason/Desktop/C%20Key%20copy%202.jpg')
    	var audioK = new Audio('file:///Users/huntermason/Documents/Long%20Piano%20Samples/Piano%20C3.wav');
    	audioK.play();
		$(document).on('keyup', function() {
			$("#C3-Key").prop('src', 'file:///Users/huntermason/Desktop/C%20Key.jpg')
		});
    } else if (e.which === 79) {
    	$("#C3Sharp-Key").prop('src', 'file:///Users/huntermason/Desktop/C%20Sharp%20Key%20copy.jpg')
    	var audioO = new Audio('file:///Users/huntermason/Documents/Long%20Piano%20Samples/Piano%20C%233.wav');
    	audioO.play();
		$(document).on('keyup', function() {
			$("#C3Sharp-Key").prop('src', 'file:///Users/huntermason/Desktop/C%20Sharp%20Key.gif')
		});
    } else if (e.which === 76) {
    	$("#D3-Key").prop('src', 'file:///Users/huntermason/Desktop/D%20Key%20copy.jpg')
    	var audioL = new Audio('file:///Users/huntermason/Documents/Long%20Piano%20Samples/Piano%20D3.wav');
    	audioL.play();
		$(document).on('keyup', function() {
			$("#D3-Key").prop('src', 'file:///Users/huntermason/Desktop/D%20Key.gif')
		});
    } else if (e.which === 80) {
    	$("#D3Sharp-Key").prop('src', 'file:///Users/huntermason/Desktop/D%20Sharp%20Key%20copy.jpg')
    	var audioP = new Audio('file:///Users/huntermason/Documents/Long%20Piano%20Samples/Piano%20D%233.wav');
    	audioP.play();
		$(document).on('keyup', function() {
			$("#D3Sharp-Key").prop('src', 'file:///Users/huntermason/Desktop/D%20Sharp%20Key.gif')
		});
    } else if (e.which === 186) {
    	$("#E3-Key").prop('src', 'file:///Users/huntermason/Desktop/E%20Key%20copy.jpg')
    	var audioE3 = new Audio('file:///Users/huntermason/Documents/Long%20Piano%20Samples/Piano%20E3.wav');
    	audioE3.play();
		$(document).on('keyup', function() {
			$("#E3-Key").prop('src', 'file:///Users/huntermason/Desktop/E%20Key.gif')
		});
    } else if (e.which === 222) {
    	$("#F3-Key").prop('src', 'file:///Users/huntermason/Desktop/Last%20Key%20copy.jpg')
    	var audioF3 = new Audio('file:///Users/huntermason/Documents/Long%20Piano%20Samples/Piano%20F3.wav');
    	audioF3.play();
		$(document).on('keyup', function() {
			$("#F3-Key").prop('src', 'file:///Users/huntermason/Desktop/Last%20Key.gif')
		});
    }
	});

	$('#recordButton').on('click', function(e) {
		startRecording();
		var key = $('#key').val();
		var value = $('#value').val();
		var keyExists = localStorage.getItem(key) !== null;

		if (keyExists) {
			updateStatusLabel('key already exists, please use update button instead! :D');
		} else if (key === '') {
			updateStatusLabel('invalid input!')
		}else {
			createEntry(key, value);
			updateStatusLabel('key created - ' + key);
		}

		loadLocalStorage();
	});

	$('#pauseButton').on('click', function(e) {
		pauseRecording();
	});

	$('#stopButton').on('click', function(e) {
		stopRecording();
	});
	// $('#btn-create').on('click', function(e) {
	// 	var key = $('#key').val();
	// 	var value = $('#value').val();
	// 	var keyExists = localStorage.getItem(key) !== null;

	// 	if (keyExists) {
	// 		updateStatusLabel('key already exists, please use update button instead! :D');
	// 	} else if (key === '') {
	// 		updateStatusLabel('invalid input!')
	// 	}else {
	// 		createEntry(key, value);
	// 		updateStatusLabel('key created - ' + key);
	// 	}

	// 	loadLocalStorage();
	// });
	$('#btn-update').on('click', function(e) {
		var key = $('#key').val();
		var value = $('#value').val();
		var existingValue = localStorage.getItem(key)
		var keyExists = existingValue !== null;
		var file = '#' + key;
		if (value === existingValue) {
			updateStatusLabel('key not updated - that value already exists silly! xD')
		} else if (keyExists) {
			updateEntry(key, value);
			$(file).remove();
			startRecording();
			updateStatusLabel('key updated - ' + key);

		} else if (key === '') {
			updateStatusLabel('invalid input!')
		} else {
			updateStatusLabel('key doesn\'t exist, please use create button instead! :D');
		}		
		
		loadLocalStorage();		
	});

	$('#btn-delete').on('click', function(e) {
		var key = $('#key').val();
		var value = $('#value').val();
		var keyExists = localStorage.getItem(key) !== null;
		var file = '#' + key;
		if (keyExists) {
			removeEntry(key);
			updateStatusLabel('key removed - ' + key);
			$(file).remove();
		} else if (key === '') {
			updateStatusLabel('invalid input!')
		} else {
			updateStatusLabel('key doesn\'t exist, nothing removed. :|');
		}

		loadLocalStorage();
	});

});

//recording interface
function startRecording() {
   console.log("recordButton clicked");   
      // Simple constraints object, for more advanced audio features see
      // https://addpipe.com/blog/audio-constraints-getusermedia/       
    var constraints = { audio: true, video:false }
      // Disable the record button until we get a success or fail from getUserMedia()
   recordButton.disabled = true;
   stopButton.disabled = false;
   pauseButton.disabled = false  
      // We're using the standard promise based getUserMedia() 
      // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
   navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
      console.log("getUserMedia() success, stream created, initializing Recorder.js ...");
         // create an audio context after getUserMedia is called
         // sampleRate might change after getUserMedia is called, like it does on macOS when recording through AirPods
         // the sampleRate defaults to the one set in your OS for your playback device
      audioContext = new AudioContext();
      //update the format 
      /*  assign to gumStream for later use  */
      gumStream = stream;     
      /* use the stream */
      input = audioContext.createMediaStreamSource(stream);
         // Create the Recorder object and configure to record mono sound (1 channel)
         // Recording 2 channels  will double the file size
      rec = new Recorder(input,{numChannels:1})
      //start the recording process
      rec.record()
      console.log("Recording started");
   }).catch(function(err) {
      //enable the record button if getUserMedia() fails
      recordButton.disabled = false;
      stopButton.disabled = true;
      pauseButton.disabled = true
   });
}

function pauseRecording(){
   console.log("pauseButton clicked rec.recording=",rec.recording );
   if (rec.recording){
      //pause
      rec.stop();
      pauseButton.innerHTML="Resume";
   }else{
      //resume
      rec.record()
      pauseButton.innerHTML="Pause";
   }
}

function stopRecording() {
   console.log("stopButton clicked");
   //disable the stop button, enable the record too allow for new recordings
   stopButton.disabled = true;
   recordButton.disabled = false;
   pauseButton.disabled = true;
   //reset button just in case the recording is stopped while paused
   pauseButton.innerHTML="Pause";  
   //tell the recorder to stop the recording
   rec.stop();
   //stop microphone access
   gumStream.getAudioTracks()[0].stop();
   //create the wav blob and pass it on to createDownloadLink
   rec.exportWAV(createDownloadLink);
}

function createDownloadLink(blob) {   
   var url = URL.createObjectURL(blob);
   var au = document.createElement('audio');
   var li = document.createElement('li');
   var link = document.createElement('a');
   //name of .wav file to use during upload and download (without extendion)
   var filename = document.getElementById("key").value;
   li.setAttribute('id', filename)
   //add controls to the <audio> element
   au.controls = true;
   au.src = url;
   //save to disk link
   //link.href = url;
   //link.download = filename+".wav"; //download forces the browser to donwload the file using the  filename
   //link.innerHTML = "Save to disk";
   //add the new audio element to li
   li.appendChild(au);  
   //add the filename to the li
   li.appendChild(document.createTextNode(filename+".wav "))
   //add the save to disk link to li
   li.appendChild(link);
   //add the li element to the ol
   recordingsList.appendChild(li);
}

/*
When an input element is given a name, that name becomes a property of the owning form element's HTMLFormElement.elements property. That means if you have an input whose name is set to guest and another whose name is hat-size, the following code can be used:

let form = document.querySelector("form");
let guestName = form.elements.guest;
let hatSize = form.elements["hat-size"];
*/

/*
PAGE CONTENT STUFF
*/
//something to update the table every time localStorage changes

//localStorage stuff
//https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
////create new entry
//localStorage.setItem(key, value)
var createEntry = function(key, value) {
	return localStorage.setItem(key, value);
}

////Update existing entry
//localStorage.setItem(key, value)
var updateEntry = function(key, value) {
	return localStorage.setItem(key, value);
}

////delete existing entry
//localStorage.removeItem(key)
var removeEntry = function(key) {
	return localStorage.removeItem(key);
}
