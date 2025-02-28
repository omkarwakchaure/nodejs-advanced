const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const modifyFileData = data.toUpperCase();
  fs.writeFile("output.txt", modifyFileData, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("File modified successfully!");
    fs.readFile("output.txt", "utf8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Modified content:", data);
    });
  });
});
