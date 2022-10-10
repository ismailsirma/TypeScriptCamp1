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

// Decorator Factory
function Loggerv2(loggingString: string) {
    return function(constructor: Function) {
        console.log(loggingString)
        console.log(constructor)
    }
}

 @Loggerv2('Logging - HUMAN')
class Humanv2 {
    name = 'Ismail'

    constructor() {
        console.log('Creating a human object...')
    }
}

const hum = new Humanv2()
console.log(hum) 
