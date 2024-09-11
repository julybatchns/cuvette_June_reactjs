const getRandomNumber = () => Math.floor(Math.random() * 100);

const Home = () => {
  // Inline styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    textAlign: "center",
    width: "300px",
    margin: "20px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "5px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  };

  const randomNumber = getRandomNumber();

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1>Random Page</h1>
        <p>Here’s a random number: {randomNumber}</p>
        <button style={buttonStyle} onClick={() => window.location.reload()}>
          Generate New Number
        </button>
      </div>
    </div>
  );
};

export default Home;
