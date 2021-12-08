/*const person={
    name:"abcd",
    weight:50,
    height:6
};
const {weight,height}=person;
console.log(weight);

*/

/*const a{
    name:"xyz",
    age:40
};
const c={
weigth:50,
...one
};
let arr=[1,2,3]
const newArr=[...arr,4,5,6];
console.log(newArr);
console.log(three);

/*
const add=(...args)=>{
    let result=0;
    for(let arg of args) result+=args;
    return console.log(result);
};
add(5,10,5,15);
*/

const person={
    firstName:"charithra",
    lastname:"gowda",
    weight:50,
    heigth:6
};
const {firstName,lastname}=person;
console.log(`name is ${firstName} and lastname is ${lastname}`);

const person1={
    ...a,
    middleName:"S",
}
console.log(person1);

const{
    name:firstName,
    ...
}
}