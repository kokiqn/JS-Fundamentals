function solve(input) {
  let regEx = />>(?<name>[A-Z][A-z]+)<<(?<price>[0-9]*[.]?[0-9]+)!(?<amount>\d*)/;
  let line = input.shift();
  let boughtFurniture = [];
  let totalPrice = 0;

  while (line != 'Purchase') {
    let validItem = line.match(regEx);
    if (validItem) {
      boughtFurniture.push(validItem.groups['name']);
      totalPrice += Number(validItem.groups['price']) * Number(validItem.groups['amount']);
    }
    line = input.shift();
  }

  console.log('Bought furniture:');
  boughtFurniture.length && console.log(boughtFurniture.join('\n'));
  console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

solve(['>>Sofa<<312.23!3',
  '>>TV<<300!5',
  '>Invalid<<!5',
  'Purchase']
);
