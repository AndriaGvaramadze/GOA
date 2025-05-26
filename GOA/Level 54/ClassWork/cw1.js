function startTimer(seconds) {
    let remaining = seconds;

    const intervalId = setInterval(() => {
        console.log(remaining);
        if (remaining === 0) {
            clearInterval(intervalId);
        }
        remaining--;
    }, 1000);
}

// Example usage:
startTimer(10);
