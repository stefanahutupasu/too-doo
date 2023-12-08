document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todo-list');
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task-btn');

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.className = 'todo-item';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', toggleComplete);

            const taskLabel = document.createElement('label');
            taskLabel.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', deleteTask);

            li.appendChild(checkbox);
            li.appendChild(taskLabel);
            li.appendChild(deleteButton);

            todoList.appendChild(li);

            newTaskInput.value = ''; // Clear the input field
        }
    }

    function toggleComplete() {
        const listItem = this.parentNode;
        listItem.classList.toggle('complete');
    }

    function deleteTask() {
        const listItem = this.parentNode;
        todoList.removeChild(listItem);
    }

    // Use addEventListener for the "Add Task" button
    addTaskButton.addEventListener('click', addTask);

    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
