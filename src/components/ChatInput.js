import React, { useState, useRef, useEffect } from 'react';

function ChatInput({ sendMessage }) {
  const [inputValue, setInputValue] = useState('');
  const sendButtonRef = useRef(null);

  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      sendMessage({ text: inputValue });
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendButtonRef.current.click();
    }
  };

  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress);
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []); // Empty dependency array ensures the effect is only run once on component mount

  return (
    <div className="input-group mt-3" style={{ backgroundColor: '#240046' }}>
      <input
        type="text"
        className="form-control"
        placeholder="Type a message..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="input-group-append">
        <button ref={sendButtonRef} className="btn btn-primary" type="button" onClick={handleSubmit}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatInput;
