const book = {
  title: "გარდამავალი სეზონი",
  author: "ნოდარ დუმბაძე",
  year: 1980,
  genre: "ფიქშენი",
  price: 15.99
};

console.log(book);

console.log(book.title);
console.log(book.author);
console.log(book.year);
console.log(book.genre);
console.log(book.price);

console.log(book["title"]);
console.log(book["author"]);
console.log(book["year"]);
console.log(book["genre"]);
console.log(book["price"]);

console.log(`წიგნის სათაური არის "${book.title}", ავტორი: ${book.author}, გამოცემულია ${book.year} წელს. ჟანრი: ${book.genre}, და ფასია ${book.price} ლარი.`);
