import styled from "styled-components";

// Styled checkbox component using styled-components
const StyledCheckbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 24px;
  cursor: pointer;
  position: relative;
  background-color: transparent;

  @media (max-width: 375px) {
    margin-right: 20px;
  }

  -webkit-appearance: none; 
  -moz-appearance: none; 
  appearance: none; 
  border: 3px solid #e6e5ea; 
  outline: none; 

  &:hover {
    border: 3px solid #afffaf; 
  }

  &:checked {
    background-color: #a4ffaf;
    border-color: #a4ffaf; 
  }

  /* Styling for the checkmark icon when checked */
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

// Container for the checkbox and label
const CheckUppercaseContainer = styled.div`
  margin-bottom: 20px; 
  display: flex; 
  align-items: center; 

  @media (max-width: 375px) {
    margin-bottom: 16px; 
  }
`;

// Label for the checkbox
const UppercaseLabel = styled.label`
  font-size: 18px; 
  font-family: inherit;

  @media (max-width: 375px) {
    font-size: 16px; 
  }
`;

// Props interface for IncludeUppercase component
type IncludeUppercaseProps = {
  includeUppercase: boolean; /* State to determine if uppercase letters are included */
  setIncludeUppercase: (include: boolean) => void; /* Function to toggle includeUppercase state */
};

// IncludeUppercase component - handles checkbox state and onChange event
export default function IncludeUppercase({
  includeUppercase,
  setIncludeUppercase,
}: IncludeUppercaseProps) {
  // Function to handle checkbox change
  function handleIncludeUppercaseChange() {
    setIncludeUppercase(!includeUppercase); // Toggle includeUppercase state
  }

  return (
    <CheckUppercaseContainer>
      {/* Styled checkbox with event handlers */}
      <StyledCheckbox
        type="checkbox"
        id="includeUppercase"
        checked={includeUppercase} // Checked state determined by includeUppercase prop
        onChange={handleIncludeUppercaseChange} // onChange event handler to toggle state
      />
      {/* Label for the checkbox */}
      <UppercaseLabel htmlFor="includeUppercase">
        Include Uppercase Letters
      </UppercaseLabel>
    </CheckUppercaseContainer>
  );
}