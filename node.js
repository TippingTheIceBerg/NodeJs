const { readFile } = require("fs");
const getText = (path) => {
  return new Promise((resolve, reject) => {
    // this is the way we created those messy async
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
getText("./content/first.txt")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
