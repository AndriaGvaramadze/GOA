let password = prompt("შეიყვანეთ პაროლი:");

let message = (password.length >= 8) 
    ? "პაროლი საკმარისად გრძელია" 
    : "პაროლი ძალიან მოკლეა";

console.log(message);
