import styled from 'styled-components';

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
const CheckSymbolsContainer = styled.div`
  margin-bottom: 32px;
  display: flex;
  align-items: center;

  @media (max-width: 375px) {
    margin-bottom: 16px;
  }
`;

// Label for the checkbox
const SymbolsLabel = styled.label`
  font-size: 18px;
  font-family: inherit;

  @media (max-width: 375px) {
    font-size: 16px;
  }
`;

// Props interface for IncludeSymbols component
type IncludeSymbolsProps = {
  includeSymbols: boolean;
  setIncludeSymbols: (include: boolean) => void;
};

// IncludeSymbols component - handles checkbox state and onChange event
const IncludeSymbols = ({ includeSymbols, setIncludeSymbols }: IncludeSymbolsProps) => {
  // Function to handle checkbox change
  const handleIncludeSymbolsChange = () => {
    setIncludeSymbols(!includeSymbols); // Toggle includeSymbols state
  };

  return (
    <CheckSymbolsContainer>
      {/* Styled checkbox with event handlers */}
      <StyledCheckbox
        type="checkbox"
        id="includeSymbols"
        checked={includeSymbols}
        onChange={handleIncludeSymbolsChange}
      />
      {/* Label for the checkbox */}
      <SymbolsLabel htmlFor="includeSymbols">Include Symbols</SymbolsLabel>
    </CheckSymbolsContainer>
  );
};

export default IncludeSymbols;