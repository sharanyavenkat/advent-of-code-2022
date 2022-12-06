const fs = require("fs");

const input = fs
  .readFileSync("./input.txt", { encoding: "utf8" })
  .replace("/\r/g", "")
  .trim();

function isUnique(array) {
  return new Set(array).size === array.length;
}

function part1(input) {
  let slidingWindow = [];
  for (let i = 0; i < input.length; i++) {
    slidingWindow.push(input[i]);

    if (slidingWindow.length > 4) {
      slidingWindow.shift();
    }

    if (slidingWindow.length === 4 && isUnique(slidingWindow)) {
      console.log(i + 1);
      break;
    }
  }
}

part1(input);

function part2(input) {
  const messageLength = 14;
  let slidingWindow = [];
  for (let i = 0; i < input.length; i++) {
    slidingWindow.push(input[i]);

    if (slidingWindow.length > messageLength) {
      slidingWindow.shift();
    }

    if (slidingWindow.length === messageLength && isUnique(slidingWindow)) {
      console.log(i + 1);
      break;
    }
  }
}

part2(input);
