/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.

*/

function addToList(event) {
	event.preventDefault();

	var input = document.getElementById("new-thing");
	var inputValue = input.value;

	if (inputValue === "") {
		alert("you must type in a value!");
	} else {
		var listItem = document.createElement("li");
		var list = document.getElementById("fav-list");
		list.appendChild(listItem);
		listItem.textContent = inputValue;
	}

	input.value = "";
}

window.onload = function() {
	var button = document.getElementById("new-thing-button");
  // when someone clicks the button...
  button.onclick = addToList;
};

/*

Bonus:

When they click submit without typing anything, alert the user
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/
