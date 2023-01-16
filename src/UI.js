import Storage from "./storage";
import onLoad from "./default";

export const UI = (() => {
    // SET UP NEW STORAGE OBJECT
    const storage = new Storage();

    // GENERATE DEFAULT DOM 
    onLoad(storage.getTodoList().getProject("Inbox").getName());

    // SET CURRENT PROJECT TO DEFAULT 
    storage.setCurrentProject(0);
    console.log(storage.getCurrentProject());

    console.log(storage.getTodoList().getProject("Inbox").getTasks());

    // TASK LISTENERS
    const initTaskButtons = () => {
        const addTaskBtn = document.querySelector(".add-task-btn");
        const cancelTaskBtn = document.querySelector(".cancel-btn");
        const taskForm = document.querySelector("#task-form");

        addTaskBtn.addEventListener("click", openAddTask);
        cancelTaskBtn.addEventListener("click", closeAddTask);
        taskForm.addEventListener("submit", (e) => {
            e.preventDefault();
            addToTasks();
            renderTasks();
        });
    }

    const openAddTask = () => {
        const addTaskBtn = document.querySelector(".add-task-btn");
        const formDiv = document.querySelector(".form-div");
        const submitBtn = document.querySelector(".submit-btn");

        addTaskBtn.classList.add("active");
        formDiv.classList.add("active");
        submitBtn.textContent = "Add";
    }

    const closeAddTask = () => {
        const addTaskBtn = document.querySelector(".add-task-btn");
        const formDiv = document.querySelector(".form-div");
        const taskForm = document.querySelector("#task-form");

        addTaskBtn.classList.remove("active");
        formDiv.classList.remove("active");
        taskForm.reset();
    }

    const addToTasks = () => {
        const projectName = document.querySelector(".project-name").textContent;
        const name = document.querySelector("#name").value;
        const date = document.querySelector("#date").value;

        storage.addTask(projectName, name, date);
        closeAddTask();
    }

    const renderTasks = () => {
        const projectName = document.querySelector(".project-name").textContent;
        const taskList = document.querySelector(".task-list");
        taskList.innerHTML = "";

        storage.getTodoList().getProject(projectName).getTasks().forEach((task, index) => {
            taskList.innerHTML += `
                <button class="task" id=${index}>
                         <i class="fa-solid fa-list-check"></i>
                         <p class="task-name">${task.name}</p>
                         <p class="task-date">${task.dueDate}</p>
                         <i class="fa-solid fa-pen-to-square"></i>
                         <i class="fa-solid fa-x"></i>
                 </button>`
        })
    }

    initTaskButtons();
    renderTasks();

})();