const { readFile, writeFile } = require("fs");

// we need a callback with asynch approach. Similar to add eventListener where we say click, and then give the callback function, which runs each time it is called.
// failure to add utf8 will just give out a buffer of numbers.
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      return;
    }
    const second = result;
    writeFile(
      "./content/result-asynch.txt",
      `Here is the result ${first} ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
