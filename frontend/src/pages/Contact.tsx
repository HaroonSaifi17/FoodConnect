import React from 'react';
import './Contact.css'; 
const Contact: React.FC = () => {
  const handleSendMessage = () => {
    console.log('Message sent!');
  };

  return (
    <div className="container">
      <h2>Contact Us</h2>
      <input type="email" placeholder="Enter your email" className="inputField" />
      <input type="text" placeholder="Subject" className="inputField" />
      <textarea placeholder="Your message" rows={5} className="textareaField"></textarea>
      <button onClick={handleSendMessage} className="sendButton">
        Send Message
      </button>
    </div>
  );
};

export default Contact;

