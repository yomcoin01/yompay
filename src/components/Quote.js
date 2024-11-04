import React from "react";

// Custom hook to track screen width
const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 600);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const QuoteCard = () => {
  const isMobile = useIsMobile(); // Use the custom hook

  const styles = {
    container: {
      display: "flex",
      backgroundColor: "#f7e6f6",
      padding: isMobile ? "15px" : "10px",
      borderRadius: "8px",
      maxWidth: isMobile ? "100%" : "400px",
      textAlign: isMobile ? "left" : "center",
      boxSizing: "border-box",
    },
    line: {
      borderLeft: "4px solid #d10063",
      paddingLeft: isMobile ? "8px" : "10px",
      marginRight: isMobile ? "8px" : "10px",
      textAlign: isMobile ? "left" : "center",
    },
    text: {
      color: "#d10063",
      fontSize: isMobile ? "16px" : "18px",
      fontWeight: "bold",
      textAlign: isMobile ? "left" : "center",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.line}>
        <p style={styles.text}>
          “EXPERIENCE GREATNESS WITH US AT YOMPAY. WE ARE COMING LOADED!”
        </p>
      </div>
    </div>
  );
};

export default QuoteCard;
