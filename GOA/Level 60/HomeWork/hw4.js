const cinema = {
  cinemaName: "რუსთაველი",
  moviesCount: 12,
  location: "თბილისი",
  movieReviews: {
    user1: 4.3,
    user2: 4.7,
    user3: 4.1
  }
};

for (let key in cinema) {
  console.log(`${key}:`, cinema[key]);
}

console.log(cinema.hasOwnProperty("vipSeats"));

const updatedCinema = Object.assign({}, cinema, { ticketPrice: 15 });

console.log(updatedCinema);

Object.freeze(cinema);

cinema.moviesCount = 20;
cinema.newProp = "test";

console.log(Object.isFrozen(cinema));
console.log(cinema);
