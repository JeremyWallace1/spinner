process.stdout.write('hello from spinner1.js... \rheyyy\n');
const cursorArray = ["|", "/", "-", "\\", "|", "/", "-", "\\"];
let time = 100;

for (let i in cursorArray) {
  setTimeout(() => {
    process.stdout.write(`\r${cursorArray[i]}`);
  }, time);
  time += 200;
};