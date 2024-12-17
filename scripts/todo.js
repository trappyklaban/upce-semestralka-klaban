const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button>Odstranit</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';

        taskItem.querySelector('button').addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    }
});
