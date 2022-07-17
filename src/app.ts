class Department {
    //private id: string
    //private name: string
    protected employees: string[] = []

    constructor(private readonly id: string, public name: string) {
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

class TechDepartment extends Department {
    admins: string[]
    constructor(id: string, admins: string[]) {
        super(id, 'Tech')
        this.admins = admins
    }
}

class ProductDepartment extends Department {
    constructor(id: string, private products: string[]) {
        super(id, 'Product')
    }

    // overriding base method
    addEmployee(employee: string): void {
        if (employee === 'Ismail') {
            return
        }
        // protected variables are reachable inside extended classes
        this.employees.push(employee)
    }

    addProduct(text: string) {
        this.products.push(text)
    }

    printProducts() {
        console.log(this.products)
    }
}

const tech = new TechDepartment('Dep1', ['Ismail']);
tech.addEmployee('Ismail')
tech.addEmployee('Erdem')

tech.describe()
tech.printEmployeeInformation()

console.log(tech)

const productDep = new ProductDepartment('Dep2', [])
productDep.addProduct('Apple juice')
productDep.addEmployee('Ismail')
productDep.addEmployee('Erdem')
productDep.printProducts()
productDep.printEmployeeInformation()

// this keyword not works with passing a method pointer into an object not works 
// without proving info about this keyword
// should add definition of this as a parameter
//  const techCopy = {name: 'COPY',describe: tech.describe}
//  techCopy.describe()

