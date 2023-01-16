import Project from "./project"
import Task from "./task"
import compareAsc from "date-fns/compareAsc"
import toDate from "date-fns/toDate"

export default class TodoList {
    constructor() {
        this.projects = []
        this.projects.push(new Project("Inbox"))
        this.projects.push(new Project("Today"))
        this.projects.push(new Project("This week"))
    }

    setProjects(projects) {
        this.projects = projects
    }

    getProjects() {
        return this.projects
    }

    getProject(projectName) {
        return this.projects.find((project) => project.getName() === projectName)
    }

    addProject(newProject) {
        this.projects.push(new Project(newProject))
    }

    deleteProject(index) {
        this.projects.splice(index, 1)
    }

    updateTodayProject() {
        this.getProject("Today").tasks = []

        this.projects.forEach((project) => {
            if (project.getName() === "Today" || project.getName() === "This week") return

            const tasksToday = project.getTasksToday()
            tasksToday.forEach((task) => {
                const taskName = `${task.getName()} (${project.getName()})`
                this.getProject("Today").addTask(taskName, task.getDate())
            })
        })
    }

    updateWeekProject() {
        this.getProject("This week").tasks = []

        this.projects.forEach((project) => {
            if (project.getName() === "Today" || project.getName() === "This week") return

            const tasksWeek = project.getTasksThisWeek()
            tasksWeek.forEach((task) => {
                const taskName = `${task.getName()} (${project.getName()})`
                this.getProject("This week").addTask(taskName, task.getDate())
            })
        })

        this.getProject("This week").setTasks(
            this.getProject("This week")
            .getTasks().sort((taskA, taskB) => {
                compareAsc(
                    toDate(new Date(taskA.getDate())),
                    toDate(new Date(taskB.getDate()))
                )
            })
        )
    }
}