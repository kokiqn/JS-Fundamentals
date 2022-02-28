function solve(input) {
  let participants = input.shift();
  let currentLine = input.shift();
  let patternName = /[A-Za-z]+/g;
  let patternDistance = /[0-9]/g;
  let places = ['1st', '2nd', '3rd'];
  let winners = {};

  while (currentLine != 'end of race') {
    let name = currentLine.match(patternName).join('');
    let distance = currentLine.match(patternDistance)
      .reduce((a, x) => a + Number(x), 0);

    if (participants.match(name)) {
      if (!winners.hasOwnProperty(name)) {
        winners[name] = distance;
      } else {
        winners[name] += distance;
      }
    }

    currentLine = input.shift();
  }

  Object.keys(winners)
    .sort((a, b) => winners[b] - winners[a])
    .splice(0, 3)
    .forEach((el, i) => console.log(`${places[i]} place: ${el}`));
}

solve(['George, Peter, Bill, Tom',
  'G4e@55or%6g6!68e!!@ ',
  'R1@!3a$y4456@',
  'B5@i@#123ll',
  'G@e54o$r6ge#',
  '7P%et^#e5346r',
  'T$o553m&6',
  'end of race']
);
