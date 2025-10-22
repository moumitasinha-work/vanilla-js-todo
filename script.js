const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const addButton = document.getElementById('add-button');
const taskCount = document.getElementById('task-count');

addButton.addEventListener('click', () => {
    const todoText = todoInput.value.trim();    

    if (todoText) {
        const listItem = document.createElement('li');
        listItem.textContent = todoText;
        todoList.appendChild(listItem);
        todoInput.value = '';
        updateTaskCount();
    }
});

function updateTaskCount() {
    const count = todoList.children.length;
    taskCount.textContent = `${count} Task`;
}
