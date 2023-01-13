import Task from "./task"

export default class Project {
    constructor(name) {
        this.name = name
        this.tasks = []
    }

    static setName(name) {
        this.name = name
    }

    static getName() {
        return this.name
    }

    static setTasks(tasks) {
        this.tasks = tasks
    }

    static getTasks() {
        return this.tasks
    }

    static getTask(taskName) {
        return this.tasks.find((task) => task.getName() === taskName)
    }

    static addTask(newTask, date) {
        this.tasks.push(new Task(newTask, date))
    }

    static deleteTask(index) {
        this.tasks.splice(index, 1)
    }
}