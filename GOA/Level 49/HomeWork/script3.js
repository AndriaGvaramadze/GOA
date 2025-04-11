
let input = prompt("შეიყვანეთ თქვენი ქულა (0-100):");

let score = parseInt(input);


if (isNaN(score) || score < 0 || score > 100) {
    alert("გთხოვთ შეიყვანოთ სწორი ქულა 0-დან 100-მდე.");
} else {
    let grade;

    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    alert("თქვენი შეფასება არის: " + grade);
}
