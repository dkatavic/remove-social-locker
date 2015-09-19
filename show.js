// show.js

function hide(ms) {

	setTimeout( function() {

		var sections = document.getElementsByClassName("onp-sl-content");

		for (var i = 0; i < sections.length; i++) {
			sections[i].removeAttribute("style");
		}
		
	}, ms);

}

hide(0);
hide(1000);
hide(2000);
hide(10000);