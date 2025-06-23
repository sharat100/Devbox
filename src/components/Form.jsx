function Form({ onSubmit, children, style }) {
  const formStyles = {
    display: 'flex',
    marginLeft: '16px',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '320px',
    padding: '0 16px',
    gap: '16px',
    boxSizing: 'border-box',
    ...style,
  };

  return (
    <form onSubmit={onSubmit} style={formStyles}>
      {children || <p>Loading form...</p>}
    </form>
  );
}

export default Form;
