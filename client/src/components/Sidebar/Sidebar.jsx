import React, { useContext, useState } from 'react'
import "./Sidebar.css"

import { assets } from "../../assets/assets.js"
import { Context } from '../../context/Context.jsx'

const Sidebar = () => {


  const [extended, setExtended] = useState(false)
  const { onSent, prevPrompts, setRecentPrompt ,newChat } = useContext(Context)

  const loadPrompt = async(prompt)=>{
    setRecentPrompt(prompt)
    return await onSent(prompt)
  }

  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={() => setExtended(!extended)} className="menu" src={assets.menu_icon} alt="" />
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended
          ? <div className="recent">
            <p className="recent-title"></p>
            {
              prevPrompts.map((item, index) => (
                <div onClick={()=>loadPrompt(item)} className='recent-entry'>
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0,18)}...</p>
                </div>
              ))
            }

          </div>
          : null}
      </div>
      <div className="bottom">
        <div className="botton-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="botton-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activities</p> : null}
        </div>
        <div className="botton-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar