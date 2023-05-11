// Chat.js

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io();

function Chat() {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    socket.on('chat message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    if (message) {
      socket.emit('chat message', { message, user });
      messageInput.value = '';
    }
  };

  return (
    <div>
      <h1>Chat App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" id="messageInput" placeholder="Enter message..." />
        <button type="submit">Send</button>
      </form>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <strong>{message.user}</strong>: {message.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Chat;
