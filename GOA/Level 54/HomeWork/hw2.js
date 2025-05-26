function factorial(N) {
    let result = 1;
    for (let i = 1; i <= N; i++) {
        result *= i;
    }
    return result;
}

// Example:
console.log(factorial(5));  // 120
