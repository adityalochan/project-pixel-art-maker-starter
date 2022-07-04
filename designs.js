// Initializing variable and loading values for HTML 
const sizePicker = document.getElementById('sizePicker');
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const color = document.getElementById('colorPicker');

// Click event listener for changing background color of grid 
function respondToTheClick(evt) {
	evt.target.style.backgroundColor = color.value;
}

// function to create grid based on user entered height and width 
function makeGrid(height, width) {
	// Initializing table and laoding value from html ID 
	var myTableDiv = document.getElementById('pixelCanvas');

	myTableDiv.innerHTML = "";
	var tableBody = document.createElement('TBODY');

	// Using two loops to iterate until user entered height and width and creating respective grid 
	for (var i = 0; i < height.value; i++) {
		var tr = document.createElement('TR');
		tableBody.appendChild(tr);

		for (var j = 0; j < width.value; j++) {
			var td = document.createElement('TD');

			tr.appendChild(td);
		}
	}
	// Event listener for click event on each attribute in grid 
	myTableDiv.addEventListener('click', respondToTheClick);
	myTableDiv.appendChild(tableBody);
}

// Event listener for click event on submit button which leads to makeGrid function call to make grid 
sizePicker.addEventListener('submit', function(event) {
	event.preventDefault();
	makeGrid(height, width)
});