import React from 'react';

const footerStyle = {
  backgroundColor: '#222',
  color: '#fff',
  textAlign: 'center',
  padding: '15px 0',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  fontSize: '14px',
};

export default function Footer() {
  return (
    <footer style={footerStyle}>
      &copy; 2025 Your Movie App. All rights reserved.
    </footer>
  );
}
