/*const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list')

const li = document.createElement('li');
li.textContent = input.value;

const deleteButton = document.createElement('button');
deleteButton.textContent = '❌';

deleteButton.addEventListener("click", function () {
        list.removeChild(li);
        input.focus();
    });

li.appendChild(deleteButton);
list.append(li);


button.addEventListener('click', function() {
    if (input.value.trim() !== '');
});

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});

input.value = '';
input.focus();*/

// select elements from the DOM
const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

// wait for button clicks
buttonElement.addEventListener("click", function () {
	// Check if the user entered something
	if (inputElement.value != "") {
		// create list item and give it the value of the input
		const li = document.createElement("li");
		li.textContent = inputElement.value;
		// create a button and add a click event listener
		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "❌";
		deleteBtn.addEventListener("click", function () {
			listElement.removeChild(li);
			inputElement.focus();
		});
		// add the button to the list item
		li.appendChild(deleteBtn);
		// OUTPUT: finally display the completed list item to the unordered list
		listElement.appendChild(li);
		// clear the user input field
		inputElement.value = "";
	}
	// focus the user back to the input field
	inputElement.focus();
});


