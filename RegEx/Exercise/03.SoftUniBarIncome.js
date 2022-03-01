function solve(input) {
  let pattern = /%(?<customer>[A-Z][a-z]*)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>[0-9]+(\.[0-9]+)?)\$/;
  let currentLine = input.shift();
  let totalPrice = 0;

  while (currentLine != 'end of shift') {
    let currentOrder = pattern.exec(currentLine);
    if (currentOrder) {
      let { customer, product, count, price } = currentOrder.groups;
      let currentSum = Number(count) * Number(price);
      totalPrice += currentSum;
      console.log(`${customer}: ${product} - ${currentSum.toFixed(2)}`);
    }
    currentLine = input.shift();
  }

  console.log(`Total income: ${totalPrice.toFixed(2)}`);
}
solve(['%George%<Croissant>|2|10.3$',
  '%Peter%<Gum>|1|1.3$',
  '%Maria%<Cola>|1|2.4$',
  'end of shift',]
)
