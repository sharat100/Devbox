function Button({ children, onClick, style, color = 'blue', size = 'medium' }) {
  const buttonStyles = {
    padding: '12px',
    width: '100%',
    maxWidth: '300px',
    backgroundColor: '#0F52BA',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    textAlign: 'center',
    alignSelf: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.44)',
    ...style,
  };

  return (
    <button onClick={onClick} style={buttonStyles}>
      {children}
    </button>
  );
}

export default Button;
