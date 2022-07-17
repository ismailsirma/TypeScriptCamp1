class Department {
    static fiscalYear = 2022
    //private id: string
    //private name: string
    protected employees: string[] = []

    constructor(private readonly id: string, public name: string) {
        //this.name = n
        //console.log(Department.fiscalYear)
    }

    static createEmployee(name: string) {
        return {name: name}
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
    private lastProduct: string

    get mostRecentProduct() {
        if(this.lastProduct)
            return this.lastProduct
        
        throw new Error('No product found.')
    }

    set mostRecentProduct(value: string) {
        if (!value)
            throw new Error('Please pass vaild input')
        this.addProduct(value)
    }

    constructor(id: string, private products: string[]) {
        super(id, 'Product')
        this.lastProduct = products[0]
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
        this.lastProduct = text
    }

    printProducts() {
        console.log(this.products)
    }
}

const employee1 = Department.createEmployee('Ismail')
console.log(employee1, Department.fiscalYear)

const tech = new TechDepartment('Dep1', ['Ismail']);
tech.addEmployee('Ismail')
tech.addEmployee('Erdem')

tech.describe()
tech.printEmployeeInformation()

console.log(tech)

const productDep = new ProductDepartment('Dep2', [])

productDep.mostRecentProduct = 'Orange juice'
productDep.addProduct('Apple juice')
console.log(productDep.mostRecentProduct)

productDep.addEmployee('Ismail')
productDep.addEmployee('Erdem')
productDep.printProducts()
productDep.printEmployeeInformation()

// this keyword not works with passing a method pointer into an object not works 
// without proving info about this keyword
// should add definition of this as a parameter
//  const techCopy = {name: 'COPY',describe: tech.describe}
//  techCopy.describe()

