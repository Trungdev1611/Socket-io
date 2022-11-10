import React, { useEffect, useState } from 'react'
import './Chatv1.css'
const ChatContent = ({username, room, socket}) => {
    const [currentMessage, setCurrentMsg] = useState("")
    useEffect(() => {
        socket.on("receive_msg", data => {
            console.log(data)

        })
    }, [socket])
    const sendMessage =  async() => {
        if(currentMessage) {
            const msgData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()
            }
        
            await socket.emit("sendMessage", msgData)
        }
        
    }
  return (
    <div className='boxchat'>
        <h3>Box Chat</h3>
  
        <div className='boxchat-container'>
            <span className='msgtext '>
                Hello! my friend
                </span>
                <span className='msgtext msgtext-own'>
                Hi!
                </span>
                <span className='msgtext '>
                How are you
                </span>
                <span className='msgtext msgtext-own'>
                I'm good
                </span>
                <span className='msgtext '>
                How are you
                </span>
                <span className='msgtext msgtext-own'>
                If you want to unstretch a single flex-item on the container, you have to set align-self: flex-start; to this flex-item. All other flex-items of the container aren't affected.
                </span>
                <span className='msgtext '>
                Hello! my friend
                </span>
                <span className='msgtext msgtext-own'>
                Hi!
                </span>
                <span className='msgtext '>
                How are you
                </span>
                <span className='msgtext msgtext-own'>
                I'm good
                </span>
                <span className='msgtext '>
                How are you
                </span>
                <span className='msgtext msgtext-own'>
                If you want to unstretch a single flex-item on the container, you have to set align-self: flex-start; to this flex-item. All other flex-items of the container aren't affected.
                </span>
        </div>
      <input type="text" placeholder='Message...' onChange={(e) => setCurrentMsg(e.target.value)}/>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  )
}

export default ChatContent
