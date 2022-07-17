class Department {
    name: string

    constructor(n: string) {
        this.name = n
    }

    describe(this: Department) {
        console.log('Department: ' + this.name)
    }
}

const tech = new Department('Tech');
tech.describe()

// this keyword not works with passing a method pointer into an object not works
const techCopy = {name: 'COPY',describe: tech.describe}
techCopy.describe()