function categorizeMembers(data) {
    return data.map(([age, handicap]) => {
        return age >= 55 && handicap > 7 ? "Senior" : "Open";
    });
}

const members = [
    [60, 10],
    [30, -5],
    [55, 8],
    [54, 9],
    [70, 6]
];

console.log(categorizeMembers(members));
