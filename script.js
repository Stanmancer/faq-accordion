"use strict";

const answers = document.querySelectorAll(".answer");
const btnDropdown = document.querySelectorAll(".btn-dropdown");

let activeAcc = 0;

(function () {
	answers[activeAcc].classList.add("hidden");
	toggleDropdownIcon();
})();

/*
// old version toggle
const openDropdown = function () {
	// open dropdown
	answers[activeAcc].classList.toggle("active");

	// change dropdown icon
	document.getElementById(
		`dropdown-icon--${activeAcc}`
	).attributes.src.value = "assets/images/icon-minus.svg";
};

const closeDropdown = function () {
	// close dropdown
	answers[activeAcc].classList.toggle("active");

	// change dropdown icon
	document.getElementById(
		`dropdown-icon--${activeAcc}`
	).attributes.src.value = "assets/images/icon-plus.svg";
};
*/

// Toggle 2.0
const toggleDropdown = function () {
	answers[activeAcc].classList.toggle("hidden");
};

// toggle dropdown icon
function toggleDropdownIcon() {
	document.getElementById(
		`dropdown-icon--${activeAcc}`
	).attributes.src.value = `assets/images/icon-${
		answers[activeAcc].classList.contains("hidden") ? "plus" : "minus"
	}.svg`;
}

for (let i = 0; i < btnDropdown.length; i++) {
	btnDropdown[i].addEventListener("click", function () {
		if (i === 1 || i === 2) {
			activeAcc = i - 1;
		} else if (i === 3 || i === 4) {
			activeAcc = i - 2;
		} else if (i === 5 || i === 6) {
			activeAcc = i - 3;
		} else if (i === 7) {
			activeAcc = i - 4;
		} else {
			activeAcc = i;
		}

		toggleDropdown();
		toggleDropdownIcon();

		/*
		// old version toggle call
		if (answers[activeAcc].classList.contains("active")) {
			closeDropdown();
		} else {
			openDropdown();
		}
		*/

		// close any other open dropdown
		for (let j = 0; j < btnDropdown.length; j++) {
			if (j !== activeAcc) {
				answers[j].classList.add("hidden");
				document.getElementById(
					`dropdown-icon--${j}`
				).attributes.src.value = `assets/images/icon-${
					answers[j].classList.contains("hidden") ? "plus" : "minus"
				}.svg`;
			} else continue;
		}
	});
}
