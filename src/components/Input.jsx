function Input({ value, onChange, placeholder, type = 'text', style }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        width: '100%',
        padding: '12px',
        marginBottom: '16px',
        border: '1px solid #ddd',
        borderRadius: '6px',
        fontSize: '16px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.44)',
        ...style,
      }}
    />
  );
}

export default Input;
