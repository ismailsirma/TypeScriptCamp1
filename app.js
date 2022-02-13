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
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Ismail',
    age: 31,
    hobbies: ['Painting', 'Cooking'],
    role: Role.ADMIN
};
//person.role.push('admin')
//person.role[1] = 10
//person.role = [1, 'admin']
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) => ERROR : map is only applicable with arrays
}
