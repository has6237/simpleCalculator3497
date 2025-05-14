function addition() {
	let yourNumber1 = parseFloat(document.getElementById("firstNumber").value);
	let yourNumber2 = parseFloat(document.getElementById("secondNumber").value);

	let yourResult = yourNumber1 + yourNumber2;

	document.getElementById("result").innerHTML = yourResult;
}


function subtraction() {
	let yourNumber1 = parseFloat(document.getElementById("firstNumber").value);
	let yourNumber2 = parseFloat(document.getElementById("secondNumber").value);

	let yourResult = yourNumber1 - yourNumber2;

	document.getElementById("result").innerHTML = yourResult;
}

function multiplication() {
	let yourNumber1 = parseFloat(document.getElementById("firstNumber").value);
	let yourNumber2 = parseFloat(document.getElementById("secondNumber").value);

	let yourResult = yourNumber1 * yourNumber2;

	document.getElementById("result").innerHTML = yourResult;
}


function division() {
	let yourNumber1 = parseFloat(document.getElementById("firstNumber").value);
	let yourNumber2 = parseFloat(document.getElementById("secondNumber").value);

	let yourResult = yourNumber1 / yourNumber2;

	document.getElementById("result").innerHTML = yourResult;
}