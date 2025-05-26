
function mathOp(a, b, op) {
  if (op === '+') return a + b;
  if (op === '-') return a - b;
  if (op === '*') return a * b;
  if (op === '/') return b !== 0 ? a / b : null;
  if (op === '**') return a ** b;
  if (op === '%') return a % b;
  return null;
}

for (let i = 1; i <= 10; i++) {
  console.log(i, mathOp(i, 2, '*'));
}
