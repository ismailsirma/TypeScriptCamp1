class Department {
    //private id: string
    //private name: string
    private employees: string[] = []

    constructor(private id: string, public name: string) {
        //this.name = n
    }

    describe(this: Department) {
        // validation here
        console.log(`Department: (${this.id}): ${this.name}`)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation(){
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const tech = new Department('Dep1','Tech');
tech.addEmployee('Ismail')
tech.addEmployee('Erdem')

tech.describe()
tech.printEmployeeInformation()

// this keyword not works with passing a method pointer into an object not works 
// without proving info about this keyword
// should add definition of this as a parameter
//  const techCopy = {name: 'COPY',describe: tech.describe}
//  techCopy.describe()

