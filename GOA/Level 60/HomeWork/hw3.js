const hotel = {
  hotelName: "Ambassadori",
  stars: 5,
  location: "თბილისი, საქართველო",
  guestReviews: {
    guest1: 4.7,
    guest2: 4.9,
    guest3: 4.5
  }
};

for (let key in hotel) {
  console.log(`${key}:`, hotel[key]);
}

console.log(hotel.hasOwnProperty("spa"));

const updatedHotel = Object.assign({}, hotel, { roomsCount: 120 });

console.log(updatedHotel);

Object.freeze(hotel);

hotel.stars = 3;
hotel.newFeature = "pool";

console.log(Object.isFrozen(hotel));
console.log(hotel);
