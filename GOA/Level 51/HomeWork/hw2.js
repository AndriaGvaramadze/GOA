let input1 = prompt("შეიყვანეთ პირველი რიცხვი:");
let input2 = prompt("შეიყვანეთ მეორე რიცხვი:");

let num1 = parseInt(input1);
let num2 = parseInt(input2);

let max = (num1 > num2) ? num1 : num2;

console.log("მაქსიმალური რიცხვია: " + max);
