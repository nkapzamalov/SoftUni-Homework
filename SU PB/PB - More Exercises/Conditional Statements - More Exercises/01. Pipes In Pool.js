function pipesInPool(input) {
  let cbmPoll = Number(input[0]);
  let debitP1 = Number(input[1]);
  let debitP2 = Number(input[2]);
  let h = Number(input[3]);
  1.0 <= h <= 24.0;

  let p1Work = h * debitP1;
  let p2Work = h * debitP2;
  let totalWork = p1Work + p2Work;
  let percWork = ((totalWork / cbmPoll) * 100).toFixed(2);
  let p1WorkPerc = ((p1Work / totalWork) * 100).toFixed(2);
  let p2WorkPerc = ((p2Work / totalWork) * 100).toFixed(2);

  if (cbmPoll >= totalWork) {
    console.log(
      `The pool is ${percWork}% full. Pipe 1: ${p1WorkPerc}%. Pipe 2: ${p2WorkPerc}%.`
    );
  } else {
    console.log(
      `For ${h.toFixed(2)} hours the pool overflows with ${(
        totalWork - cbmPoll
      ).toFixed(2)} liters.`
    );
  }
}

pipesInPool(["1000", "100", "120", "3"]);
