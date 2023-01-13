import Project from "./project"

export default class Todolist {
    constructor() {
        this.projects = []
        this.projects.push(new Project("Inbox"))
        this.projects.push(new Project("Today"))
        this.projects.push(new Project("This week"))
    }

    static setProjects(projects) {
        this.projects = projects
    }

    static getProjects() {
        return this.projects
    }

    static getProject(projectName) {
        return this.projects.find((project) => project.getName() === projectName)
    }

    static addProject(newProject) {
        this.projects.push(new Project(newProject))
    }

    static deleteProject(index) {
        this.projects.splice(index, 1)
    }
}