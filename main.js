/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed 
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.  

*/

function addToList(list, newThing) {
	var list = document.createElement("li");
	var newThing = document.getElementById("new-thing-button");
	newThing.onclick = function(){
		if (newThing.value === "") {
			alert("you must type in a value!");
		} else {
		var textInput = document.getElementsByTagName("form")[0];
		list.appendChild(textInput);
		document.getElementById("fav-list").appendChild(list);
		}
	}
}

window.onload = function() {
  // when someone clicks the button...
  addToList();
  // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
};

/*

Bonus:

When they click submit without typing anything, alert the user 
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/

/*function addToList(list, newThing) {
	var list = document.createElement("li");
	var newThing = document.getElementById("new-thing-button");
	newThing.onclick = function(){
		if (newThing == "") {
			alert("you must type in a value!");
		} else {
		var textInput = document.getElementById("new-thing");
		list.appendChild(textInput).value;
		document.getElementById("fav-list").appendChild(list);
		}
	}
};*/
