function oldBooks(input) {
  let index = 0;
  let requstedBook = input[index];
  index++;

  let books = input[index];
  index++;

  let bookCounter = 0;

  while (books !== "No More Books") {
    if (requstedBook === books) {
      console.log(`You checked ${bookCounter} books and found it.`);
      break;
    }

    bookCounter += 1;
    books = input[index];
    index++;
  }

  if (books === "No More Books") {
    console.log("The book you search is not here!");
    console.log(`You checked ${bookCounter} books.`);
  }
}

oldBooks([
  "Bourne",

  "True Story",

  "Forever",

  "More Space",

  "The Girl",

  "Spaceship",

  "Strongest",

  "Profit",

  "Tripple",

  "Stella",

  "The Matrix",

  "Bourne",
]);
