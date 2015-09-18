
//instantiate temrinal object
var terminal = {
	user: "guest@over300laughs:",
	directory:  "~",
	comp: '$ '
};

window.onload = function() {
	done(true);
	attachListeners();
}

function done(first) {
	var guest = terminal.user + terminal.directory + terminal.comp;
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
		span.setAttribute("class", "history");
		div.appendChild(span).innerHTML = guest;
		form.appendChild(input);
		var cmd = "";
	}
	else {
		var span = document.createElement("SPAN");
		span.setAttribute("class", "history");
		// form.appendChild(span).innerHTML = guest;
		//get value of input
		var cmd = document.querySelector('.await').value;
		span.innerHTML = guest + cmd;
		var div = document.querySelector('.span-wrapper');
		div.appendChild(span).innerHTML;
	}
	console.log('made it here');
	//  var input = document.createElement("INPUT");
	// 	var guest = terminal.user + terminal.directory + terminal.comp;
	// 	form.setAttribute("class", "terminal-form");
	// 	label.setAttribute("class", "username");
	// 	form.appendChild(label);
	// 	form.appendChild(input);
}

function attachListeners() {
	//make active on click
	document.querySelector(".terminal-form").addEventListener("submit", function(e){ 
		e.preventDefault();
	});
	document.querySelector(".terminal-wrapper").addEventListener("click", function(){ 
		document.querySelector(".await").focus();
	});
	//listen for enter
	document.querySelector(".await").addEventListener("keypress", function(e){
		var cmd = "";
		var key = e.which || e.keyCode;
		if(key === 13) {
			done(false);
			// cmd = document.querySelector(".await").value;
			// document.querySelector(".await").remove();
			// document.querySelector(".terminal-form").appendChild(cmd);
			// document.querySelector(".username").remove();
			// document.querySelector(".terminal-form").remove();

			//runCmd(cmd);
		}
	});
}

function runCmd(cmd) {
	done();
	console.log(cmd);

}