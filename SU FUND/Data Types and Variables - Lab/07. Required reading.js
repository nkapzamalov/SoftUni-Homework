function requiredReading(numberOfPages, pagesRead1Hour, daysToReadTheBook) {
  let totalTimeReadTheBook = numberOfPages / pagesRead1Hour;
  let hoursPerDayToReadTheBook = totalTimeReadTheBook / daysToReadTheBook;

  console.log(hoursPerDayToReadTheBook);
}

requiredReading(432, 15, 4);
