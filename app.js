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

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', editTask);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', deleteTask);

            li.appendChild(checkbox);
            li.appendChild(taskLabel);
            li.appendChild(editButton);
            li.appendChild(deleteButton);

            todoList.appendChild(li);

            newTaskInput.value = ''; // Clear the input field
        }
    }

    function toggleComplete() {
        const listItem = this.parentNode;
       
        const taskLabel = listItem.querySelector('label');
        taskLabel.classList.toggle('complete');
    }
    

    function deleteTask() {
        const listItem = this.parentNode;
        todoList.removeChild(listItem);
    }

    function editTask() {
        const listItem = this.parentNode;
        const taskLabel = listItem.querySelector('label');

        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.value = taskLabel.textContent;

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.addEventListener('click', () => saveEditedTask(listItem, editInput));

        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener('click', () => cancelEditTask(listItem, taskLabel.textContent));

        listItem.innerHTML = ''; // Clear the listItem

        listItem.appendChild(editInput);
        listItem.appendChild(saveButton);
        listItem.appendChild(cancelButton);
    }

    function saveEditedTask(listItem, editInput) {
        const taskLabel = document.createElement('label');
        taskLabel.textContent = editInput.value;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleComplete);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', editTask);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteTask);

        listItem.appendChild(checkbox);
        listItem.appendChild(taskLabel);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        const editInputx = listItem.querySelector("input");
        const saveButton = Array.from(listItem.querySelectorAll('button'))
        .find(button => button.textContent === 'Save');
    
        const cancelButton = Array.from(listItem.querySelectorAll('button'))
        .find(button => button.textContent === 'Cancel');
        listItem.removeChild(editInputx);
        listItem.removeChild(saveButton);
        listItem.removeChild(cancelButton);
    }

    function cancelEditTask(listItem, originalLabel) {
        // Remove the listItem from the DOM (Canceling the edit)

        const taskLabel = document.createElement('label');
        taskLabel.textContent = originalLabel;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleComplete);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', editTask);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteTask);

        listItem.appendChild(checkbox);
        listItem.appendChild(taskLabel);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        const editInputxx = listItem.querySelector("input");
        const saveButtonx = Array.from(listItem.querySelectorAll('button'))
        .find(button => button.textContent === 'Save');
    
        const cancelButtonx = Array.from(listItem.querySelectorAll('button'))
        .find(button => button.textContent === 'Cancel');
        listItem.removeChild(editInputxx);
        listItem.removeChild(saveButtonx);
        listItem.removeChild(cancelButtonx);


    }

    // Use addEventListener for the "Add Task" button
    addTaskButton.addEventListener('click', addTask);

    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
