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

    // LISTENERS
    const initTaskButtons = () => {
        const addTaskBtn = document.querySelector(".add-task-btn");
        const cancelTaskBtn = document.querySelector(".cancel-btn");

        addTaskBtn.addEventListener("click", openAddTask);
        cancelTaskBtn.addEventListener("click", closeAddTask);
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

    initTaskButtons();

})();