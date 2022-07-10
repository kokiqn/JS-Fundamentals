function solve(input) {
  let regex = /\b(?<user>[\w]*[.,-]*[\w]*)@(?<host>[A-Za-z.-]*)\b/gm;
  console.log(input.match(regex).join('\n'));
}

solve('info@softuni-bulgaria.org, kiki@hotmail.co.uk, no-reply@github.com, s.peterson@mail.uu.net, info-bg@software-university.software.academy');
