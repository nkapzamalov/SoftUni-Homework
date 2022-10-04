function gramophone(band, album, song) {
  let durationInSeconds = (band.length * album.length * song.length) / 2;

  console.log(
    `The plate was rotated ${Math.ceil(durationInSeconds / 2.5)} times.`
  );
}

gramophone("Rammstein", "Sehnsucht", "Engel");
