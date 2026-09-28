'use client';

import { useEffect, useRef, useState } from 'react';
import '@/styles/floating-chat-board.css';

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'bot',
    text: "Hello! 👋 Welcome to Inchbrick Realty. How can we assist your luxury property journey today?",
    time: 'Just now',
    options: [
      '🏢 Explore Top Projects',
      '💰 Home Loan & EMI Help',
      '✈️ NRI Investment Advisory',
      '📞 Request a Callback',
    ],
  },
];

const BOT_RESPONSES = {
  '🏢 Explore Top Projects': {
    text: "We offer handpicked ultra-luxury apartments, gated villas, and commercial spaces across Hyderabad, Bangalore, Mumbai & Dubai. Which location interests you most?",
    options: ['Dubai Luxury Homes', 'Hyderabad Gated Villas', 'Bangalore Apartments', 'Talk to Property Advisor'],
  },
  '💰 Home Loan & EMI Help': {
    text: "Our financial partners offer preferential home loan rates starting at 8.4% per annum with instant pre-approvals and zero processing fee guidance.",
    options: ['Calculate Loan EMI', 'Check Loan Eligibility', 'Request Financial Call'],
  },
  '✈️ NRI Investment Advisory': {
    text: "Our dedicated NRI Desk manages end-to-end property selection, legal due diligence, tax advisory, and rental management for overseas buyers.",
    options: ['Download NRI Guide', 'WhatsApp NRI Desk', 'Book Video Call'],
  },
  '📞 Request a Callback': {
    text: "Please enter your contact details or phone number below, and our senior real estate advisor will call you within 15 minutes!",
    options: ['Chat on WhatsApp', 'Browse Listings'],
  },
  'Dubai Luxury Homes': {
    text: "Dubai properties offer 0% tax, 6-8% rental yields, and Golden Visa eligibility! Would you like our curated Dubai portfolio?",
    options: ['Request Dubai Portfolio', 'Talk to Dubai Advisor'],
  },
  'Hyderabad Gated Villas': {
    text: "Hyderabad features prime gated communities in Gachibowli, Financial District, and Jubilee Hills with world-class clubhouse amenities.",
    options: ['View Hyderabad Projects', 'Request Site Visit'],
  },
};

export default function FloatingChatBoard() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setUnreadCount(0);
    }
  }, [isOpen, messages]);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (optionText) => {
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: optionText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const predefined = BOT_RESPONSES[optionText];
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: predefined
          ? predefined.text
          : `Thank you for your interest in "${optionText}". Our senior advisor has been notified and will guide you shortly!`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        options: predefined?.options || ['Chat on WhatsApp', 'Request a Callback'],
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: trimmed,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: "Thank you for reaching out! Our senior property consultant has received your message. You can also connect directly on WhatsApp for instant assistance.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        options: ['Chat on WhatsApp', 'Request a Callback'],
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <aside className="floating-chat-wrap" aria-label="Inchbrick Property Assistant">
      {/* Floating Chat Window */}
      {isOpen && (
        <div className="chat-board" role="dialog" aria-modal="false" aria-label="Property Assistant Chat">
          {/* Header */}
          <div className="chat-board__head">
            <div className="chat-board__agent">
              <div className="chat-board__avatar-wrap">
                <div className="chat-board__avatar">
                  <i className="fas fa-headset" aria-hidden="true" />
                </div>
                <span className="chat-board__online-dot" />
              </div>
              <div className="chat-board__info">
                <span className="chat-board__name">Inchbrick Assistant</span>
                <span className="chat-board__status">Online | Fast Response</span>
              </div>
            </div>
            <div className="chat-board__actions">
              <button
                type="button"
                className="chat-board__close-btn"
                onClick={toggleChat}
                aria-label="Close Chat"
              >
                <i className="fas fa-xmark" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Message Stream */}
          <div className="chat-board__body">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-msg chat-msg--${msg.sender}`}>
                <div className="chat-msg__bubble">{msg.text}</div>
                <span className="chat-msg__time">{msg.time}</span>

                {msg.options && msg.options.length > 0 && (
                  <div className="chat-options">
                    {msg.options.map((opt, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className="chat-option-btn"
                        onClick={() => handleOptionClick(opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="chat-typing">
                <span className="chat-typing__dot" />
                <span className="chat-typing__dot" />
                <span className="chat-typing__dot" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Direct WhatsApp Action Link */}
          <a
            href="https://wa.me/919876543210?text=Hi%20Inchbrick%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20properties."
            target="_blank"
            rel="noopener noreferrer"
            className="chat-board__whatsapp"
          >
            <span><i className="fab fa-whatsapp" /> Instant WhatsApp Connect</span>
            <i className="fas fa-chevron-right" />
          </a>

          {/* Input Footer */}
          <div className="chat-board__foot">
            <form className="chat-form" onSubmit={handleSubmit}>
              <input
                type="text"
                className="chat-input"
                placeholder="Type your query..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                className="chat-send-btn"
                disabled={!input.trim()}
                aria-label="Send Message"
              >
                <i className="fas fa-paper-plane" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Bottom-Right Button */}
      <button
        type="button"
        className="floating-chat-toggle"
        onClick={toggleChat}
        aria-expanded={isOpen}
        aria-label="Open Property Chat Board"
      >
        <div className="floating-chat-toggle__icon">
          <i className={isOpen ? 'fas fa-xmark' : 'fas fa-comments'} aria-hidden="true" />
        </div>
        <div className="floating-chat-toggle__label">
          <span className="floating-chat-toggle__title">Chat Assistant</span>
          <span className="floating-chat-toggle__sub">Ask anything</span>
        </div>
        {unreadCount > 0 && !isOpen && (
          <span className="floating-chat-toggle__badge">{unreadCount}</span>
        )}
      </button>
    </aside>
  );
}
