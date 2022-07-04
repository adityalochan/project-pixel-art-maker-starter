const sizePicker = document.getElementById('sizePicker');
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const color = document.getElementById('colorPicker');

function respondToTheClick(evt) {
	evt.target.style.backgroundColor = color.value;
}

function makeGrid(height, width) {

	console.log("Height:" + height + " width:" + width + " Color: " + color);

	var myTableDiv = document.getElementById('pixelCanvas');

	myTableDiv.innerHTML = "";
	var tableBody = document.createElement('TBODY');


	for (var i = 0; i < height.value; i++) {
		var tr = document.createElement('TR');
		tableBody.appendChild(tr);

		for (var j = 0; j < width.value; j++) {
			var td = document.createElement('TD');

			tr.appendChild(td);
		}
	}
	myTableDiv.addEventListener('click', respondToTheClick);
	// myTableDiv.appendChild(table);
	myTableDiv.appendChild(tableBody);
}

sizePicker.addEventListener('submit', function (event) {
	event.preventDefault();
	makeGrid(height, width)
});

// sizePicker.addEventListener("submit", makeGrid(height,width));