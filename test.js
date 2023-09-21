const getSentiment = require("./textanalyser.js");

//Test Cases
const runTest = async (text, emoji, output, isSuccess, testNumber) => {
  const result = await getSentiment(text);
  result.positivityValue === output && result.emoji === emoji
    ? (isSuccess = true)
    : (isSuccess = false);
  if (isSuccess) {
    console.log(`%c✅ ${"Test" + testNumber}: Test Passed`, "color: green;");
  } else {
    console.log(`%c❌ ${"Test" + testNumber}: Test Failed`, "color: red;");
  }
};

console.time("Runtime");
runTest("I am having a good day", "😍", "99.979%", true, 1);
runTest("I am having a horrible day", "😱", "0.057%", true, 2);
runTest(
  "I dont know what to do in life but it is okay",
  "😐",
  "55.075%",
  true,
  3
);
console.timeEnd("Runtime");
