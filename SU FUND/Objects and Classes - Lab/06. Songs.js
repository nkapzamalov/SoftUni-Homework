function cats(input) {
  let numberOfSongs = input.shift();
  let typeListInfo = input.pop();
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
    rightsongs() {
      if (typeListInfo === "all") {
        console.log(this.name);
      } else if (typeListInfo === this.typeList) {
        console.log(this.name);
      }
    }
  }
  let result = [];
  for (let i = 0; i < input.length; i++) {
    let songInfo = input[i].split("_");
    let typeList = songInfo[0];
    let name = songInfo[1];
    let time = songInfo[2];

    let newSong = new Song(typeList, name, time);

    result.push(newSong);
  }
  for (let song of result) {
    song.rightsongs();
  }
}

cats([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
