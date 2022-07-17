//type AddFn = (a: number, b: number) => number
interface AddFn {
    (a: number, b: number): number
}

let add1: AddFn

add1 = (n1: number, n2: number) => {
    return n1 + n2
}

interface Named {
    readonly name: string
}

interface Greetable extends Named {
    greet(phrase: string): void
}

class Person implements Greetable {
    name: string
    age = 30

    constructor(n: string) {
        this.name = n
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name)
    }
}

let user1: Greetable
user1 = new Person('Ismail')

user1.greet('Hi There - My name is')
console.log(user1)