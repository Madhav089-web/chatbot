const { GoogleGenerativeAI } = require("@google/generative-ai");
const {apiKey}=require('./api-key');

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
module.exports={model};
// const prompt = "Explain how AI works";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());
