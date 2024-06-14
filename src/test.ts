// const character = 'paschodes';
// console.log(character);
// const inputs = document.querySelectorAll('input');
// console.log(inputs);

// inputs.forEach(input => {
//     console.log(input)
// })



// ///TYPES
// const circ = (diameter: number) => {
//     return diameter = Math.PI;
// }
// console.log(circ(7.5));


// //Types Array & Objects
// let mixed = ['ken', 4, 'pas', 8, 9];
// mixed.push('kenny');
// mixed.push(10);
// mixed[0]
// console.log(mixed)

// //a better way to do this in typescript below using objects
// let ninja = {
//     name: 'mario',
//     belt: 'black',
//     age: 30
// };
// console.log(ninja);
// ninja.age = 40;
// ninja.name = 'Pasc'
// console.log(ninja);

// //to modify the object
// ninja = {
//     name: 'paschal',
//     belt: 'orange',
//     age: 25
// }


// //EXplicit Types
// let character: string;
// let age: number;
// let isloggedIn: boolean;

// age = 20;
// isloggedIn = true;

// //for array
// let ninjas: string[] = [];
// ninjas.push('shaun');
// console.log(ninjas);

// //UNion Types
// let mixed: (string|number|boolean)[] = [];
// mixed.push('hello');
// mixed.push(20);
// mixed.push(false);
// console.log(mixed);

// let uid: string|number;
// uid = '123';
// uid = 123;

// //Expl. for Objects
// let ninjaOne: Object;
// ninjaOne = {name: 'yoshi', age: 30};

// let ninjaTwo: {
//     name: string,
//     age: number,
//     beltColor: string
// }
// ninjaTwo = {name: 'mars', age: 20, beltColor:'blue'}
// console.log(ninjaOne);
// console.log(ninjaTwo);


// //ANY Type
// let ages:any = 25;
// ages = true;
// ages = "pes"
// ages = {name: 'high'}
// console.log(ages)

// //Any array 
// let mixed: any[] = [];
// mixed.push(5);
// mixed.push('mario');
// mixed.push(false);
// console.log(mixed);

// //Any OBjects
// let ninja: {name: any, age: any}
// ninja = {name: 'yoshi', age: 20}
// console.log(ninja)
// ninja = {name: 25, age: 'yoshi'}
// console.log(ninja)




// //Functions 
// let greet: Function;

// greet = () => {
//     console.log('hello, again');
// }

// // const add = (a: number, b: number) => {
// //     console.log(a + b);
// // }
// //optional parameter
// // const add = (a: number, b: number, c?: number | string) => {
// //     console.log(a + b);
// //     console.log(c);
// // }
// // add(5, 10);
// //have a default value
// const add = (a: number, b: number, c: number | string =10) => {
//     console.log(a + b);
//     console.log(c);
// }
// add(5, 10, 20);

// //explicit function
// // const minus = (a: number, b: number) => {
// //     return a + b;
// // }
// // let result = minus(10, 7);
// // console.log(result)
// //asign the explicit 
// const minus = (a: number, b: number): number => {
//     return a + b;
// }
// let result = minus(10, 7);
// console.log(result)



// //Type Aliases
// type stringOrNum = string | number;
// type objWithName = {name: string, uid:stringOrNum};

// const logDetails = (uid: stringOrNum, item: string) => {
//     console.log(`${item} has a uid of ${uid}`)
// }
// logDetails(1, "red");

// const greet = (user: objWithName) => {
//     console.log(`${user.name} says hello`)
// }



// ///Function Signatures 
// // E.g1
// let greet: (a: string, b:string) => void;
// greet = (name: string, greeting: string) => {
//     console.log(`${name} says ${greeting}`);
// }
// greet("pete", "hello");
// //E.g2 
// let calc = (numOne: number, numTwo: number, action: string) => {
//     if (action === "add") {
//         return console.log(numOne + numTwo);
//     } else {
//         return console.log(numOne - numTwo)
//     }
// }
// calc(4, 2, "addide");
// //E.g3
// let logDetails:(obj: {name: string, age: number}) => void

// type person = {name: string, age: number};

// logDetails = (ninja: person) => {
//     console.log(`${ninja.name} is ${ninja.age} years old`);
// }





// //DOM E.g1
// const anchor = document.querySelector('a')!;
// console.log(anchor.href);

// //E.g2
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// //Inputs
// const type = document.querySelector('#type') as HTMLSelectElement;
// const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;

// form.addEventListener('submit', (e: Event) => {
//     e.preventDefault();

//     console.log(
//         type.value,
//         toFrom.value,
//         details.value,
//         amount.valueAsNumber
//     );
// })



// //Classes
// class Invoice {
//     // public client: string;                      //we can change and read the value inisde and outside of the class
//     // private details: string;                    //private; we can only change the value inside de class
//     // readonly amount: number;                    //readonly; we can only read the value inside and outside the class but we can't change

//     // constructor(c: string, d: string, a: number) {
//     //     this.client =c;
//     //     this.details = d;
//     //     this.amount = a;
//     // }

//     //OR
//     constructor (
//         readonly client: string,
//         private details: string,
//         public amount: number,
//     ){}

//     format() {
//         return `${this.client} owes #${this.amount} for ${this.details}`;
//     }
// }

// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
// console.log(invOne, invTwo);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// // invOne.client = 'yoshi';
// invTwo.amount = 400;
// // console.log(invoices);

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// });






// //Interfaces
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }

// const me: IsPerson = {
//     name: 'shaun',
//     age: 20,
//     speak(text: string): void {
//         console.log(text)
//     },
//     spend(amount: number): number {
//         console.log('I spent', amount);
//         return amount
//     },
    
// }
// console.log(me);

// const greetPerson = (person: IsPerson) => {
//     console.log('hello ', person.name);
// }
// greetPerson(me)


// import { Invoice } from './classes/invoice.js';

// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
// console.log(invOne, invTwo);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// // invOne.client = 'yoshi';
// invTwo.amount = 400;
// // console.log(invoices);

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// });

//modified to...

// import { Invoice } from './classes/invoice.js';
// import { Payment } from './classes/payment.js';
// import { HasFormatter } from './interfaces/hasFormatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('paul', 'backend node', 250);
// docTwo = new Payment('sops', 'frontend react', 200); 

// //only objects which implements the hasFormatter interface can go inside the following array
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);

// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
// // console.log(invOne, invTwo);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// // invOne.client = 'yoshi';
// // invTwo.amount = 400;
// // console.log(invoices);

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// });





// //Generics
// // const addUID = <T>(obj: T) => {
// //     let uid = Math.floor(Math.random() * 100);
// //     return {...obj, uid};
// // }

// // let docOne = addUID({name: 'pas', age: 40});
// // console.log(docOne.name);
// const addUID = <T extends {name: string}>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
// }

// let docOne = addUID({name: 'pas', age: 40});
// console.log(docOne.name);


// //WIth Interfaces
// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
// }

// const docThree: Resource<object> = {
//     uid: 1,
//     resourceName: 'person',
//     data: {name: 'shaun'}
// }

// const docFour: Resource<string[]> = {
//     uid: 2,
//     resourceName: 'shoppingList',
//     data: ['bread', 'milk', 'toilet roll']
// }

// console.log(docThree, docFour);



// //ENUMS 
// enum ResourceType { BOOK, ARTHUR, FILM, DIRECTOR, PERSON}
// interface Resource<T> {
//     uid: number;
//     resourceType: ResourceType;
//     data: T;
// }

// const docFive: Resource<object> = {
//     uid: 1,
//     resourceType: ResourceType.BOOK,
//     data: {title: 'name of the wind'}
// }

// const docSix: Resource<object> = {
//     uid: 10,
//     resourceType: ResourceType.PERSON,
//     data: {name: 'pasc'}
// }

// console.log(docFive, docSix);




// //TUPLES
// let arr = ['ryu', 25, true];
// arr[0] = false;
// arr[1] = 'pasch'
// arr = [30, false, 'pasch']

// let tup: [string, number, boolean] = ['ryu', 25, true];
// tup[0] = 'sops';
// tup[1] = 30;

// let student: [string, number];
// student = ['paul', 222];