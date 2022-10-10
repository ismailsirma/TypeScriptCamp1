// Decorators 
function Logger(constructor: Function) {
    console.log('Logging ...')
    console.log(constructor)
}

 @Logger
class Human {
    name = 'Ismail'

    constructor() {
        console.log('Creating a human object...')
    }
}

const pers = new Human()
console.log(pers) 