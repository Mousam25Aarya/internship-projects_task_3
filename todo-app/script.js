const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

window.onload = function() {
    showTasks();
}

function addTask() {
    let task = taskInput.value;

    if(task === "") {
        alert("Please enter a task");
        return;
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";

    showTasks();
}

function showTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        taskList.innerHTML += `
            <li>
                ${task}
                <button onclick="deleteTask(${index})">Delete</button>
            </li>
        `;
    });
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    showTasks();
}