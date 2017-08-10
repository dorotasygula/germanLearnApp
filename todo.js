function todoList() {
	
	var item    = document.getElementById('todoInput').value
	

	var text    = document.createTextNode(item)

	var newItem = document.createElement('li')

	newItem.appendChild(text)
	
	document.getElementById('toLearnList').appendChild(newItem)
	
	
}

function toLearnList() {
	
	var item    = document.getElementById('todoInput').value
	
	var text    = document.createTextNode(item)
	
	var newItem = document.createElement('li')
	
	newItem.appendChild(text)

	document.getElementById('alreadyLearnedList').appendChild(newItem)
}