function calculate(a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 'Cannot divide by zero';
        case '**': return a ** b;
        case '%': return a % b;
        default: return 'Unknown operator';
    }
}

// მაგალითი:
console.log(calculate(5, 2, '+'));  // 7
console.log(calculate(5, 2, '**')); // 25
