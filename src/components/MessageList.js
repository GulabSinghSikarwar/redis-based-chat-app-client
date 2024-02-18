// components/MessageList.js
import React from 'react';
import Message from './Message';

const MessageList = ({ messages }) => {

  if (!messages || messages.length === 0) {
    return <div>No messages</div>;
  }

  return (
    <ul className="list-group mt-3">
      {messages.map((message, index) => (
        <li key={index} className="list-group-item">
          <div className="d-flex">
            {/* <div className="flex-grow-1">{message.text}</div>
            <div className="text-muted">{message.sender}</div> */}
            <Message type={message.type} text={message.text} sender={message.sender} />

          </div>
        </li>
      ))}
    </ul>
  );
}

export default MessageList;