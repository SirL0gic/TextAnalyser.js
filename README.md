# textanalyser.js

![Badge - Open Source](https://img.shields.io/badge/Open%20Source-%E2%9D%A4%EF%B8%8F-brightgreen)
![npm monthly downloads](https://img.shields.io/npm/dm/textanalyser.js)
![License](https://img.shields.io/npm/l/textanalyser.js)


A Node.js library for text analysis, leveraging both artificial intelligence and traditional techniques.

🚀 **Latest Updates**: We have just launched! Stay tuned for more features.

## Features

- Sentiment analysis of a given text.

## Installation

Install via npm:

```bash
npm install textanalyser.js
```

## Usage

### Sentiment Analysis

To conduct sentiment analysis, import the `getSentiment` function and pass your desired text as an argument.

```javascript
const getSentiment = require("textanalyser.js");

const runTest = async () => {
    const result = await getSentiment("Your text here");
    console.log(result);
};

console.time("Runtime");
runTest();
console.timeEnd("Runtime");
```

**Sample Output**:
```
Runtime: 22.955ms
{ emoji: '😱', positivityValue: '3.457370400428772 %' }
```

## Contributing

We welcome contributions! If you find any issues or have suggestions, please open an issue or submit a pull request.

