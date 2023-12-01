const inputFile = Bun.file('input.txt');
const inputs = (await inputFile.text()).split('\n');

const numbersDictionary = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

let sum = 0;

for (let input of inputs) {
  const n = input
    .split(/(one|two|three|four|five|six|seven|eight|nine)/g)
    .map((word: string) => numbersDictionary[word] ?? word)
    .join()
    .replace(/[^\d]/g, '');
  const number = n ? Number(n[0] + n[n.length - 1]) : 0;
  sum += number;
}

console.log(sum);
