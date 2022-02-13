// const person: {
//     name: string,
//     age: number
// } = {
const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string] // Tuple Type
} = {
    name: 'Ismail',
    age: 31,
    hobbies: ['Painting', 'Cooking'],
    role: [2, 'author']
}

//person.role.push('admin')
//person.role[1] = 10
person.role = [1, 'admin']

let favoriteActivities: string[]
favoriteActivities = ['Sports']

console.log(person.name)

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
    // console.log(hobby.map()) => ERROR : map is only applicable with arrays
}