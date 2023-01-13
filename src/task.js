export default class Task {
    constructor(name, dueDate) {
        this.name = name
        this.dueDate = dueDate
    }

    static setName(name) {
        this.name = name
    }

    static getName() {
        return this.name
    }

    static setDate(dueDate) {
        this.dueDate = dueDate
    }

    static getDate() {
        return this.dueDate
    }
}