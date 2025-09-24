import React, { createContext, useContext } from 'react'
import "./Main.css"
import { assets } from '../../assets/assets.js'
import { Context } from '../../context/Context.jsx'

const Main = () => {


    const { onSent, recentPrompt, loading, input, setInput, showResult, resultData ,setRecentPrompt } = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        return await onSent(prompt)
    }

    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">

                {!showResult ?
                    <>
                        <div className="greet">
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you today ?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p onClick={()=>loadPrompt("Suggest Beautiful pictures to see on upcoming road trip")}>
                                    Suggest Beautiful pictures to see on upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p onClick={()=>loadPrompt("Briefly summarize this concept: urban planning")}>
                                    Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p onClick={()=>loadPrompt("Brainstorm team bonding activities for our work retreat")}>
                                    Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p onClick={()=>loadPrompt("Tell me about React js and React native")}>
                                    Tell me about React js and React native</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                    :
                    <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {
                                loading
                                    ? <div className="loader">
                                        <hr />
                                        <hr />
                                        <hr />
                                    </div>
                                    : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>

                            }
                        </div>
                    </div>
                }
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter the prompt here ' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                </p>
            </div>
        </div>
    )
}

export default Main