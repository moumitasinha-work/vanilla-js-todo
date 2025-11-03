const todoInput = document.getElementById('todo-input');
const todoList = document.querySelector('#todo-list tbody');
const addButton = document.getElementById('add-button');
const taskCount = document.getElementById('task-count');

addButton.addEventListener('click', () => {
    const todoText = todoInput.value.trim();    

    if (todoText) {
        removePlaceholder();
        const listItem = document.createElement('tr');

        // Task cell
        const taskCell = document.createElement('td');
        taskCell.colSpan = 2; // <-- added colspan="2"
        taskCell.textContent = todoText;
        listItem.appendChild(taskCell);

        // Actions cell
        const actionsCell = document.createElement('td');

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.className = 'complete-btn';
        completeBtn.addEventListener('click', () => {
            listItem.classList.toggle('completed');
            completeBtn.textContent = listItem.classList.contains('completed') ? 'Undo' : 'Complete';
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            listItem.remove();
            if (!hasTasks()) {
                insertPlaceholder();
            }
            updateTaskCount();
        });

        actionsCell.appendChild(deleteBtn);
        actionsCell.appendChild(completeBtn);
        listItem.appendChild(actionsCell);

        todoList.appendChild(listItem);
        todoInput.value = '';
        updateTaskCount();
    }
});
function removePlaceholder() {
    const placeholder = document.querySelector('.no-tasks');
    if (placeholder) {
        placeholder.remove();
    }
}

function insertPlaceholder() {
    const placeholder = document.createElement('tr');
    placeholder.className = 'no-tasks';

    const td1 = document.createElement('td');
    td1.colSpan = 2;
    td1.textContent = 'No tasks available';

    const td2 = document.createElement('td');
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    const addBtn = document.createElement('button');
    addBtn.textContent = 'Add';

    td2.appendChild(delBtn);
    td2.appendChild(addBtn);

    placeholder.appendChild(td1);
    placeholder.appendChild(td2);

    todoList.appendChild(placeholder);
}

function hasTasks() {
    return Array.from(todoList.querySelectorAll('tr')).some(r => !r.classList.contains('no-tasks'));
}

function updateTaskCount() {
    const rows = Array.from(todoList.querySelectorAll('tr'));
    const realRows = rows.filter(r => !r.classList.contains('no-tasks'));
    const count = realRows.length;
    taskCount.textContent = `${count} Tasks`;
}