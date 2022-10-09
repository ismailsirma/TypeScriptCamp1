// Generics Type

//const names = ['Ismail', 'Erdem']
const names: Array<string> = []
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