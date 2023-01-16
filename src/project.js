import Task from "./task";
import toDate from "date-fns/toDate";
import isToday from "date-fns/isToday";
import isThisWeek from "date-fns/isThisWeek";
import subDays from "date-fns/subDays";

export default class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    setName(name) {
        this.name = name
    }

    getName() {
        return this.name
    }

    setTasks(tasks) {
        this.tasks = tasks
    }

    getTasks() {
        return this.tasks
    }

    getTask(taskName) {
        return this.tasks.find((task) => task.getName() === taskName)
      }

    addTask(newTask, date) {
        this.tasks.push(new Task(newTask, date));
    }

    deleteTask(index) {
        this.tasks.splice(index, 1);
    }

    getTasksToday() {
        return this.tasks.filter((task) => {
            const date = new Date(task.getDate())
            return isToday(toDate(date))
        })
    }

    getTasksThisWeek() {
        return this.tasks.filter((task) => {
            const date = new Date(task.getDate())
            return isThisWeek(subDays(toDate(date), 1))
        })
    }
}
