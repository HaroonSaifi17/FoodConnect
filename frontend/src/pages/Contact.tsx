import React from 'react';

const ContactUs = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  };

  const inputStyle = {
    marginBottom: '15px',
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  };

  const textareaStyle = {
    marginBottom: '15px',
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    resize: 'vertical',
  };

  const buttonStyle = {
    padding: '10px 15px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const handleSendMessage = () => {
    // Logic to handle sending the message
    console.log('Message sent!');
  };

  return (
    <div style={containerStyle}>
      <h2>Contact Us</h2>
      <input
        type="email"
        placeholder="Enter your email"
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Subject"
        style={inputStyle}
      />
      <textarea
        placeholder="Your message"
        rows="5"
        style={textareaStyle}
      ></textarea>
      <button
        onClick={handleSendMessage}
        style={buttonStyle}
      >
        Send Message
      </button>
    </div>
  );
};

export default ContactUs;
