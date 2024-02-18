// MultiUserChat.js
import React, { useState } from 'react';

function MultiUserChat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [username, setUsername] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('General');

  const handleMessageSend = () => {
    if (inputValue.trim() === '' || username.trim() === '') return;
    const newMessage = {
      user: username,
      text: inputValue,
      room: selectedRoom
    };
    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  const handleRoomChange = (room) => {
    setSelectedRoom(room);
  };

  return (
    <div className="multi-user-chat">
      <div className="sidebar">
        <h2>Rooms</h2>
        <ul>
          <li className={selectedRoom === 'General' ? 'active' : ''} onClick={() => handleRoomChange('General')}>General</li>
          <li className={selectedRoom === 'Technology' ? 'active' : ''} onClick={() => handleRoomChange('Technology')}>Technology</li>
          <li className={selectedRoom === 'Sports' ? 'active' : ''} onClick={() => handleRoomChange('Sports')}>Sports</li>
          {/* Add more rooms as needed */}
        </ul>
      </div>
      <div className="chat-area">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.user === username ? 'own' : 'other'}`}>
              <span className="user">{message.user}: </span>
              <span className="text">{message.text}</span>
            </div>
          ))}
        </div>
        <div className="input-area">
          <input
            type="text"
            placeholder="Your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Type a message"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleMessageSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default MultiUserChat;
