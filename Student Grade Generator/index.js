const form = document.querySelector("form");
		const result = document.querySelector(".result");
		form.addEventListener("submit", (event) => {
			event.preventDefault();
			const marks = parseInt(form.elements.marks.value);
			if (isNaN(marks) || marks < 0 || marks > 100) {
				result.innerHTML = "Invalid input. Please enter a number between 0 and 100.";
			} else if (marks > 79) {
				result.innerHTML = "Grade: A";
			} else if (marks > 59) {
				result.innerHTML = "Grade: B";
			} else if (marks > 49) {
				result.innerHTML = "Grade: C";
			} else if (marks > 39) {
				result.innerHTML = "Grade: D";
			} else {
				result.innerHTML = "Grade: E";
			}
			form.reset();
		});