function convertToMilliliters() {
	document.getElementById("outputArea").value =
		parseFloat(document.getElementById("milliliter").value) /
		parseFloat(document.getElementById("imperial").value);
}
