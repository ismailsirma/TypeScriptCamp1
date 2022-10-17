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



// Accessor Decorators

// name : name of the accessor
// property descriptor : if it is getter or setter or enumerable
// Accessor
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!')
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

// method decorator
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator!')
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

// Parameter Decorator
function Log4 (target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator!')
    console.log(target)
    console.log(name)
    console.log(position)
}

class Product2 {
    @Log
    title: string
    private _price: number

    @Log2
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

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax)
    }
}

// Return a Class in a Class Decorator

function WithTemplatev2(template: string, hookId: string) {
    // _ is the arguement that will be ignored
    return function<T extends {new(...args: any[]): {name: string} }>(originalConstructor: T) {

        // Return a constructor of original constructor of the class with new functionality
        // Defining extra logic inside constructor 
        // so it will be executed only when object is instantiated not every time (such as its definition defined)
        // Constructor function replaces the original class with custom extra logic
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super()
                console.log('Rendering template')
                const hookEl = document.getElementById(hookId)
                if (hookEl) {
                    hookEl.innerHTML = template
                    hookEl.querySelector('h1')!.textContent = this.name
                }
            }
        }
    }
}
@WithTemplatev2('<h1>My Person Object</h1>', 'app')
class PersonV2 {
    name = 'Erdem'

    constructor() {
        console.log('Creating PersonV2 object ...')
    }
}

// Create an Autobind Decorator 

// decorator function returns adjusted descriptor 
// override the old method descriptor, replaced with new descriptor configuration
function Autobind(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this)
            return boundFn
        }
    }
    return adjDescriptor
}

// When button is clicked, execute a method on the object
class Printer {
    message = 'This works!'

    @Autobind
    showMessage() {
        console.log(this.message)
    }
}

const p = new Printer()
const button = document.querySelector('button')!
// v1: use bind method to refer Printer class to refer itself instead of target of the event (EventListener)
// v1: old js way to use this keyword correctly
//button.addEventListener('click', p.showMessage.bind(p))

// v2: autobind with decorator
button.addEventListener('click', p.showMessage)


// Validation with Decorators

interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[] // ['required','positive']
    }
}

const registeredValidators: ValidatorConfig = {}

function Required(target: any, propName: string) {
    // class name as a key
    registeredValidators[target.constructor.name] = {
        // add previously added validators
        ...registeredValidators[target.constructor.name],
        [propName]: ['required']
    }
}

// register validators and properties on global config when the class is defined
function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        // add previously added validators
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive']
    }
}
function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name]
    if (!objValidatorConfig)
        return true
    let isValid = true
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop]
                    break
                case 'positive':
                    isValid = isValid && obj[prop] > 0
                    break
            }
        }
    }
    return isValid
}

class Course {
    @Required
    title: string
    @PositiveNumber
    price: number

    constructor (t: string, p: number) {
        this.title = t
        this.price = p
    }
}

// confirm that form is not null with !
const courseForm = document.querySelector('form')!
courseForm.addEventListener('submit', event => {
    // dont submit the form (not to send http request)
    event.preventDefault()
    const titleEl = document.getElementById('title') as HTMLInputElement
    const priceEl = document.getElementById('price') as HTMLInputElement

    const title = titleEl.value
    const price = +priceEl.value

    const createdCourse = new Course(title, price)

    if (!validate(createdCourse)) {
        alert('Invalid input')
        return
    } 
    console.log(createdCourse)
})