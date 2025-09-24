import { GoogleGenAI } from '@google/genai';

const GEMINI_API_KEY = "AIzaSyDUaEVWVP6F5bAJ0rlhiAj-7VeVWnpdE1c";

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash-001',
    contents: prompt,
  });
  // console.log("repsonse is comming")
  // console.log(response.text);
  return response.text; 
}

export default main;
