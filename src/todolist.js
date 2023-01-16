import Project from "./project"

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
}