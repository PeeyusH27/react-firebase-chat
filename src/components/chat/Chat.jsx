import React, { useEffect, useRef, useState } from 'react'
import "./chat.css"
import EmojiPicker from 'emoji-picker-react'
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useChatStore } from '../../lib/chatStore';


const Chat = () => {
    const [chat, setChat] = useState();
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const { chatId } = useChatStore()

    const endRef = useRef(null)

    useEffect(()=> {
        endRef.current?.scrollIntoView({behavior:"smooth"})
    }, [])

    useEffect(() => {
        const unSub = onSnapshot(doc(db, "chats", chatId), 
    (res)=> {
        setChat(res.data())
    })

    return () => {
        unSub();
    }
    }, [chatId])
    console.log(chat)

    const handleEmoji = (e) => {
        setText((prev) => prev + e.emoji);
        setOpen(false)
    };

    return (
        <div className='chat'>
            <div className='top'>
                <div className='user'>
                    <img src='./avatar.png' alt='' />
                    <div className="texts">
                        <span>Random</span>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className='icons'>
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className='center'>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Ab iusto culpa quasi dignissimos laborum, quo accusamus eos cupiditate ratione, nulla quidem enim. 
                            Eaque consequatur eos modi iusto in consequuntur accusantium?
                        </p>
                        <span>1min ago</span>
                    </div>
                </div>

                <div className="message own">
                    <div className="texts">
                        <img src="https://imgs.search.brave.com/Lzd3gQUwbVTuHqP2ySCZc6SrXYau72CmrZQkL3-3QDc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2Lzg0LzIwLzAz/LzM2MF9GXzY4NDIw/MDMwMl9MdjV0eFdM/SmF2TXQ0NnRrMkdu/TEpQdUhRSEJ2UEpO/NC5qcGc" alt="" />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Ab iusto culpa quasi dignissimos laborum, quo accusamus eos cupiditate ratione, nulla quidem enim. 
                            Eaque consequatur eos modi iusto in consequuntur accusantium?
                        </p>
                        <span>1min ago</span>
                    </div>
                </div>

                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Ab iusto culpa quasi dignissimos laborum, quo accusamus eos cupiditate ratione, nulla quidem enim. 
                            Eaque consequatur eos modi iusto in consequuntur accusantium?
                        </p>
                        <span>1min ago</span>
                    </div>
                </div>

                <div className="message own">
                    <div className="texts">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Ab iusto culpa quasi dignissimos laborum, quo accusamus eos cupiditate ratione, nulla quidem enim. 
                            Eaque consequatur eos modi iusto in consequuntur accusantium?
                        </p>
                        <span>1min ago</span>
                    </div>
                </div>

                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Ab iusto culpa quasi dignissimos laborum, quo accusamus eos cupiditate ratione, nulla quidem enim. 
                            Eaque consequatur eos modi iusto in consequuntur accusantium?
                        </p>
                        <span>1min ago</span>
                    </div>
                </div>

                <div className="message own">
                    <div className="texts">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Ab iusto culpa quasi dignissimos laborum, quo accusamus eos cupiditate ratione, nulla quidem enim. 
                            Eaque consequatur eos modi iusto in consequuntur accusantium?
                        </p>
                        <span>1min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>
            <div className='bottom'>
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input
                    type="text"
                    placeholder='Type a message...'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <div className="emoji">
                    <img src="./emoji.png"
                        alt=""
                        onClick={() => setOpen((prev) => !prev)}
                    />
                    <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji} />
                    </div>
                </div>
                <button className='sendButton'>Send</button>
            </div>
        </div>
    )
}

export default Chat