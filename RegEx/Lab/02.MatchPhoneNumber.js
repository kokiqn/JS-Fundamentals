function matchNumber(numbers) {
  let regEx = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
  let validNumbers = [];
  let validNum;

  while ((validNum = regEx.exec(numbers)) !== null) {
    validNumbers.push(validNum[0]);
  }

  console.log(validNumbers.join(', '));
}

// One liner
// matchNumber = numbers => console.log(numbers.match(/\+359([ -])2\1\d{3}\1\d{4}\b/g).join(', '));

matchNumber("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222");
