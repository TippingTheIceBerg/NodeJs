const {readFile, writeFile} = require("fs").promises;
const util = require("util");

let seeWhatHappens = async () =>{
  try {
    let first = await readFile("./content/first.txt","utf8");
    let second = await readFile("./content/second.txt","utf8");
    await writeFile("Work-please.txt",`this should add text ${first} and ${second}  and make the file`)
    console.log(first,second
      );

  }
  catch(err){
    console.log(err);
  }
}
seeWhatHappens()