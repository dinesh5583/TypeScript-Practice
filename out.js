var studentCalc;
(function (studentCalc) {
    function AnnualFeeCalc(feeAmount, term) {
        return feeAmount * term;
    }
    studentCalc.AnnualFeeCalc = AnnualFeeCalc;
})(studentCalc || (studentCalc = {}));
/// <reference path="./student.ts" />
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
// let ourTuple: [number, boolean, string]=[2,false,'Dinesh'];
// initialized incorrectly which throws an error
// ourTuple = [2,false,'Dinesh'];
// ourTuple.push(25)
// console.log(ourTuple);
// const [x,y,...z]=ourTuple;
// console.log(x,y);
// let nameTuple: [x:number, y:boolean, z:string]=[2,false,'Dinesh'];
//===========================Object Types==========================
// let objNew:{name:string,age:number,hasIt?:boolean}={
//   name:'Dinesh',
//   age:30,
// }
// console.log(objNew);
//======================ENum==========
// enum directions{
//   north=1,
//   east=4,
//   west,
//   south=10
// }
// console.log(directions.north,directions.east,directions);
// enum AppStatus {  
//   ACTIVE,  
//   INACTIVE,  
//   ONHOLD  
// }   
// function checkStatus(status:AppStatus): void {  
//   console.log(status);  
// }  
// checkStatus(AppStatus.ONHOLD);  
//==========================Enum Computed Values=======
// enum myData {  
//   name='Dinesh', 
//   age=getDate('dinesh'),
//   dob=2024-age,
//   abc=8
// }   
// function getDate(name:string):number{
//   return (name=='dinesh'? 27:0)
// }
// console.log(myData.dob);
// console.log(myData.age);
// console.log(myData[8]);
//=======Type aliases and Interfaces=============
// type CarYear=number;
// type CarType=string;
// type Car={
//   Year:CarYear,
//   type:CarType
// }
// const carYear:CarYear=2001;
// const carType:CarType='Toyota';
// const car:Car={
//   Year:carYear,
//   type:carType
// }
// console.log(car);
//===================String literals as type alias===========
// type otherType='Yes' | "no";
// let variable:otherType='Yes'
// console.log(variable);
// interface personA{
//   fname:string,
//   lname:string,
//   rollno:number
// }
// interface Student extends personA{
//   class:number,
//   subject:string,
//   regNo:number,
//   pass?:boolean
// }
// const user:Student={
//   fname:'Dinesh',
//   lname:'Mehra',
//   rollno:34,
//   class:9,
//   subject:'Englsh',
//   regNo:334
// }
// console.log(user);
//===============FUnction Overloading===========
// function addData(data1:string,data2:string):string;
// function addData(data1:number,data2:number):number;
// function addData(data1:any,data2:any){
//     return (data1+data2);
// }
// addData(2,3);
// addData('dinesh',' mehra')
//====================toPrecision() Method=============
// console.log(12.34.toPrecision(10));
// let x = 'hello';
// console.log(((x as unknown) as number).length); // x is not actually a number so this will return undefined
// class Person {
//     private age;
//     // name is a private member variable
//     public constructor(private name: string,age:number) {
//         this.age=age
//     }
//     public getName(): string {
//       return this.name;
//     }
//     public getAge():number {
//         return this.age;
//       }
//   }
//   const person = new Person("Jane",6);
//   console.log(person.getName(),person.getAge());
// class Person {
//   private name: string;
//   public constructor(name: string) {
//     this.name = name;
//   }
//   public getName(): string {
//     return this.name;
//   }
// }
// const person = new Person("Jane");
// console.log(person.getName());
//======================TS Genrics=============
//   function getName<T,S>(age:T,name:string):{age:T,name:string}{
//       return {name:name,age:age}
//   }
//   let value=getName<number,string>(27,'DInesh')
// console.log(value);
//======================TS Utlity Types==============
// interface Point{
//   x:number;
//   y:number;
// }
// let pPart:Partial<Point>={}
// pPart.x=10
// let objData:Record<string,number>={
//   1:'dinesh'
// }
// interface omitInterface{
//   name:string;
//   age:number;
//   height?:string;
// }
// let dinesh:Omit<omitInterface,'age' | 'height'>={
//   name:"dinesh",
// }
// type Primitive=string | number | boolean;
// const value : Exclude<Primitive,string>=7;
// type pointParameter=(p:{x:number;y:number})=>void;
// const point:Parameters<pointParameter>[0]={x:10,y:20};
// console.log(point);
// interface Person{
//   name:string;
//   age:number
// }
// const user:Readonly<Person>={
//   name:"Dinesh",
//   age:20
// }
// user.name='Mehra'
// interface Person {
//   name: string;
//   age: number;
//   gender: string;
// }
// const person: Person = {
//   name: "John",
//   age: 25,
//   gender: "male",
// };
// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }
// console.log(getProperty(person, "name")); // "John"
// console.log(getProperty(person, "age")); // 25
// console.log(getProperty(person, "gender")); // "male"
// let value: string | undefined | null = null;
// value = 'hello';
// value = undefined;
// let array: number[] = [1, 2, 3];
// let value = array[0]; 
// console.log(value);
//////===============Template Literal String=============
// type Color = "red" | "green" | "blue";
// type HexColor<T extends Color> = `#${string}`;
// // Usage:
// let myColor: HexColor<'red'> = "#asda0000FF";
// console.log(myColor);
//===============namespace=========
let totalFee = studentCalc.AnnualFeeCalc(2000, 12);
console.log(totalFee);
