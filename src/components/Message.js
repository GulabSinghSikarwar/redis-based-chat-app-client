// components/Message.js
import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';

const Message = ({ type, text, sender }) => {
    return (
        <div className={`message ${type}`}>
            <div className="message-content">{text}</div>
            <div className="message-sender">{sender}</div>
        </div>
    );
};

Message.propTypes = {
    type: PropTypes.oneOf(['sent', 'received']).isRequired,
    text: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
};

export default Message;
