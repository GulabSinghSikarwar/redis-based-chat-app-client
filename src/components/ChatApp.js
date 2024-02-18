// ChatApp.js
import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import './ChatApp.css'
function ChatApp() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="container mt-5 chat-app">
      <ChatHeader />
      <MessageList messages={messages} />
      <ChatInput sendMessage={sendMessage} /> {/* Pass sendMessage as a prop */}
    </div>
  );
}

export default ChatApp;
