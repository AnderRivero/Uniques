const fs = require("fs");
const filePath = "repetidos.txt";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.trim().split("\n");

  const map = new Map();
  lines.forEach((element) => {
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  });

  map.forEach((value, key) => {
    if (value === 1) {
      console.log(key);
    }
  });
});
