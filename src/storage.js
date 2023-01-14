import TodoList from "./todolist";
import Project from "./project";
import Task from "./task";
import { NO_TASK_SELECTED, NO_PROJECT_SELECTED } from "./constants";

export default class Storage {
    constructor() {
        this.currentProject = NO_PROJECT_SELECTED
        this.currentTask = NO_TASK_SELECTED;
    }

    saveTodoList(data) {
        localStorage.setItem("todoList", JSON.stringify(data))
    }

    getTodoList() {
        const todoList = Object.assign(new TodoList(), JSON.parse(localStorage.getItem("todoList")))

        todoList.setProjects(todoList.getProjects().map((project) => Object.assign(new Project(), project))
        )

        todoList.getProjects().forEach((project) => project.setTasks(project.getTasks().map((task) => Object.assign(new Task(), task))))

        return todoList
    }

    addProject(project) {
        const todoList = this.getTodoList()
        todoList.addProject(project)
        this.saveTodoList(todoList)
    }

    deleteProject(index) {
        const todoList = this.getTodoList()
        todoList.deleteProject(index)
        this.saveTodoList(todoList)
    }

    addTask(projectName, name, date) {
        const todoList = this.getTodoList()
        todoList.getProject(projectName).addTask(name, date)
        this.saveTodoList(todoList)
    }

    deleteTask(projectName, index) {
        const todoList = this.getTodoList()
        todoList.getProject(projectName).deleteTask(index)
        this.saveTodoList(todoList)
    }

    renameTask(projectName, taskIndex, newName) {
        const todoList = this.getTodoList();
        todoList.getProject(projectName).getTasks()[taskIndex].name = newName
        this.saveTodoList(todoList)
    }

    setTaskDate(projectName, taskIndex, newDate) {
        const todoList = this.getTodoList();
        todoList.getProject(projectName).getTasks()[taskIndex].dueDate = newDate
        this.saveTodoList(todoList)
    }

    setCurrentProject(id) {
        this.currentProject = id
    }

    getCurrentProject() {
        return this.currentProject
    }

    setCurrentTask(index, id) {
        this.currentProject = index
        this.currentTask = id
    }

    resetCurrentTask() {
        this.currentTask = NO_TASK_SELECTED;
    }

    getCurrentTask() {
        return this.currentTask
    }
}