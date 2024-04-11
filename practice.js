// console.log('Hello Test');
// let fname:unknown='Dinesh';
// fname=30;
// console.log(fname);
//================Unknow Type===============
// let value1:unknown;
// console.log(typeof value1);
// let value2:unknown=value1
// console.log(typeof value2);
// let value3:boolean=value1 as boolean;
// console.log(typeof value3);
//===============Narrowing the unknown Type=======
var value = '1';
if (typeof value == "boolean") {
    var value1 = value; // OK
    console.log(value1);
}
if (typeof value == "number") {
    var value1 = value; // OK
    console.log(value1);
}
if (typeof value == "string") {
    var value1 = value; // OK
    console.log(value1);
}
