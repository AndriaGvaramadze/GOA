const university = {
  name: "თბილისის სახელმწიფო უნივერსიტეტი",
  departments: 7,
  website: "https://www.tsu.ge",
  ratings: {
    student1: 4.5,
    student2: 4.8,
    student3: 4.2
  }
};

for (let key in university) {
  console.log(`${key}:`, university[key]);
}

console.log(university.hasOwnProperty("scholarship"));

const updatedUniversity = Object.assign({}, university, { studentsCount: 15000 });

console.log(updatedUniversity);

Object.freeze(university);

university.name = "ივანე ჯავახიშვილის სახელობის უნივერსიტეტი";
university.newProp = "test";

console.log(Object.isFrozen(university));

console.log(university);
