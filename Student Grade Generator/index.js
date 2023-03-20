function calculateGrade() {
	let maths = parseFloat(document.getElementById("maths").value);
	let science = parseFloat(document.getElementById("science").value);
	let english = parseFloat(document.getElementById("english").value);
	let average = (maths + science + english) / 3;
	let grade;

	if (average >= 80) {
		grade = "A";
	} else if (average >= 60 && average < 80) {
		grade = "B";
	} else if (average >= 50 && average < 60) {
		grade = "C";
	} else if (average >= 40 && average < 50) {
		grade = "D";
	} else {
		grade = "E";
	}

	document.getElementById("result").innerHTML = "Your average grade is: " + grade;
}
