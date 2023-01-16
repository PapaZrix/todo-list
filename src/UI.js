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
        const taskList = document.querySelector(".task-list");

        addTaskBtn.addEventListener("click", openAddTask);
        cancelTaskBtn.addEventListener("click", closeAddTask);
        taskForm.addEventListener("submit", addTask);
        taskList.addEventListener("click", handleTask);
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

    const addTask = (e) => {
        e.preventDefault();
        const projectName = document.querySelector(".project-name").textContent;
        const name = document.querySelector("#name").value;
        const date = document.querySelector("#date").value;
        const submitBtn = document.querySelector(".submit-btn");
        const taskForm = document.querySelector("#task-form");

        let projectTaskList = storage.getTodoList().getProject(projectName).getTasks();
        const isDuplicate = projectTaskList.some((task) => task.name.toUpperCase() === name.toUpperCase());
        
        if (submitBtn.textContent === "Add") {
            if (isDuplicate) {
                alert("Tasks must have different names!");
                return
            }
            storage.addTask(projectName, name, date);            
        } else {
            const taskId = storage.getCurrentTask();
            const newName = taskForm.elements.taskName.value;
            const newDate = taskForm.elements.dueDate.value;
            storage.renameTask(projectName, taskId, newName);
            storage.setTaskDate(projectName, taskId, newDate);
            storage.resetCurrentTask();
        }

        closeAddTask();
        renderTasks();
    }

    const editTask = (index) => {
        const name = document.querySelector("#name");
        const date = document.querySelector("#date");

        name.value = storage.getTodoList().getProjects()[storage.getCurrentProject()].getTasks()[index].name;
        date.value = storage.getTodoList().getProjects()[storage.getCurrentProject()].getTasks()[index].dueDate;
    }

    const handleTask = (e) => {
        storage.setCurrentTask(storage.getCurrentProject(), e.target.parentNode.id);
        console.log(storage.getCurrentTask());

        if (e.target.classList.contains("fa-x")) {
            const projectName = document.querySelector(".project-name").textContent;

            storage.deleteTask(projectName, e.target.parentNode.id);
            renderTasks();
        }
        if (e.target.classList.contains("fa-pen-to-square")) {            
            const submitBtn = document.querySelector(".submit-btn");

            editTask(e.target.parentNode.id);
            openAddTask();
            submitBtn.textContent = "Edit";
        }
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