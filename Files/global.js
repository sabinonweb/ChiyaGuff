const a = global.setTimeout(() => {
  console.log(`Why are you gay?`);
}, 1000);

const greet = (name) => {
  console.log(`Goodbye ${name}`);
};

setInterval(() => {
  greet("C");
  clearInterval(a);
}, 3000);

console.log(__dirname);
console.log(__filename);
