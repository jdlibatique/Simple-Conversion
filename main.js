// const convertToMilliliters = () =>
// 	document.getElementById("outputArea").value =
// 		parseFloat(document.getElementById("milliliter").value) /
// 		parseFloat(document.getElementById("imperial").value);
//
//
// const convertOnKeyDown = () =>
// 	document.getElementById("outputArea").value =
// 		(parseFloat(document.getElementById("milliliter").value) /
// 			parseFloat(document.getElementById("imperial").value)) *
// 			parseFloat(document.getElementById("metric").value);
//
//
// const convertOnKeyDownOutput = () =>
// 	document.getElementById("milliliter").value =
// 		(parseFloat(document.getElementById("imperial").value) *
// 			parseFloat(document.getElementById("outputArea").value)) /
// 			parseFloat(document.getElementById("metric").value);

// let leftBox = document.getElementById("metric");
// console.log(leftBox.options[leftBox.selectedIndex].dataset);

const convertMeasurements = () => {
	// const leftBox = document.getElementById("left-unit");
	// const leftBoxMeasurement = leftBox.options[leftBox.selectedIndex].dataset;

	const formatter = new Intl.NumberFormat('en-US', {
		minimumFractionDigits: 0,
		maximumFractionDigits: 4,
	});

	const leftBoxMeasurement = document.getElementById("left-unit").options
		[document.getElementById("left-unit").selectedIndex].dataset;

	// const rightBox = document.getElementById("right-unit");
	// const rightBoxMeasurement = rightBox.options[rightBox.selectedIndex].dataset;

	const rightBoxMeasurement = document.getElementById("right-unit").options
		[document.getElementById("right-unit").selectedIndex].dataset;

	console.log(leftBoxMeasurement.measurement);
	console.log(rightBoxMeasurement.measurement);

	if (parseFloat(document.getElementById("left-box").value) < 0 ||
		parseFloat(document.getElementById("right-box").value) < 0)
		alert("Please enter a positive value");
	else if (leftBoxMeasurement.measurement === "metric" &&
		rightBoxMeasurement.measurement === "imperial") {
		console.log("Metric Left Imperial Right");
		document.getElementById("right-box").value =
			formatter.format((parseFloat(document.getElementById("left-box").value) /
				parseFloat(document.getElementById("right-unit").value)) *
			parseFloat(document.getElementById("left-unit").value));
	} else if (leftBoxMeasurement.measurement === "imperial" &&
		rightBoxMeasurement.measurement === "metric") {
		console.log("Imperial Left Metric Right");
		document.getElementById("right-box").value =
			formatter.format((parseFloat(document.getElementById("left-unit").value) *
				parseFloat(document.getElementById("left-box").value)) /
			parseFloat(document.getElementById("right-unit").value));
	} else if (leftBoxMeasurement.measurement === rightBoxMeasurement.measurement &&
		parseFloat(document.getElementById("left-unit").value) ===
		parseFloat(document.getElementById("right-unit").value)){
		console.log("Entered Structure")
		alert("Please select different units");
	} else if (leftBoxMeasurement.measurement ===
		rightBoxMeasurement.measurement && parseFloat(document.getElementById("left-unit").value) !==
		parseFloat(document.getElementById("right-unit").value)) {
		console.log("Same measurement system");
		//console.log("Entered Structure");
		document.getElementById("right-box").value =
			formatter.format((parseFloat(document.getElementById("left-box").value) *
				parseFloat(document.getElementById("left-unit").value)) /
			parseFloat(document.getElementById("right-unit").value));
	} else
		console.log("1");
}

const convertMeasurementsRight = () => {
	// const leftBox = document.getElementById("left-unit");
	// const leftBoxMeasurement = leftBox.options[leftBox.selectedIndex].dataset;

	const formatter = new Intl.NumberFormat('en-US', {
		minimumFractionDigits: 0,
		maximumFractionDigits: 4,
	});

	const leftBoxMeasurement = document.getElementById("left-unit").options
		[document.getElementById("left-unit").selectedIndex].dataset;

	// const rightBox = document.getElementById("right-unit");
	// const rightBoxMeasurement = rightBox.options[rightBox.selectedIndex].dataset;

	const rightBoxMeasurement = document.getElementById("right-unit").options
		[document.getElementById("right-unit").selectedIndex].dataset;

	console.log(leftBoxMeasurement.measurement);
	console.log(rightBoxMeasurement.measurement);


	if (parseFloat(document.getElementById("left-box").value) < 0 ||
		parseFloat(document.getElementById("right-box").value) < 0)
		alert("Please enter a positive value");
	else if (leftBoxMeasurement.measurement === "metric" &&
		rightBoxMeasurement.measurement === "imperial") {
		console.log("Metric Left Imperial Right");
		document.getElementById("left-box").value =
			formatter.format((parseFloat(document.getElementById("right-box").value) *
				parseFloat(document.getElementById("right-unit").value)) /
			parseFloat(document.getElementById("left-unit").value));
	} else if (leftBoxMeasurement.measurement === "imperial" &&
		rightBoxMeasurement.measurement === "metric") {
		console.log("Imperial Left Metric Right");
		document.getElementById("left-box").value =
			formatter.format((parseFloat(document.getElementById("left-unit").value) /
				parseFloat(document.getElementById("right-box").value)) *
			parseFloat(document.getElementById("right-unit").value));
	} else if (leftBoxMeasurement.measurement === rightBoxMeasurement.measurement &&
		parseFloat(document.getElementById("left-unit").value) ===
		parseFloat(document.getElementById("right-unit").value)){
		console.log("Entered Structure")
		alert("Please select different units");
	} else if (leftBoxMeasurement.measurement ===
		rightBoxMeasurement.measurement &&
		parseFloat(document.getElementById("left-unit").value) !==
		parseFloat(document.getElementById("right-unit").value)) {
		console.log("Same measurement system");
		document.getElementById("left-box").value =
			formatter.format((parseFloat(document.getElementById("right-box").value) /
				parseFloat(document.getElementById("left-unit").value)) *
			parseFloat(document.getElementById("right-unit").value));
	} else
		console.log("1");
}
