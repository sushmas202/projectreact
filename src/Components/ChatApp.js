// ChatApp.js
import { useState } from "react";
// import React {useState}from 'react';

const ChatApp = () => {
    const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, { text: inputValue }]);
      setInputValue('');
    }
  }
  return (
    <div className="Appsd">
      <table >
      <h2>Chat App</h2>
      <div className="message-container">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <strong>{message.sender}Me:</strong> {message.text}
          </div>
        ))}
      </div>
      <div className="input-container"> 
        <input className="input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button className= "button" onClick={handleSendMessage}>Send</button>
      </div>
    </table> 
    </div>
    
  );
}

export default ChatApp;
