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