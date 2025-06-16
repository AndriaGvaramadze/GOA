
let academy = {
  name: "CodeAcademy",
  courses: ["JavaScript", "Python", "Html"],
  socialLink: "https://codeacademy.example",
  reviews: {
    user1: {
      name: "Andria",
      status: "parent",
      review: "ძალიან კმაყოფილი ვარ პროგრამით!"
    },
    user2: {
      name: "Luka",
      status: "child",
      review: "საინტერესო და გასაგები გაკვეთილებია."
    },
    user3: {
      name: "Tea",
      status: "parent",
      review: "შვილს ძალიან მოსწონს, დიდი პროგრესია."
    }
  }
};


console.log("თვისებები და მნიშვნელობები:", Object.entries(academy));


console.log("თვისებების სია:", Object.keys(academy));

console.log("მნიშვნელობების სია:", Object.values(academy));



let moreInfo = {
  
};
let goaAcademy = Object.assign({}, academy, moreInfo);

console.log("გაერთიანებული ობიექტი:", goaAcademy);


Object.freeze(academy);


academy.name = "NewName";
console.log("გაყინული ობიექტი ", academy);
