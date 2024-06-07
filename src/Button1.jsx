function Button1() {
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div>
      <button style={styles}>Button 1</button>
      <p>Inline Style Import</p>
    </div>
  );
}

export default Button1;
