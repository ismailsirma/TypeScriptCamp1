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

// TYPE GUARDS 
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

// Discriminated Unions

// create an extra literal property called type
// to narrow down value stored in type
interface Bird {
    type: 'bird'
    flyingSpeed: number
}

interface Horse {
    type: 'horse'
    runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
    // type guards leading more code due to increasing types, require property checks it is cumbersome
    // we want to eliminate mistyping with property names
    let speed
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed
            break
        case 'horse':
            speed = animal.runningSpeed
    }
    console.log('Moving at speed: ' + speed)
}

moveAnimal({type: 'bird', flyingSpeed: 10})

// Type Casting

// Some value could not be detected bt TS

//const paragraph = document.querySelector('p')
//const paragraph = document.getElementById('message-output')

// we can cast the type of the html element to another type (HTMLInputElement)
//const userInputElement = <HTMLInputElement> document.getElementById('user-input')

// 2nd way to cast the type
// ! means expression to the left should never return null
//const userInputElement = document.getElementById('user-input')! as HTMLInputElement

const userInputElement = document.getElementById('user-input')
if(userInputElement)
    (userInputElement as HTMLInputElement).value = 'Hi there!'
