const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];


let count = 100;

for (const line of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${line}  `);
  }, count += 200);
};