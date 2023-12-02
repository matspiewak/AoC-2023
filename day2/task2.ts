const inputFile = Bun.file('./input.txt');
const inputs = (await inputFile.text()).split('\n');

(function() {
  let powValue = 0;

  for (let input of inputs) {
    let colorValues = {
      green: 0,
      red: 0,
      blue: 0,
    };

    if (!input) break;
    const [_, values] = input.split(': ');
    const games = values.split('; ');
    for (let game of games) {
      const gameCubes = game.split(', ');
      for (let gameCube of gameCubes) {
        const [value, color] = gameCube.split(' ');
        if (colorValues[color] < Number(value))
          colorValues[color] = Number(value);
      }
    }
    powValue += colorValues['green'] * colorValues['red'] * colorValues['blue'];
  }
  console.log(powValue);
})();
