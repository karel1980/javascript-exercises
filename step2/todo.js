
function addItem() {
	var list = document.getElementById('myList');

	var li = document.createElement('li');
	li.innerHTML='<input type="checkbox"/> <input type="text" value="TODO"/> <button>Remove item</button>';

	list.appendChild(li);
}
