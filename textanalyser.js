const axios = require("axios");
const tf = require("@tensorflow/tfjs-node");

let model = null;
let metadata = null;

const loadModelAndMetadata = async () => {
  if (!model) {
    model = await tf.loadLayersModel(
      "https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/model.json"
    );
  }

  if (!metadata) {
    const response = await axios.get(
      "https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/metadata.json"
    );
    metadata = response.data;
  }
};

const predictSentiment = async (inputText) => {
  const trimmed = inputText
    .trim()
    .toLowerCase()
    .replace(/(\.|\,|\!)/g, "")
    .split(" ");
  const inputBuffer = tf.buffer([1, metadata.max_len], "float32");

  trimmed.forEach((word, i) => {
    const index = metadata.word_index[word] || 0;
    inputBuffer.set(index + metadata.index_from, 0, i);
  });

  const input = inputBuffer.toTensor();
  const predictOut = model.predict(input);
  const value = predictOut.dataSync()[0];
  predictOut.dispose();

  return value;
};

const getEmoji = (positivity) => {
  if (positivity > 0.9) return "😍";
  if (positivity > 0.8) return "😀";
  if (positivity > 0.6) return "🙂";
  if (positivity > 0.4) return "😐";
  if (positivity > 0.2) return "🙁";
  if (positivity > 0.1) return "😦";
  return "😱";
};

const getSentiment = async (text) => {
  if (!model || !metadata) {
    await loadModelAndMetadata();
  }

  const sentimentValue = await predictSentiment(text);

  return {
    emoji: getEmoji(sentimentValue),
    positivityValue: (sentimentValue * 100).toFixed(3) + "%"
  };
};

module.exports = getSentiment;
