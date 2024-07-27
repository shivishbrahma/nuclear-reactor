import React from "react";
import PropTypes from "prop-types";

import "./OTPInput.css";

function OTPInput({ length,pattern, ...otherProps }) {
    const [otp, setOtp] = React.useState("");

    const inputs = [];

    const handleChange = (element, index) => {
        const value = element.value;
        if (!pattern.test(value)) return; // Only allow digits

        let newOtp = [...otp];
        newOtp[index] = value;

        setOtp(newOtp);

        // Move to the next input field
        if (value && index < length - 1) {
            inputs[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            e.preventDefault();
            let newOtp = [...otp];
            newOtp[index] = "";
            setOtp(newOtp);

            if (index > 0) {
                inputs[index - 1].focus();
            }
        } else if (e.key === "ArrowLeft" && index > 0) {
            inputs[index - 1].focus();
        } else if (e.key === "ArrowRight" && index < length - 1) {
            inputs[index + 1].focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const paste = e.clipboardData.getData("text");
        if (!pattern.test(paste)) return; // Only allow digits

        const newOtp = paste.slice(0, length).split("");
        for (let i = 0; i < length; i++) {
            inputs[i].value = newOtp[i] || "";

            if (newOtp[i] && i < length - 1) {
                inputs[i + 1].focus();
            }
        }
        setOtp(newOtp);
    };

    return (
        <div className="OTPInput" {...otherProps} onPaste={handlePaste}>
            {Array(length)
                .fill()
                .map((_, i) => i + 1)
                .map((_, index) => (
                    <input
                        className="OTPInput__input"
                        key={index}
                        type="text"
                        maxLength="1"
                        value={otp[index]?.toString() || ""}
                        onChange={(e) => handleChange(e.target, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        placeholder="0"
                        ref={(input) => (inputs[index] = input)}
                    />
                ))}
        </div>
    );
}

OTPInput.propTypes = {
    length: PropTypes.number,
    pattern: PropTypes.instanceOf(RegExp),
};

OTPInput.defaultProps = {
    length: 6,
    pattern: /\d/
};

export default OTPInput;
