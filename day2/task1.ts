const inputFile = Bun.file('./input.txt');
const inputs = (await inputFile.text()).split('\n');

let validGames = 0;

const maxCubes = {
  green: 13,
  red: 12,
  blue: 14,
};

for (let input of inputs) {
  if (!input) break;
  const [index, values] = input.split(': ');
  let validGame = true;
  const games = values.split('; ');
  for (let game of games) {
    const gameCubes = game.split(', ');
    let x = true;
    for (let gameCube of gameCubes) {
      const [value, color] = gameCube.split(' ');
      if (maxCubes[color] < value) {
        x = false;
        break;
      }
    }
    if (x === false) validGame = false;
  }
  if (validGame) validGames += Number(index.split(' ')[1]);
}
console.log(validGames);
