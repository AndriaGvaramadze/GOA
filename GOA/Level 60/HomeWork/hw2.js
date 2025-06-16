const sportsClub = {
  clubName: "დინამო თბილისი",
  sportType: "ფეხბურთი",
  foundedYear: 1925,
  achievements: {
    nationalTitles: 18,
    cups: 13,
    internationalTitles: 1
  }
};

console.log(Object.keys(sportsClub));
console.log(Object.values(sportsClub));
console.log(sportsClub.hasOwnProperty("sponsors"));

const updatedClub = Object.assign({}, sportsClub, { stadiumCapacity: 55000 });

console.log(updatedClub);

Object.freeze(sportsClub);

sportsClub.clubName = "საბურთალო";
sportsClub.newProperty = "test";

console.log(Object.isFrozen(sportsClub));
console.log(sportsClub);
