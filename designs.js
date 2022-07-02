// debugger;

// REFERENCES
// https://stackoverflow.com/questions/14643617/create-table-using-javascript
// https://stackoverflow.com/questions/27044956/javascript-change-the-color-of-current-element-by-clck
const sizePicker = document.getElementById('sizePicker');
const height = document.getElementById('inputHeight').value;
const width = document.getElementById('inputWidth').value;
const color = document.getElementById('colorPicker').value;

function respondToTheClick(evt) {
	evt.target.style.backgroundColor = color;
}

function makeGrid(height,width) {

	console.log("Height:" + height + " width:" + width + " Color: " + color);

  var myTableDiv = document.getElementById('pixelCanvas');
	var table = document.createElement('TABLE');
	table.border = '2';

	var tableBody = document.createElement('TBODY');
	table.appendChild(tableBody);

	for (var i = 0; i < height; i++) {
		var tr = document.createElement('TR');
		tableBody.appendChild(tr);

		for (var j = 0; j < width; j++) {
			var td = document.createElement('TD');
			td.width = '75';
			td.appendChild(document.createTextNode("   "));
			tr.appendChild(td);
		}
	}
	myTableDiv.addEventListener('click', respondToTheClick);
	myTableDiv.appendChild(table);
}

sizePicker.addEventListener('click', function (event) {
  event.preventDefault();
});

sizePicker.addEventListener("submit", makeGrid(height,width));