import React, { useMemo } from "react";
import styled from "styled-components";

// Define the props for the PasswordStrengthIndicator component
interface PasswordStrengthIndicatorProps {
  password: string | null;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}

// Styled component for the wrapper of the indicator
const IndicatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  background-color: #18171f;
  padding: 10px 32px;

  @media (max-width: 500px) {
    padding: 4px 18px;
  }
`;

// Styled component for the container of the indicator boxes
const IndicatorBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

// Styled component for each indicator box, with props for filled state and color
const IndicatorBox = styled.div<{ filled: boolean; color: string }>`
  width: 10px;
  height: 28px;
  background-color: ${(props) => (props.filled ? props.color : "transparent")};
  border: 2px solid ${(props) => (props.filled ? props.color : "#E6E5EA")};
  margin-left: 8px;
  transition: background-color 0.3s ease;

  @media (max-width: 500px) {
    margin-left: 6px;
    width: 6px;
    height: 24px;
  }
`;

// Styled component for the strength indicator name
const IndicatorName = styled.h4`
  color: #817d92;
  font-size: 18px;
  font-family: inherit;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

// Styled component for the strength name text
const StrengthName = styled.div`
  margin-right: 16px;
  font-weight: bold;
  font-size: 24px;
  color: #e6e5ea;
  font-family: inherit;

  @media (max-width: 500px) {
    font-size: 15px;
    margin-right: 6px;
  }
`;

// Functional component for the PasswordStrengthIndicator
const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({
  password,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols
}) => {
  // Function to calculate the strength of the password based on the new logic
  const calculateStrength = (password: string) => {
    const length = password.length;
    const optionsSelected = [
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols,
    ].filter(Boolean).length;

    if (length === 4 && (optionsSelected === 1 || optionsSelected === 2 || optionsSelected === 3 || optionsSelected === 4)) {
      return 1;
    }
    else if (length === 5 || length === 6) {
      if (optionsSelected === 1 || optionsSelected === 2) {
        return 1;
      } 
      else if (optionsSelected === 3 || optionsSelected === 4) {
        return 2;
      }
    }
    else if(length === 7){
      if(optionsSelected === 1){
        return 1;
      }
      else if(optionsSelected === 2){
        return 2;
      }
      else if(optionsSelected === 3 || optionsSelected === 4){
        return 3;
      }
    }
    else if(length >= 8){
      if(optionsSelected === 1){
        return 1;
      }
      else if(optionsSelected === 2){
        return 2;
      }
      else if(optionsSelected === 3){
        return 3;
      }
      else if(optionsSelected === 4){
        return 4;
      }
    }

    return 0; // NO PASSWORD
  };

  // Function to get the strength name based on the strength value
  const getStrengthName = (strength: number) => {
    const names = ["TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];
    return names[strength - 1] || ""; // Return empty string if no password
  };

  // Memoize the strength calculation to avoid unnecessary recalculations
  const strength = useMemo(
    () => (password ? calculateStrength(password) : 0),
    [password, includeUppercase, includeLowercase, includeNumbers, includeSymbols]
  );

  // Memoize the strength name to avoid unnecessary recalculations
  const strengthName = useMemo(() => getStrengthName(strength), [strength]);

  // Define the colors for each strength level
  const colors = ["#F64A4A", "#FB7C58", "#F8CD65", "#A4FFAF"];

  return (
    <IndicatorWrapper>
      <IndicatorName>STRENGTH</IndicatorName>
      <IndicatorBoxContainer>
        <StrengthName>{strengthName}</StrengthName>
        {[...Array(4)].map((_, index) => (
          <IndicatorBox
            key={index}
            filled={index < strength}
            color={colors[strength - 1] || "#E6E5EA"}
          />
        ))}
      </IndicatorBoxContainer>
    </IndicatorWrapper>
  );
};

export default PasswordStrengthIndicator;