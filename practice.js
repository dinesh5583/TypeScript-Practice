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
// let value: unknown;
// if (typeof value =="boolean") {
//     let value1: boolean = value;   // OK
//     console.log(value1);
// }
// if (typeof value =="number") {
//     let value1: number = value;   // OK
//     console.log(value1);
// }
// if (typeof value =="string") {
//     let value1: string = value;   // OK
//     console.log(value1);
// }
//============Never Type=========
// let name:never='';
//===============TS Arrays===========
// let arrName:string[]=[];
// arrName.push('Dinesh');
// // arrName.push(3);
// console.log(arrName);
// let arrName2:readonly string[]=['Mehra'];
// arrName2.push('Dinesh');
// console.log(arrName2);
// let array:(number | string)[]=[1,"2",3];
// let value:Array<string| number>=[1,2,3];
// for (const iterator in value) {
//     console.log(iterator);
// }
// var arr = [ 11, 89, 23, 7, 98 ];  
//       var val = arr.sort((a,b)=>{
//         return b-a
//       }); 
//     console.log( val ); 
//===============Tuples===========
// define our tuple
var ourTuple = [2, false, 'Dinesh'];
// initialized incorrectly which throws an error
// ourTuple = [2,false,'Dinesh'];
ourTuple.push(25);
console.log(ourTuple);
var x = ourTuple[0], y = ourTuple[1], z = ourTuple.slice(2);
console.log(x, y);
