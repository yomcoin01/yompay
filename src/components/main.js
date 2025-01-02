import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/Header";
import QuoteCard from "./Quote";

const LandingPage = () => {
  const targetDate = new Date("2024-12-31T00:00:00");

  // Countdown timer logic
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Header */}
      <Header />
      <QuoteCard />

      {/* Main Content */}
      <div
        style={{
          backgroundColor: "#F0E5F7",
          textAlign: "center",
          padding: "2rem",

          display: "flex",
          flexDirection: "column",
          //justifyContent: "center",
          //alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            color: "#4A235A",
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          WE ARE ALMOST READY!!!
        </h1>

        {/* Subtitle */}

        <div
          style={{
            height: "90%",
            width: "5px",
            backgroundColor: "#d81b60",
            marginRight: "10px",
          }}
        ></div>

        <p
          style={{
            color: "#B03A2E",
            fontSize: "1.2rem",
            fontStyle: "italic",
            padding: "0 1rem",
            marginBottom: "1.5rem",
          }}
        >
          “EXPERIENCE GREATNESS WITH US AT YOMCOIN. WE ARE COMING LOADED!”
        </p>

        {/* Countdown Timer */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            fontSize: "1.5rem",
            color: "#4A235A",
            marginBottom: "2rem",
          }}
        >
          {Object.keys(timeLeft).map((unit, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#EAECEE",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <span style={{ fontWeight: "bold" }}>
                {timeLeft[unit] || "0"}
              </span>
              <div style={{ fontSize: "0.75rem" }}>{unit}</div>
            </div>
          ))}
        </div>

        {/* Social Media Links */}
        <p
          style={{
            color: "#6C3483",
            fontSize: "0.9rem",
            marginTop: "2rem",
          }}
        >
          GOT ANY QUESTION? REACH US HERE!
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <a
            href="https://www.facebook.com/profile.php?id=61562451907275" 

            style={{ color: "#4A235A", fontSize: "1.5rem" }}
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://x.com/Yompayy?t=fZ51ZCoSbiewhuiL1vKSmw&s=09" 

            style={{ color: "#4A235A", fontSize: "1.5rem" }}
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/posts/yompay_merry-xmas-and-happy-new-year-in-advance-activity-7277941507146289154-UiwC?utm_source=share&utm_medium=member_android"
            style={{ color: "#4A235A", fontSize: "1.5rem" }}
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://youtube.com"
            style={{ color: "#4A235A", fontSize: "1.5rem" }}
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://whatsapp.com"
            style={{ color: "#4A235A", fontSize: "1.5rem" }}
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>

        {/* Media Queries */}
        <style>
          {`
            @media (max-width: 600px) {
              h1 {
                font-size: 1.5rem;
              }
              p {
                font-size: 1rem;
              }
              div {
                font-size: 1.2rem;
              }
              img {
                width: 60px;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default LandingPage;
