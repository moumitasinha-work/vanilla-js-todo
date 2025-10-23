const todoInput = document.getElementById('todo-input');
const todoList = document.querySelector('#todo-list tbody');
const addButton = document.getElementById('add-button');
const taskCount = document.getElementById('task-count');

addButton.addEventListener('click', () => {
    const todoText = todoInput.value.trim();    

    if (todoText) {
        const listItem = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = todoText;
        listItem.appendChild(cell);
        todoList.appendChild(listItem);
        todoInput.value = '';
        updateTaskCount();
    }
});

function updateTaskCount() {
    const count = todoList.children.length;
    taskCount.textContent = `${count} Task`;
}
