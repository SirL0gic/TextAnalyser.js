# textanalyser.js

![Badge - Open Source](https://img.shields.io/badge/Open%20Source-%E2%9D%A4%EF%B8%8F-brightgreen)
![npm monthly downloads](https://img.shields.io/npm/dm/textanalyser.js)
![License](https://img.shields.io/npm/l/textanalyser.js)

An open-source Node.js library, textanalyser.js, harnesses artificial intelligence and conventional methods for text analysis. Even as Python dominates the AI and ML domains, we're enriching JavaScript's capabilities. Taking cues from TensorFlow's strides in JS, textanalyser.js steps it up. Integration is seamless—invoke a function, and get immediate results. Expertly crafted for peak performance, with a touch of heart. 🌟

🚀 **Latest Updates**: We have just launched! Stay tuned for more features.

## Features

- Sentiment analysis of a given text.

### Artificial Intelligence Model
For the initial launch, we are using a mini TensorFlow model with 2.7 million parameters. A larger model and additional functionality will be introduced in the upcoming months.
<br>
Read more about it here: [Click me](https://github.com/SirL0gic/TextAnalyser.js/blob/main/information.md)

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
{ emoji: '😱', positivityValue: '3.457%' }
```

## Contributing

We welcome contributions! If you find any issues or have suggestions, please open an issue or submit a pull request.

