import styled from 'styled-components';

// Styled component for the checkbox input
const StyledCheckbox = styled.input`
  width: 20px; 
  height: 20px; 
  margin-right: 24px; 
  cursor: pointer; 
  position: relative; 
  background-color: transparent; 
  appearance: none; 
  border: 3px solid #e6e5ea; 
  outline: none; 

  @media (max-width: 375px) {
    margin-right: 20px; 
  }

  // Change border color on hover
  &:hover {
    border: 3px solid #afffaf;
  }

  // Change background and border color when checked
  &:checked {
    background-color: #a4ffaf;
    border-color: #a4ffaf;
  }

  // Add a checkmark when checked
  &:checked::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 12px;
    border: solid #18171f;
    border-width: 0 4px 4px 0;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

// Styled component for the container of the checkbox and label
const CheckNumbersContainer = styled.div`
  margin-bottom: 20px; 
  display: flex; 
  align-items: center; 

  @media (max-width: 375px) {
    margin-bottom: 16px; 
  }
`;

// Styled component for the label
const NumbersLabel = styled.label`
  font-size: 18px; 
  font-family: inherit; 

  @media (max-width: 375px) {
    font-size: 16px; 
  }
`;

// Type definition for the component props
type IncludeNumbersProps = {
  includeNumbers: boolean; // Boolean to indicate if numbers are included
  setIncludeNumbers: (include: boolean) => void; // Function to toggle includeNumbers state
};

// Functional component for the Include Numbers option
const IncludeNumbers = ({ includeNumbers, setIncludeNumbers }: IncludeNumbersProps) => {
  // Function to handle checkbox change
  const handleIncludeNumbersChange = () => {
    setIncludeNumbers(!includeNumbers); // Toggle the includeNumbers state
  };

  return (
    <CheckNumbersContainer>
      <StyledCheckbox
        type="checkbox"
        id="includeNumbers"
        checked={includeNumbers}
        onChange={handleIncludeNumbersChange}
      />
      <NumbersLabel htmlFor="includeNumbers">Include Numbers</NumbersLabel>
    </CheckNumbersContainer>
  );
};

export default IncludeNumbers;