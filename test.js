const getSentiment = require('./textanalyser.js');

const runTest = async () => {
  const result = await getSentiment("Hate");
  console.log(result);
};

console.time("Runtime")
runTest();
console.timeEnd("Runtime")
