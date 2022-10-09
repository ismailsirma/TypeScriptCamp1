// Generics Type
//const names = ['Ismail', 'Erdem']
var names = [''];
names[0].split(' ');
// promise object is created
// main type promise can work with other types, 
// for example it can return string
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('This is done!');
    }, 2000);
});
// Giving type to promise, it allows the type of output of promise.
// So you can do type checking, for complex type checking
promise.then(function (data) {
    data.split(' ');
});
// GENERIC FUNCTIONS
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: 'Erdem' }, { age: 30 });
console.log(mergedObj);
