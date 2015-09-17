
//instantiate temrinal object
var terminal = {
	user: "guest@over300laughs:",
	directory:  "~",
	comp: '$ '
};

window.onload = function() {
	done();
	
}

function done() {
	var guest = terminal.user + terminal.directory + terminal.comp;
	var cmdLine = document.getElementById("user");
	var form = document.createElement("FORM");
	var label = document.createElement("LABEL");
	var input = document.createElement("INPUT");
	form.setAttribute("class", "terminal-form");
	label.setAttribute("class", "username");
	input.setAttribute("class", "await");
	input.setAttribute("type", "text");
	input.setAttribute("spellcheck", "false");
	cmdLine.appendChild(form);
	form.appendChild(label);
	label.innerHTML = guest;
	form.appendChild(input);
	attachListeners();
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
			cmd = document.querySelector(".await").value;

			document.querySelector(".await").remove();
			document.querySelector(".terminal-form").appendChild(cmd);
			// document.querySelector(".username").remove();
			// document.querySelector(".terminal-form").remove();

			runCmd(cmd);
		}
	});
}

function runCmd(cmd) {
	done();
	console.log(cmd);

}