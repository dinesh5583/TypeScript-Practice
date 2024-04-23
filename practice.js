// console.log('Hello Test');
// let fname:unknown='Dinesh';
// fname=30;
// console.log(fname);
//================Unknow Type===============
// let value1:unknown;
// console.log(typeof value1);
var person = {
    name: "John",
    age: 25,
    gender: "male",
};
function getProperty(obj, key) {
    return obj[key];
}
console.log(getProperty(person, "name")); // "John"
console.log(getProperty(person, "age")); // 25
console.log(getProperty(person, "gender")); // "male"
