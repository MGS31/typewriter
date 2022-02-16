const sentance = "hello there from lighthouse labs!\n";
for (const index in sentance) {
    setTimeout(() => {
    process.stdout.write(sentance[index]);
  }, 50 * index);
};