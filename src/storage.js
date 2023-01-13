import Todolist from "./todolist";
import Project from "./project";
import Task from "./task";
import {NO_TASK_SELECTED, NO_PROJECT_SELECTED} from "./constants"

export default class Storage {
    constructor() {
        this.currentTask = NO_TASK_SELECTED
        this.currentProject = NO_PROJECT_SELECTED
    }

    static saveTodoList(data) {
        localStorage.setItem("todoList", JSON.stringify(data))
    }

    static getTodoList() {
        const todoList = Object.assign(new Todolist(), JSON.parse(localStorage.getItem("todoList")))

        todoList.setProjects(todoList.getProjects().map((project) => Object.assign(new Project(), project)))

        todoList.getProjects().forEach((project) => project.setTasks(project.getTasks().map((task) => Object.assign(new Task(), task))))

        return todoList
    }

    static addProject(project) {
        const todoList = this.getTodoList()
        todoList.addProject(project)
        this.saveTodoList(todoList)
    }

    static deleteProject(index) {
        const todoList = this.getTodoList()
        todoList.deleteProject(index)
        this.saveTodoList(todoList)
    }

    static deleteTask(projectName, index) {
        const todoList = this.getTodoList();
        todoList.getProject(projectName).deleteTask(index)
        this.saveTodoList(todoList)
    }

    static renameTask(projectName, taskIndex, newName) {
        const todoList = this.getTodoList()
        todoList.getProject(projectName).getTasks()[taskIndex].name = newName
        this.saveTodoList(todoList)
    }

    static setTaskDate(projectName, taskIndex, newDate) {
        const todoList = this.getTodoList()
        todoList.getProject(projectName).getTasks()[taskIndex].dueDate = newDate
        this.saveTodoList(todoList)
    }

    static setCurrentProject(id) {
        this.currentProject = id
    }

    static getCurrentProject() {
        return this.currentProject
    }

    static setCurrentTask(index, id) {
        this.currentProject = index
        this.currentTask = id
    }

    static resetCurrentTask() {
        this.currentTask = NO_TASK_SELECTED
    }

    static getCurrentTask() {
        return this.currentTask
    }
}


