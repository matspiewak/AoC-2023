const file = Bun.file('./input.txt');
const inputs = (await file.text()).split('\n');

type Match = {
  value: string;
  col: number;
  row: number;
};

function taskOne() {
  const symbols = match(inputs, /[^.0-9]/g);
  const numbers = match(inputs, /\d+/g);

  const sum = numbers
    .filter((n) => {
      return symbols.some((s) => isAdjacent(s, n));
    })
    .reduce((acc, curr) => {
      return (acc += +curr.value);
    }, 0);

  console.log(sum);
}
taskOne();

function taskTwo() {
  const gears = match(inputs, /\*/);
  const numbers = match(inputs, /\d+/g);

  const sum = gears
    .map((g) => {
      const neighbors = numbers.filter((n) => isAdjacent(g, n));
      return neighbors.length === 2
        ? +neighbors[0].value * +neighbors[1].value
        : 0;
    })
    .reduce((acc, p) => (acc += p), 0);

  console.log(sum);
}
taskTwo();

function isAdjacent(m1: Match, m2: Match): boolean {
  return (
    Math.abs(m2.row - m1.row) <= 2 &&
    m1.col <= m2.col + m2.value.length &&
    m2.col <= m1.col + m1.value.length
  );
}

function match(rows: Array<string>, rx: RegExp): Array<Match> {
  let matches: Array<Match> = [];
  for (let [index, row] of rows.entries()) {
    let pos = 0;
    row.match(rx)?.map((value: string) => {
      matches.push({
        value,
        col: row.indexOf(value, pos),
        row: +index,
      });
      pos = row.indexOf(value, pos) + 1;
    });
  }
  return matches;
}
