// const person: {
//     name: string,
//     age: number
// } = {
const person = {
    name: 'Ismail',
    age: 31,
    hobbies: ['Painting', 'Cooking']
}

let favoriteActivities: string[]
favoriteActivities = ['Sports']

console.log(person.name)

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
    // console.log(hobby.map()) => ERROR : map is only applicable with arrays
}