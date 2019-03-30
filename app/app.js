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
	$(document).on('keydown', function(e) {
  		console.log(e.which);
    if (e.which === 65) {
		//var audio = new Audio('file:///Users/huntermason/Documents/Samples/Free%20808%20From%20Mars/Maschine/Free%20808%20From%20Mars/Cleancut%20Kit%20-%20Free%20808%20From%20Mars%20Samples/BD%20808%20Noise%2001.wav')
		var audioA = new Audio('file:///Users/huntermason/Documents/Piano%20Samples/Inst%201C2.wav')
		audioA.play();
		// $(document).on('keyup', function(e) {
		// 	if (e.which === 65) {
		// 		audioA.pause();
		// 	}
		// });
    } else if (e.which === 87) {
 		//var audioSnare = new Audio('file:///Users/huntermason/Documents/Samples/Free%20808%20From%20Mars/Maschine/Free%20808%20From%20Mars/Cleancut%20Kit%20-%20Free%20808%20From%20Mars%20Samples/SD%20B%20808%20Tape%20Tone%20C%2006.wav')
		var audioW = new Audio('file:///Users/huntermason/Documents/Piano%20Samples/Inst%201C%232.wav')
		//audioSnare.play();
		//var audioClap = new Audio('file:///Users/huntermason/Documents/Samples/Free%20808%20From%20Mars/Maschine/Free%20808%20From%20Mars/Heavy%20Sat%20Kit%20-%20Free%20808%20From%20Mars%20Samples/Clap%20808%20Sat%20B%2003.wav')
		//audioClap.play();
		audioW.play();
    } else if (e.which === 83) {
		//var audioHiHat = new Audio('file:///Users/huntermason/Documents/Samples/Free%20808%20From%20Mars/Maschine/Free%20808%20From%20Mars/Cleancut%20Kit%20-%20Free%20808%20From%20Mars%20Samples/CH%20A%20808%20Tape.wav')
		var audioS = new Audio('file:///Users/huntermason/Documents/Piano%20Samples/Inst%201D.wav')
		//audioHiHat.play();
		audioS.play();
    } else if (e.which === 69) {
    	var audioE = new Audio('file:///Users/huntermason/Documents/Piano%20Samples/Inst%201D%23.wav');
    	audioE.play();
    } else if (e.which === 68) {
    	var audioD = new Audio('file:///Users/huntermason/Documents/Piano%20Samples/Inst%201E.wav');
    	audioD.play();
    } else if (e.which === 70) {
    	var audioF = new Audio('file:///Users/huntermason/Documents/Piano%20Samples/Inst%201F.wav');
    	audioF.play();
    } else if (e.which === 84) {
    	var audioT = new Audio('file:///Users/huntermason/Documents/Piano%20Samples/Inst%201F%23.wav');
    	audioT.play();
    } else if (e.which === 71) {
    	var audioG = new Audio('file:///Users/huntermason/Documents/Piano%20Samples/Inst%201G.wav');
    	audioG.play();
    } else if (e.which === 89) {
    	var audioY = new Audio('file:///Users/huntermason/Documents/Piano%20Samples/Inst%201G%23.wav');
    	audioY.play();
    } else if (e.which === 72) {
    	var audioH = new Audio('file:///Users/huntermason/Documents/Piano%20Samples/Inst%201A.wav');
    	audioH.play();
    } else if (e.which === 85) {
    	var audioU = new Audio('file:///Users/huntermason/Documents/Piano%20Samples/Inst%201A%23.wav');
    	audioU.play();
    } else if (e.which === 74) {
    	var audioJ = new Audio('file:///Users/huntermason/Documents/Piano%20Samples/Inst%201B.wav');
    	audioJ.play();
    } else if (e.which === 75) {
    	var audioK = new Audio('file:///Users/huntermason/Documents/Piano%20Samples/Inst%201C3.wav');
    	audioK.play();
    } else if (e.which === 79) {
    	var audioO = new Audio('file:///Users/huntermason/Documents/Piano%20Samples/Inst%201C%233.wav');
    	audioO.play();
    } else if (e.which === 76) {
    	var audioL = new Audio('file:///Users/huntermason/Documents/Piano%20Samples/Inst%201D3.wav');
    	audioL.play();
    } else if (e.which === 80) {
    	var audioP = new Audio('file:///Users/huntermason/Documents/Piano%20Samples/Inst%201D%233.wav');
    	audioP.play();
    } else if (e.which === 186) {
    	var audioE3 = new Audio('file:///Users/huntermason/Documents/Piano%20Samples/Inst%201E3.wav');
    	audioE3.play();
    } else if (e.which === 222) {
    	var audioF3 = new Audio('file:///Users/huntermason/Documents/Piano%20Samples/Inst%201F3.wav');
    	audioF3.play();
    }
	});

	$('#btn-create').on('click', function(e) {
		var key = $('#key').val();
		var value = $('#value').val();
		var keyExists = localStorage.getItem(key) !== null;
		var audio = new Audio('file:///Users/huntermason/Documents/Samples/Free%20808%20From%20Mars/Maschine/Free%20808%20From%20Mars/Cleancut%20Kit%20-%20Free%20808%20From%20Mars%20Samples/BD%20808%20Noise%2001.wav')
		audio.play();

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


	$('#btn-update').on('click', function(e) {
		var key = $('#key').val();
		var value = $('#value').val();
		var existingValue = localStorage.getItem(key)
		var keyExists = existingValue !== null;
		var audio = new Audio('file:///Users/huntermason/Documents/Samples/Free%20808%20From%20Mars/Maschine/Free%20808%20From%20Mars/Cleancut%20Kit%20-%20Free%20808%20From%20Mars%20Samples/SD%20B%20808%20Tape%20Tone%20C%2006.wav')
		audio.play();
		if (value === existingValue) {
			updateStatusLabel('key not updated - that value already exists silly! xD')
		} else if (keyExists) {
			updateEntry(key, value);
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
		var audio = new Audio('file:///Users/huntermason/Documents/Samples/Free%20808%20From%20Mars/Maschine/Free%20808%20From%20Mars/Cleancut%20Kit%20-%20Free%20808%20From%20Mars%20Samples/CH%20A%20808%20Tape.wav')
		audio.play();
		if (keyExists) {
			removeEntry(key);
			updateStatusLabel('key removed - ' + key);
		} else if (key === '') {
			updateStatusLabel('invalid input!')
		} else {
			updateStatusLabel('key doesn\'t exist, nothing removed. :|');
		}

		loadLocalStorage();
	});	

});
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
