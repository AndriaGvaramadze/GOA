function createSentence() {
    const firstName = prompt("შეიყვანეთ თქვენი სახელი:");
    const lastName = prompt("შეიყვანეთ თქვენი გვარი:");
    const age = prompt("შეიყვანეთ თქვენი ასაკი:");
    const location = prompt("შეიყვანეთ თქვენი საცხოვრებელი ადგილი:");
    const motherFirstName = prompt("შეიყვანეთ თქვენი დედის სახელი:");
    const motherLastName = prompt("შეიყვანეთ თქვენი დედის გვარი:");
    const motherAge = prompt("შეიყვანეთ თქვენი დედის ასაკი:");

    const sentence = `${firstName} ${lastName} არის ${age}-წლოვანი ადამიანი, რომელიც ცხოვრობს ${location}. მისი დედა არის ${motherFirstName} ${motherLastName}, რომელიც ${motherAge}-წლისაა.`;

    alert(sentence);
}

createSentence();
