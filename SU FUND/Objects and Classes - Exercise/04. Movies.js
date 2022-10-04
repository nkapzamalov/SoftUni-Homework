function movies(input) {
  let movies = [];

  input.forEach((command) => {
    let splitCommand = command.split(" ");
    let addIndex = splitCommand.indexOf("addMovie");
    let directorIndex = splitCommand.indexOf("directedBy");
    let onDayIndex = splitCommand.indexOf("onDate");

    if (addIndex > -1) {
      movies.push({ name: splitCommand.slice(addIndex + 1).join(" ") });
    } else if (directorIndex > -1) {
      let name = splitCommand.slice(0, directorIndex).join(" ");
      let director = splitCommand.slice(directorIndex + 1).join(" ");

      for (let i = 0; i < movies.length; i++) {
        if (movies[i].name === name) {
          movies[i].director = director;
          break;
        }
      }
    } else if (onDayIndex > -1) {
      let name = splitCommand.slice(0, onDayIndex).join(" ");
      let date = splitCommand.slice(onDayIndex + 1).join(" ");
      for (let i = 0; i < movies.length; i++) {
        if (movies[i].name === name) {
          movies[i].date = date;
          break;
        }
      }
    }
  });

  movies.forEach((movie) => {
    if (
      movie.name !== undefined &&
      movie.date !== undefined &&
      movie.director !== undefined
    ) {
      console.log(JSON.stringify(movie));
    }
  });
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
  "addMovie Superman",
]);
