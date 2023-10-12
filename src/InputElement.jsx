import React from "react";
import "./inputElement.css";

const InputElement = ({ title, min, max, step, setValue, value }) => {
  const handleAmountChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (isNaN(newValue) || newValue<min || newValue>max) {
      setValue(min);
    }
    else {
      setValue(newValue);
    }
  };

  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(value * 100) / max}% 100%`,
    };
  };

  return (
    <div className="input-element">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        <h3>{title}</h3>
        <input
        className="input-value-tag"
          type="text"
          value={
            title === "Expected return rate"
              ? `${value}%`
              : title === "Time Period"
              ? `${value}Yr`
              : value
          }
          min={min}
          max={max}
          minLength={1}
          step={step}
          onChange={handleAmountChange}
          style={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            color: "rgb(7,181,137)",
            height: "25px",
            width: "100px",
            backgroundColor: "rgb(235,249,245)",
            border: "transparent",
            outline: "none",
            textAlign: "right",
            position: "relative",
          }}
        />
        {title === "Monthly Investment" ? (
          <span
            className="currency-symbol"
            style={{
              position: "absolute",
              right: "80px",
              color: "rgb(7,181,137)",
            }}
          >
            ₹
          </span>
        ) : (
          ""
        )}
      </div>
      <div>
        <input
          type="range"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={handleAmountChange}
          style={getBackgroundSize()}
        />
      </div>
    </div>
  );
};

export default InputElement;
