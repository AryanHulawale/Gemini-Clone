import { useState } from "react";
import { createContext, useEffect } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {

  const [input, setInput] = useState("")
  const [recentPrompt, setRecentPrompt] = useState("")
  const [prevPrompts, setPrevPrompts] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [loading, setLoading] = useState(false)
  const [resultData, setResultData] = useState("")


  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData(prev => prev + nextWord)
    }, 75 * index);
  }

  const newChat = ()=>{
    setLoading(false)
    setShowResult(false)
  }

  const fetchData = async(prompt) => {
    try {
      const res = await fetch("http://localhost:8000/api/prompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: prompt }),
      });


      const data = await res.json();
      const response = data.result
      return response
    } catch (err) {
      console.error("Error fetching Gemini response:", err);
    }
  }

  const onSent = async (prompt) => {


      setShowResult(true)
      setLoading(true)
      let response;
      if (prompt !== undefined) {
        response = await fetchData(prompt)
        setRecentPrompt(prompt)
      }
      else{
        setPrevPrompts(prev => [...prev, input])
        setRecentPrompt(input)
        response = await fetchData(input)

      }



      console.log("Gemini Response:", response);
      let formattedResponse = response
        // Bold (**text** → <b>text</b>)
        .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
        // Italic (*text* → <i>text</i>)
        .replace(/\*(.*?)\*/g, "<i>$1</i>")
        // Line breaks
        .replace(/\n/g, "<br>");
      // line breaks

      setResultData(formattedResponse);

      setLoading(false)
      setInput("")

    
  }

  // onSent(); 

  const contextValue = {
    input, setInput,
    recentPrompt, setRecentPrompt,
    prevPrompts, setPrevPrompts,
    loading, setLoading,
    showResult, setShowResult,
    resultData, setResultData,
    onSent,newChat,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
