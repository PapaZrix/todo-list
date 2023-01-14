import Storage from "./storage";

export default function onLoad(name) {

    const container = document.querySelector(".project-view");
    container.innerHTML = `
        <div class="top">
            <h1 class="project-name">${name}</h1>
        </div>
        <div class="task-list"></div>
        <button class="add-task-btn">
            <i class="fa-solid fa-plus"></i>
            Add Task
        </button>
        <div class="form-div">
            <form id="task-form" action="">
                <label for="name">Name</label>
                <input type="text" id="name" name="taskName" required>
                <label for="date">Due Date</label>
                <input type="date" id="date" name="dueDate" required>
                <div class="form-btns">
                    <button class="submit-btn" type="submit">Add</button>
                    <button class="cancel-btn" type="button">Cancel</button>
                </div>
            </form>
        </div>
        `;
};