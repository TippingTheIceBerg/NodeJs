// synchronous approach
const {writeFileSync, readFileSync} = require("fs");
// const fs = require("fs")
// fs.readFile() is the same as the destruction methods at the top
// two arguments, a path to the file, and what is the encoding to know how to decode, most times it will be utf8
const first = readFileSync("./content/first.txt","utf8")
const second = readFileSync("./content/second.txt","utf8");
// if the file is not there, node will create one, if it is there, node will overwrite all the files that are there. If we didn't want to overwrite any of the results,we can set the flag to a.
writeFileSync("./content/result-sync.txt",`Here is the result: ${first}, ${second}`, {flag:"a"})
