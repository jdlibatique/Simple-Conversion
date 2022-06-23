function convertToMilliliters() {
	document.getElementById("outputArea").value =
		parseFloat(document.getElementById("milliliter").value) /
		parseFloat(document.getElementById("imperial").value);
}

function convertOnKeyDown() {
	document.getElementById("outputArea").value =
		(parseFloat(document.getElementById("milliliter").value) /
			parseFloat(document.getElementById("imperial").value)) *
		parseFloat(document.getElementById("metric").value);
}

function convertOnKeyDownOutput() {
	document.getElementById("milliliter").value =
		(parseFloat(document.getElementById("imperial").value) *
			parseFloat(document.getElementById("outputArea").value)) /
		parseFloat(document.getElementById("metric").value);
}
