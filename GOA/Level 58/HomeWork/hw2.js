const student = {
  name: "გიორგი",
  age: 21,
  faculty: "მეცნიერებათა ფაკულტეტი",
  course: 3,
  averageGrade: 89.5
};

console.log(student);

console.log(student.name);
console.log(student.age);
console.log(student.faculty);
console.log(student.course);
console.log(student.averageGrade);

console.log(student["name"]);
console.log(student["age"]);
console.log(student["faculty"]);
console.log(student["course"]);
console.log(student["averageGrade"]);

console.log(`სტუდენტის სახელი არის ${student.name}, მისი ასაკი არის ${student.age}, სწავლობს ფაკულტეტზე ${student.faculty}, ${student.course} კურსზე, საშუალო ქულა აქვს ${student.averageGrade}.`);
