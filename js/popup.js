var popLink = document.querySelector(".popup_link");
		var popWrapper =  document.querySelector(".popup_wrapper");
		var pop =  document.querySelector(".popup");
		var popClose = document.querySelector(".close_popup");
		var form = popWrapper.querySelector("form");
		var login = popWrapper.querySelector(".how_name");
		var mail = popWrapper.querySelector(".you_mail");
		var storage = localStorage.getItem("login");

		popLink.addEventListener("click", function(event) {
			event.preventDefault();
			popWrapper.classList.add("show_popup");
			if (storage) {
				login.value = storage;
				mail.focus();
			} else {
				login.focus();
			}
		});

		popClose.addEventListener("click", function(event) {
			event.preventDefault();
			popWrapper.classList.remove("show_popup");
			pop.classList.remove("popup_error");
		});

		form.addEventListener("submit", function(event) {
			if (!login.value || !mail.value) {
				event.preventDefault();
				pop.classList.remove("popup_error");
				pop.offsetWidth = pop.offsetWidth;
				pop.classList.add("popup_error");
			} 
			else {
				localStorage.setItem("login", login.value);
			}
		});

		window.addEventListener("keydown", function(event) {
			if (event.keyCode === 27) {
 				if (popWrapper.classList.contains("show_popup")) {
 					popWrapper.classList.remove("show_popup");
 					pop.classList.remove("popup_error");
 				}
 			}
 		});