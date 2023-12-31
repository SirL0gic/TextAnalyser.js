# textanalyser.js

![Badge - Open Source](https://img.shields.io/badge/Open%20Source-%E2%9D%A4%EF%B8%8F-brightgreen)
![npm monthly downloads](https://img.shields.io/npm/dm/textanalyser.js)
![License](https://img.shields.io/npm/l/textanalyser.js)

🚀 **Latest Updates**: We have just launched! Stay tuned for more features.

An open-source Node.js library, textanalyser.js, harnesses artificial intelligence and conventional methods for text analysis. Even as Python dominates the AI and ML domains, we're enriching JavaScript's capabilities. Taking cues from TensorFlow's strides in JS, textanalyser.js steps it up. Integration is seamless—invoke a function, and get immediate results. Expertly crafted for peak performance, with a touch of heart. 🌟

## Features

- Sentiment analysis of a given text. (Introduced in Version 1.0.0)

### Artificial Intelligence Model
For the initial launch, we are using a mini TensorFlow model with 2.7 million parameters. A larger model and additional functionality will be introduced in the upcoming months.
<br>
Read more about it here: [Click me](https://github.com/SirL0gic/TextAnalyser.js/blob/main/information.md)

### Upcoming features:
- POS (Part-of-Speech) Tagging:
- Entity Recognition
- Plagiarism Detection
- Topic Modeling
- Language Detection
- Text Summarization

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

### Support
Currently supports the following platforms:

- Mac OS X CPU (10.12.6 Siera or higher)
- Linux CPU (Ubuntu 14.04 or higher)
- Linux GPU (Ubuntu 14.04 or higher and Cuda 11.2 w/ CUDNN v8) 
- Windows CPU (Win 7 or higher)
- Windows GPU (Win 7 or higher and Cuda 11.2 w/ CUDNN v8) 

## Contributing

We welcome contributions! If you find any issues or have suggestions, please open an issue or submit a pull request.

