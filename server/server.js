import express from "express";
import cors from "cors";
import main from "./config/gemini.js";

const app = express()
app.use(express.json());
app.use(cors());


app.post("/api/prompt", async (req, res) => {
    try {
        const { prompt } = req.body;
        const result = await main(prompt);
        res.json({ result });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "Something went wrong" });
    }
})

const PORT = 8000
app.listen(PORT, () => {
    console.log("App is Listening")

})
