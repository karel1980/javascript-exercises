
function addItem() {
	var list = document.getElementById('myList');

	var li = document.createElement('li');
	li.innerHTML='<input type="checkbox"/> <input type="text" value="TODO"/> <button>Remove item</button>';

	list.appendChild(li);
}

function removeItem(id) {
	var element = document.getElementById(id);
	console.log('Whats wrong with', element);
	element.parentElement.removeChild(element);
	/*element.parent.removeChild(element);*/
}
