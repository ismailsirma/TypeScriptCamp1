// Generics Type

//const names = ['Ismail', 'Erdem']
const names: Array<string> = ['']
names[0].split(' ')

// promise object is created
// main type promise can work with other types, 
// for example it can return string
const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve('This is done!')
    }, 2000)
})

// Giving type to promise, it allows the type of output of promise.
// So you can do type checking, for complex type checking
promise.then(data => {
    data.split(' ')
})

// GENERIC FUNCTIONS

// we dont care about exact object type of parameters
//function merge<T, U>(objA: T, objB: U): T & U {
function merge<T, U>(objA: T, objB: U) {

    if (objA)
        return Object.assign(objA, objB)
    else 
        return objA
}

const mergedObj = merge<{name:string}, {age: number}>({name: 'Erdem'}, {age: 30})
console.log(mergedObj)

// Generic CONSTRAINTS

// set constraint to any certain type with extend keyword
function mergev2<T extends object, U extends object>(objA: T, objB: U) {

    return Object.assign(objA, objB)
}

const mergedObj2 = mergev2<{name:string}, {age: number}>({name: 'Erdem'}, {age: 30})

// Another Generic Function

interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.'
    if (element.length === 1) { 
        descriptionText = 'Got 1 element'
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.'
    }
    return [element, descriptionText]
}

console.log(countAndDescribe('Hi there!'))
console.log(countAndDescribe(['F1', 'Football']))


// keyof Constraint

// keyof Keyword is used to represents that
// certain object type is a property of another object type
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key]
}

console.log(extractAndConvert({name: 'Ismail'}, 'name'))


// GENERIC CLASSES

// works better with primitive types 
// it is better not to use reference types or objects (bad practice)
class DataStorage<T extends string | number | boolean> {
    private data: T[] = []

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return
        }
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Ismail')
textStorage.addItem('Erdem')
textStorage.removeItem('Ismail')
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>()

/* bad practice to use generics with objects
const objStorage = new DataStorage<object>()
const ismailObj = {name: 'Ismail'}
objStorage.addItem(ismailObj)
objStorage.addItem({name: 'Erdem'})
// passing object by reference
objStorage.removeItem(ismailObj)
console.log(objStorage.getItems())
*/

// Other Utility Types that are GENERIC

// PARTIAL
interface CourseGoal {
    title: string
    description: string
    completeUntil: Date
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}
    courseGoal.title = title
    courseGoal.description = description
    courseGoal.completeUntil = date
    return courseGoal as CourseGoal
}

// Readonly
// this type makes object/array locked
// adding or removing property is not allowed

const names2: Readonly<string[]> = ['Ismail', 'Erdem']
names.push('SIRMA')
names.pop()