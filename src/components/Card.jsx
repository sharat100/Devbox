import React from 'react';

function Card({ children, style }) {
  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    ...style,
  };

  return <div style={cardStyle}>{children}</div>;
}

export default Card;
