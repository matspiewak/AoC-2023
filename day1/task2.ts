const inputFile = Bun.file('input.txt');
const inputs = (await inputFile.text()).split('\n');

const numbersDictionary = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

let sum = 0;

for (let input of inputs) {
  const regex = /(?=(two|one|three|four|five|six|seven|eight|nine|\d))/g;

  let m = [];
  let x = [];

  while ((m = regex.exec(input)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }
    x.push(numbersDictionary[m[1]] ?? m[1]);
  }
  sum += x.length > 0 ? Number(x[0] + x[x.length - 1]) : 0;
}

console.log(sum);
