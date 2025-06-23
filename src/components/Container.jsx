function Container({ children, style }) {
  return (
    <div
      style={{
        height: '97vh',
        width: '99vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16px',
        // backgroundColor: "transparent",
        backgroundColor: '#f2f2f2',
        boxSizing: 'border-box',
        overflow: 'hidden',
        margin: 0,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default Container;
