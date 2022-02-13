// const person: {
//     name: string,
//     age: number
// } = {
// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string] // Tuple Type
// } = {
//     name: 'Ismail',
//     age: 31,
//     hobbies: ['Painting', 'Cooking'],
//     role: [2, 'author']
// }

enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' }

const person = {
    name: 'Ismail',
    age: 31,
    hobbies: ['Painting', 'Cooking'],
    role: Role.ADMIN
}

//person.role.push('admin')
//person.role[1] = 10
//person.role = [1, 'admin']

let favoriteActivities: string[]
favoriteActivities = ['Sports']

console.log(person.name)

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
    // console.log(hobby.map()) => ERROR : map is only applicable with arrays
}