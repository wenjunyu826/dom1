const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

let tasks = [
    {
        text:"ffff4", createdAt:new Date(2025,1,14),
    },{
        text:"7767764",createdAt: new Date(2025,1,16)
    }
];

function update(){
    taskList.innerHTML = '';
    tasks.forEach(task =>{
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = task.text;
        li.appendChild(span);
        taskList.appendChild(li);
    })
}

function addTask() {
    if (!taskInput.value) {
        alert('Please enter a task');
        return;
    }
    const newtask = {
        text: taskInput.value,
        createAt: new Date(),
    };
    tasks.push(newtask);
    taskInput.value = '';
    update()
}

addBtn.addEventListener('click',addTask);
update()
