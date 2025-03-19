function calculator() {
    let num1 = parseFloat(prompt("Sheiyvanet pirveli ricxvi :"));
    let num2 = parseFloat(prompt("sheiyvanet meore ricxvi"));
  
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num2 !== 0 ? num1 / num2 : "Ar aris ganayofi";
  
    console.log("Jami: " + sum);
    console.log("Sxvaoba: " + difference);
    console.log("Namravli: " + product);
    console.log("Ganayofi: " + quotient);
  }
  
  calculator();
  