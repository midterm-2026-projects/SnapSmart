import React, { useState } from 'react';
import '../../styles/admin/AdminMessages.css';

const AdminMessages = () => {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      customer: 'John Doe',
      email: 'john@email.com',
      lastMessage: 'Can you send me the edited photos?',
      lastMessageTime: '2025-01-24 2:30 PM',
      unreadCount: 2,
      messages: [
        { sender: 'John', text: 'Hi, when will my photos be ready?', time: '2025-01-24 1:00 PM', type: 'received' },
        { sender: 'You', text: 'They will be ready by tomorrow', time: '2025-01-24 1:15 PM', type: 'sent' },
        { sender: 'John', text: 'Great! Can you send me the edited photos?', time: '2025-01-24 2:30 PM', type: 'received' },
      ],
    },
    {
      id: 2,
      customer: 'Maria Santos',
      email: 'maria@email.com',
      lastMessage: 'Thank you for the great service!',
      lastMessageTime: '2025-01-23 5:45 PM',
      unreadCount: 0,
      messages: [
        { sender: 'Maria', text: 'Is my payment confirmed?', time: '2025-01-23 10:30 AM', type: 'received' },
        { sender: 'You', text: 'Yes, your payment has been received. Thank you!', time: '2025-01-23 10:45 AM', type: 'sent' },
        { sender: 'Maria', text: 'Thank you for the great service!', time: '2025-01-23 5:45 PM', type: 'received' },
      ],
    },
    {
      id: 3,
      customer: 'Robert Carlos',
      email: 'robert@email.com',
      lastMessage: 'Can I reschedule my booking?',
      lastMessageTime: '2025-01-22 3:20 PM',
      unreadCount: 1,
      messages: [
        { sender: 'Robert', text: 'Can I reschedule my booking?', time: '2025-01-22 3:20 PM', type: 'received' },
      ],
    },
    {
      id: 4,
      customer: 'Ana Cruz',
      email: 'ana@email.com',
      lastMessage: 'Looking forward to the event!',
      lastMessageTime: '2025-01-21 11:30 AM',
      unreadCount: 0,
      messages: [
        { sender: 'Ana', text: 'When do we need to confirm the final details?', time: '2025-01-21 10:00 AM', type: 'received' },
        { sender: 'You', text: 'Please confirm by next week', time: '2025-01-21 10:15 AM', type: 'sent' },
        { sender: 'Ana', text: 'Looking forward to the event!', time: '2025-01-21 11:30 AM', type: 'received' },
      ],
    },
  ]);

  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [messageInput, setMessageInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredConversations = conversations.filter((conv) =>
    conv.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageInput.trim()) {
      const updatedConversations = conversations.map((conv) => {
        if (conv.id === selectedConversation.id) {
          return {
            ...conv,
            messages: [
              ...conv.messages,
              {
                sender: 'You',
                text: messageInput,
                time: new Date().toLocaleString(),
                type: 'sent',
              },
            ],
            lastMessage: messageInput,
            lastMessageTime: new Date().toLocaleString(),
          };
        }
        return conv;
      });
      setConversations(updatedConversations);
      setSelectedConversation(updatedConversations.find((c) => c.id === selectedConversation.id));
      setMessageInput('');
    }
  };

  const handleSelectConversation = (conv) => {
    const updatedConversations = conversations.map((c) =>
      c.id === conv.id ? { ...c, unreadCount: 0 } : c
    );
    setConversations(updatedConversations);
    setSelectedConversation(updatedConversations.find((c) => c.id === conv.id));
  };

  const totalUnread = conversations.reduce((sum, c) => sum + c.unreadCount, 0);

  return (
    <div className="messages-container">
      <div className="messages-header">
        <h2>Message Clients</h2>
        <button className="btn-primary">✏️ New Message</button>
      </div>

      <div className="messages-layout">
        {/* Conversations List */}
        <div className="conversations-list">
          <div className="conv-header">
            <h3>Conversations {totalUnread > 0 && <span className="badge">{totalUnread}</span>}</h3>
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="conv-search"
            />
          </div>

          <div className="convs">
            {filteredConversations.map((conv) => (
              <div
                key={conv.id}
                className={`conversation-item ${selectedConversation.id === conv.id ? 'active' : ''} ${
                  conv.unreadCount > 0 ? 'unread' : ''
                }`}
                onClick={() => handleSelectConversation(conv)}
              >
                <div className="conv-avatar">
                  <span>{conv.customer.charAt(0)}</span>
                </div>
                <div className="conv-info">
                  <h4>{conv.customer}</h4>
                  <p>{conv.lastMessage.substring(0, 40)}...</p>
                </div>
                <div className="conv-right">
                  <span className="time">{conv.lastMessageTime.split(' ')[1]}</span>
                  {conv.unreadCount > 0 && (
                    <span className="unread-badge">{conv.unreadCount}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="chat-area">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="chat-header">
                <div className="chat-customer-info">
                  <h3>{selectedConversation.customer}</h3>
                  <p>{selectedConversation.email}</p>
                </div>
                <div className="chat-actions">
                  <button className="btn-small">📞</button>
                  <button className="btn-small">📧</button>
                  <button className="btn-small">⋯</button>
                </div>
              </div>

              {/* Messages */}
              <div className="messages-display">
                {selectedConversation.messages.map((msg, idx) => (
                  <div key={idx} className={`message ${msg.type}`}>
                    <div className="message-content">
                      <p>{msg.text}</p>
                      <span className="message-time">{msg.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <form className="message-input-area" onSubmit={handleSendMessage}>
                <textarea
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Type your message here..."
                  rows="3"
                />
                <div className="input-actions">
                  <button type="button" className="btn-icon">📎</button>
                  <button type="button" className="btn-icon">😊</button>
                  <button type="submit" className="btn-primary">Send</button>
                </div>
              </form>
            </>
          ) : (
            <div className="no-conversation">
              <p>Select a conversation to start messaging</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminMessages;
