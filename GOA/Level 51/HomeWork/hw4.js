let input = prompt("შეიყვანეთ შეძენილი საქონლის რაოდენობა:");
let quantity = parseInt(input);

let discount = (quantity >= 10) ? 10 : 0;

console.log("თქვენი ფასდაკლებაა: " + discount + "%");
