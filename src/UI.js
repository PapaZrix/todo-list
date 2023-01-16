import Storage from "./storage";
import onLoad from "./default";

export const UI = (() => {
    // SET UP NEW STORAGE OBJECT
    const storage = new Storage();

    // GENERATE DEFAULT DOM 
    onLoad(storage.getTodoList().getProject("Inbox").getName());

    // SET CURRENT PROJECT TO DEFAULT (0)
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

    // TASK FUNCTIONS

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

    // PROJECT LISTENERS

    const initProjectButtons = () => {
        const addProjectBtn = document.querySelector(".new-project");
        const cancelProjectBtn = document.querySelector(".cancel-project");
        const projectForm = document.querySelector("#nav-form");
        const projectList = document.querySelector(".project-list");
        const defaultProjectList = document.querySelector(".default-options");
        
        addProjectBtn.addEventListener("click", openAddProject);
        cancelProjectBtn.addEventListener("click", closeAddProject);
        projectForm.addEventListener("submit", addProject);
        projectList.addEventListener("click", handleProject);
        defaultProjectList.addEventListener("click", openDefaultProjects);
    }
 
    // PROJECT FUNCTIONS

    const openAddProject = () => {
        const projectForm = document.querySelector("#nav-form");
        const addProjectBtn = document.querySelector(".new-project");

        projectForm.classList.add("active");
        addProjectBtn.classList.add("active");
    }

    const closeAddProject = () => {
        const projectForm = document.querySelector("#nav-form");
        const addProjectBtn = document.querySelector(".new-project");

        projectForm.classList.remove("active");
        addProjectBtn.classList.remove("active");
        projectForm.reset();
    }

    const addProject = (e) => {
        e.preventDefault();
        const projectName = document.querySelector("#projectName").value;
        storage.addProject(projectName);
        console.log(storage.getTodoList().projects);
        closeAddProject();
        renderProjects();
    }

    const handleProject = (e) => {
        // DELETE PROJECT
        if (e.target.classList.contains("fa-x")) {
            storage.deleteProject(e.target.parentNode.id);
            renderProjects();
            openProject("Inbox");
            storage.setCurrentProject(0);
            renderTasks();
        } else {
            // SWITCH PROJECTS
            const projectName = e.target.childNodes[3].textContent;
            openProject(projectName);
            storage.setCurrentProject(e.target.id);
            renderTasks();
        }
    }

    const openDefaultProjects = (e) => {
        const projectName = e.target.childNodes[1].textContent;
        openProject(projectName);
        storage.setCurrentProject(e.target.id);
        renderTasks();
    }

    const renderProjects = () => {
        const projectList = document.querySelector(".project-list");
        projectList.innerHTML = "";

        storage.getTodoList().projects.forEach((project, index) => {
            if (project.name !== "Inbox" && project.name !== "Today" && project.name !== "This week") {
                projectList.innerHTML += `               
                <button class="project" id=${index}>
                    <i class="fa-solid fa-list-check"></i>
                    <p class="task-name">${project.name}</p>
                    <i class="fa-solid fa-x"></i>
                </button>`
            }
        })
    }

    const loadProjectContent = (projectName) => {
        const container = document.querySelector(".top");
        container.innerHTML = `<h1 class="project-name">${projectName}</h1>`
        if (projectName === "Today" || projectName === "This week") {
            const addTaskBtn = document.querySelector(".add-task-btn");
            addTaskBtn.classList.add("active");
        } else {
            const addTaskBtn = document.querySelector(".add-task-btn");
            addTaskBtn.classList.remove("active");
        }

        storage.getTodoList().getProject(projectName).getTasks();
    }

    const openProject = (projectName) => {
        loadProjectContent(projectName);
    }

    return { initTaskButtons, renderTasks, initProjectButtons, renderProjects }

    // initTaskButtons();
    // renderTasks();
    // initProjectButtons();
    // renderProjects();
})();