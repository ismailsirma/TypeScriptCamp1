type  Admin = {
    name: string,
    privileges: string[],
}

type Employee = {
    name: string,
    startDate: Date,
}

// interface ElevatedEmployee extends Admin, Employee {}

type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
    name: 'Ismail',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric

function addCombinable(a: Combinable, b: Combinable) {
    // type guard for type check and change at runtime
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + b
}

// union type with two custom obj types
type UnknownEmployee = Employee | Admin

function printEmployeeInfo(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name)
    // property existence check on the object
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges)
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate)
    }
}

printEmployeeInfo({name: 'Erdem', startDate: new Date()})

class Car {
    drive() {
        console.log('Driving a car...')
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...')
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ...' + amount)
    }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
    vehicle.drive()
    // you cant use instanceof check on interfaces (not being compiled, cant use at runtime)
    // classes are compiled to constructor functions
    if ('loadCargo' in vehicle || vehicle instanceof Truck) {
        vehicle.loadCargo(1000)
    }
}

useVehicle(v1)
useVehicle(v2)