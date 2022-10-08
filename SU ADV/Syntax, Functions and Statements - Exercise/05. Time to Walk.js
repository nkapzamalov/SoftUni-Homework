function solve(steps, footpringLength, speed) {
  let distance = steps * footpringLength;
  let distanceKm = distance / 1000;
  let restTime = Math.trunc(distance / 500);

  let totalTime = distanceKm / speed;
  let hours = Math.trunc(totalTime);
  let minutes = Math.floor(totalTime * 60);
  let seconds = minutes / 60;
  console.log(seconds);
}

solve(4000, 0.6, 5);
