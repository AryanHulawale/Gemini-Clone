import { GoogleGenAI } from '@google/genai';
import dotenv from "dotenv";
dotenv.config(); 

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

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


