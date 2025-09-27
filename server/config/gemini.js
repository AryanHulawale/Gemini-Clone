import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  throw new Error(" GEMINI_API_KEY is missing in .env file");
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

async function main(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-001" });

    const result = await model.generateContent([prompt]);

    const text = result.response.text(); 

    return text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
}

export default main;
