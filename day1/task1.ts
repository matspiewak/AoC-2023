const inputFile = Bun.file('input.txt');
const inputs = (await inputFile.text()).split('\n');

let sum = 0;

for (let input of inputs) {
  const n = input.split(/ /)[0].replace(/[^\d]/g, '');
  const number = n ? Number(n[0] + n[n.length - 1]) : 0;
  sum += number;
}

console.log(sum);
