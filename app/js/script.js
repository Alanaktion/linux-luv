
//instantiate temrinal object
var terminal = {
	user: "guest@over300laughs:",
	directory:  "~",
	comp: '$ '
};

window.onload = function() {
	done(true);
	attachListeners();
	attachInputListener();
}

//TODO: make into two functions
function done(first) {
	var guest = terminal.user + terminal.directory + terminal.comp;
	//run first time through
	if(first == true) {
		var form = document.createElement("FORM");
		form.setAttribute("class", "terminal-form");

		var cmdLine = document.getElementById("user");
		cmdLine.appendChild(form);

		var div = document.createElement("DIV");
		div.setAttribute("class", "span-wrapper");
		form.appendChild(div);
		
		var input = document.createElement("INPUT");
		input.setAttribute("type", "text");
		input.setAttribute("spellcheck", "false");
		input.setAttribute("class", "await");
		var span = document.createElement("SPAN");
		span.setAttribute("class", "current");
		div.appendChild(span).innerHTML = guest;
		div.appendChild(input);
	}
	//runs every time after
	else {
		var cmd = document.querySelector('.await').value;
		document.querySelector('.await').remove();
		document.querySelector('.current').remove();
		var span = document.createElement("SPAN");
		span.setAttribute("class", "history");
		span.innerHTML = guest + cmd;

		var div = document.querySelector('.span-wrapper');
		div.appendChild(span);

		//Get response
		var respond = runCmd(cmd);
		var response = document.createElement("SPAN");
		response.setAttribute("class", "history");
		response.innerHTML = respond;
		div.appendChild(response);

		var span = document.createElement("SPAN");
		span.setAttribute("class", "current");
		div.appendChild(span).innerHTML = guest;

		var input = document.createElement("INPUT");
		input.setAttribute("type", "text");
		input.setAttribute("spellcheck", "false");
		input.setAttribute("class", "await");
		div.appendChild(input);

		attachInputListener();
	}
}

function attachInputListener() {
	document.querySelector(".terminal-wrapper").addEventListener("click", function(){ 
		document.querySelector(".await").focus();
	});
	document.querySelector(".await").addEventListener("keypress", function(e){
		//listen for enter key
		var key = e.which || e.keyCode;
		if(key === 13) {
			done(false);
			document.querySelector(".await").focus();
		}
	});
}

function attachListeners() {
	//make active on click
	document.querySelector(".terminal-form").addEventListener("submit", function(e){ 
		e.preventDefault();
	});
}
//TODO: run commands using user input
function runCmd(cmd) {
	return cmd + ": command not found";
}