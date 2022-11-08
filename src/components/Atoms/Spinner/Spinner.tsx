import React, { useEffect, useState } from "react";
import "./index.css";

export const Spinner = ({ message }: { message: string }) => {
  const [etc, setEtc] = useState("...");

  useEffect(() => {
    const interval = setInterval(() => {
      if (etc.length === 3) {
        setEtc("");
      } else {
        setEtc(etc + ".");
      }
    }, 500);
    return () => clearInterval(interval);
  }, [etc]);

  return (
    <>
      <div className="overlay"></div>
      <div className="spinner-screen">
        <div className="spinner-animation"></div>
        <div className="spinner-message">
          <p>
            {message} {etc}
          </p>
        </div>
      </div>
    </>
  );
};
