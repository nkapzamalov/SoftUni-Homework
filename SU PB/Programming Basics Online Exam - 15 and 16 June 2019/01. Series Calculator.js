function calculator(input) {
  let serialName = input[0];
  let seasonCount = Number(input[1]);
  let episodeCount = Number(input[2]);
  let episodeTime = Number(input[3]);

  let commercialTime = episodeTime * 0.2;
  let lastEpisodeTime = seasonCount * 10;
  let totalEpisodeTime = commercialTime + episodeTime;

  let totalTime =
    seasonCount * episodeCount * totalEpisodeTime + lastEpisodeTime;

  console.log(
    `Total time needed to watch the ${serialName} series is ${totalTime} minutes.`
  );
}

calculator(["Riverdale", "3", "21", "45"]);
