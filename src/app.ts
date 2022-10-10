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


// Build More Useful Decorators

function WithTemplate(template: string, hookId: string) {
    // _ is the arguement that will be ignored
    return function(constructor: any) {
        const hookEl = document.getElementById(hookId)
        const p = new constructor()
        if (hookEl) {
            hookEl.innerHTML = template
            hookEl.querySelector('h1')!.textContent = p.name
        }
    }
}

@Loggerv2('Logging - Test')
@WithTemplate('<h1>My Test Object</h1>', 'app')
class Test {
    name = 'Ismail'
    constructor(){
        console.log('creating a test obj...')
    }
}


// Property Decorators

// target gets the prototype of the class, its method definitions
// decorator gets executed when class definition is registered in app context
function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!')
    console.log(target, propertyName)
}

class Product {
    @Log
    title: string
    private _price: number

    set price(val: number) {
        if (val > 0) {
            this._price = val
        } else {
            throw new Error('Invalid price - should be positive!')
        }
    }

    constructor(t: string, p: number) {
        this.title = t
        this._price = p
    }

    getPriceWithTax(tax: number) {
        return this._price * (1 + tax)
    }
}