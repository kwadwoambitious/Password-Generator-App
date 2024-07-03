import React, { ChangeEvent } from "react";
import styled from "styled-components";

// Styled components for the PasswordLength component
const PassLengthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
`;

// Styles components for the CharacterLengthText component
const CharacterLengthText = styled.p`
  font-size: 18px;
  margin: 0;
  font-family: inherit;

  @media (max-width: 375px) {
    font-size: 16px;
  }
`;

// Styled components for the CharacterLengthDisplay component
const CharacterLengthDisplay = styled.h4<{ hasPassword: boolean }>`
  font-size: 32px;
  margin: 0;
  color: #a4ffaf;
  font-family: inherit;

  @media (max-width: 375px) {
    font-size: 24px;
  }
`;

// Props interface for RangeInputProps component
type RangeInputProps = {
  value: number;
};

// Styled input range for setting password length
const RangeInput = styled.input.attrs<RangeInputProps>((props) => ({
  type: "range",
  min: "0",
  max: "20",
  value: props.value,
}))<RangeInputProps>`
  width: 100%;
  margin-top: 16px;
  margin-bottom: 42px;

  @media (max-width: 375px) {
    margin-top: 14px;
    margin-bottom: 32px;
  }

  -webkit-appearance: none;
  appearance: none;
  height: 8px;
  background: var(--range-bg, #08070b);
  outline: none;
  opacity: 0.7;

  /* Styles for the thumb */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 28px;
    height: 28px;
    background: #e6e5ea;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    transition: background-color 0.3s ease;
  }

  /* Hover styles for WebKit browsers */
  &::-webkit-slider-thumb:hover {
    background: #08070b;
    border: 2px solid #a4ffaf;
  }

  /* Styles for thumb in Firefox */
  &::-moz-range-thumb {
    width: 28px;
    height: 28px;
    background: #e6e5ea;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    transition: background-color 0.3s ease;
  }

  /* Hover styles for Firefox */
  &::-moz-range-thumb:hover {
    background: #08070b;
    border: 3px solid #a4ffaf;
  }

  /* Styles for thumb in IE */
  &::-ms-thumb {
    width: 28px;
    height: 28px;
    background: #e6e5ea;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    transition: background-color 0.3s ease;
  }

  /* Hover styles for IE */
  &::-ms-thumb:hover {
    background: #08070b;
    border: 2px solid #a4ffaf;
  }
`;

// Props interface for PasswordLength component
type PasswordLengthProps = {
  passwordLength: number; // Current password length value
  setPasswordLength: (length: number) => void; // Function to update password length
};

// PasswordLength component handles the password length slider and display
const PasswordLength: React.FC<PasswordLengthProps> = ({
  passwordLength,
  setPasswordLength,
}) => {
  // Function to handle change in password length slider
  const handlePasswordLengthChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordLength(parseInt(event.target.value, 10)); // Update password length state
  };

  // Calculate percentage for gradient background based on password length
  const percentage = (passwordLength / 20) * 100;
  const background = passwordLength > 0
    ? `linear-gradient(to right, #A4FFAF ${percentage}%, #08070B ${percentage}%)`
    : "#08070B";

  // Render the component
  return (
    <div>
      <PassLengthContainer>
        <CharacterLengthText>Character Length</CharacterLengthText>
        <CharacterLengthDisplay hasPassword={passwordLength > 0}>
          {passwordLength}
        </CharacterLengthDisplay>
      </PassLengthContainer>
      <RangeInput
        id="passwordLength"
        value={passwordLength}
        onChange={handlePasswordLengthChange}
        aria-label="Password Length"
        style={{ "--range-bg": background } as React.CSSProperties}
      />
    </div>
  );
};

export default PasswordLength;
