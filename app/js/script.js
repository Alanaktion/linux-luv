
//instantiate temrinal object
var terminal = {
	user: "guest@over300laughs:",
	directory:  "~",
	comp: '$ ',
	done: function (first) {
		var guest = terminal.user + terminal.directory + terminal.comp;
		//run first time through
		if(first === true) {
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
			document.querySelector(".await").focus();
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

			//run command
			if(cmd !== "") {
				this.runCmd(cmd);
			}

			span = document.createElement("SPAN");
			span.setAttribute("class", "current");
			div.appendChild(span).innerHTML = guest;

			var input = document.createElement("INPUT");
			input.setAttribute("type", "text");
			input.setAttribute("spellcheck", "false");
			input.setAttribute("class", "await");
			div.appendChild(input);

			this.attachInputListener();
		}
	},
	attachInputListener: function() {
		document.querySelector(".terminal-wrapper").addEventListener("click", function(){ 
			document.querySelector(".await").focus();
		});
		document.querySelector(".await").addEventListener("keypress", function(e){
			//listen for enter key
			var key = e.which || e.keyCode;
			if(key === 13) {
				terminal.done(false);
				document.querySelector(".await").focus();
			}
		});
	},
	attachListeners: function() {
		//make active on click
		document.querySelector(".terminal-form").addEventListener("submit", function(e){ 
			e.preventDefault();
		});
	},
	runCmd: function (cmd) {
		var line = cmd.split(' ');
		try {
			//use string as function
			window[line[0]][line[1]](cmd);
		}
		catch(e) {
			var div = document.querySelector('.span-wrapper');
			var response = document.createElement("SPAN");
			response.setAttribute("class", "history");
			response.innerHTML = cmd + ": command not found";
			div.appendChild(response);
		}
	}
};

window.onload = function() {
	terminal.done(true);
	terminal.attachListeners();
	terminal.attachInputListener();
};

var mtr = {
	css: function (cmd) {
		var div = document.querySelector('.span-wrapper');
		var response = document.createElement("SPAN");
		response.setAttribute("class", "history");
		response.innerHTML = "!important: Selecting elements using classes is far more scalable than using ID's or html elements. Classes classes clasess!";
		div.appendChild(response);
	}
};
