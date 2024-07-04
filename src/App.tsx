import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import IncludeUppercase from './components/IncludeUppercase';
import IncludeLowercase from './components/IncludeLowercase';
import IncludeNumbers from './components/IncludeNumbers';
import IncludeSymbols from './components/IncludeSymbols';
import PasswordStrengthIndicator from './components/PasswordStrengthIndicator';
import { generatePassword } from './utils/generatePassword';
import PasswordLength from './components/PasswordLength';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import iconCopy from './assets/images/icon-copy.svg';
import iconArrow from './assets/images/icon-arrow-right.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define the props for the Password component
interface PasswordProps {
  hasPassword: boolean;
}

// Styled component for the first container
const Container1 = styled.div`
  padding: 24px;
  background-color: #24232c;
  margin: 0 auto;
  margin-bottom: 20px;
  max-width: 540px;
  width: 540px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 75vw;
  }
  @media (max-width: 375px) {
    padding: 17px;
    margin-bottom: 16px;
    width: 80vw;
    max-width: 540px;
  }
`;

// Styled component for the second container
const Container2 = styled.div`
  padding: 24px;
  background-color: #24232c;
  margin: 0 auto;
  width: 540px;

  @media (max-width: 768px) {
    width: 75vw;
    max-width: 540px;
  }
  @media (max-width: 375px) {
    padding: 17px;
    width: 80vw;
    max-width: 540px;
  }
`;

// Styled component for the title
const Title = styled.h4`
  text-align: center;
  color: #817d92;
  font-size: 24px;
  margin: 0 0 31px 0;

  @media (max-width: 375px) {
    font-size: 16px;
    margin: 0 0 16px 0;
  }
`;

// Styled component for displaying the password
const Password = styled.div<PasswordProps>`
  color: ${(props) => (props.hasPassword ? "#E6E5EA" : "#817D92")};
  font-size: 32px;
  word-break: break-all;

  @media (max-width: 375px) {
    font-size: 24px;
  }
`;

// Styled component for the copy area
const CopyArea = styled.div`
  display: flex;
  align-items: center;
`;

// Styled component for the copied text
const Copiedtext = styled.p`
  margin: 0;
  margin-right: 16px;
  font-size: 18px;
  color: #a4ffaf;
`;

// Styled component for the copy icon
const IconCopy = styled.img`
  object-fit: cover;
  cursor: pointer;
  transition: fill 0.3s ease;

  &:hover {
    filter: brightness(0) invert(1);
  }

  @media (max-width: 375px) {
    width: 18px;
  }
`;

// Styled component for the generate button
const GenerateButton = styled.button`
  font-size: 18px;
  padding: 21px;
  width: 100%;
  background-color: #a4ffaf;
  cursor: pointer;
  transition: background-color 0.3s ease;
  outline: none;
  border: 2px solid #a4ffaf;
  font-family: 'JetBrainsMono', sans-serif;

  &:hover {
    background-color: transparent;
    color: #a4ffaf;

    & > img {
      filter: invert(84%) sepia(40%) saturate(377%) hue-rotate(67deg)
        brightness(103%) contrast(101%);
    }
  }

  @media (max-width: 375px) {
    font-size: 16px;
    padding: 18px;
  }
`;

// Styled component for the generate button arrow icon
const GenerateButtonArrow = styled.img`
  width: 12px;
  margin-left: 24px;
  transition: filter 0.3s ease;

  @media (max-width: 375px) {
    margin-left: 16px;
  }
`;

// Main App component
export default function App() {
  // State for the generated password
  const [password, setPassword] = useState<string | null>(null);

  // State for the password length
  const [passwordLength, setPasswordLength] = useState<number>(0);

  // State for including uppercase characters
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(false);

  // State for including lowercase characters
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(false);

  // State for including numbers
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);

  // State for including symbols
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);

  // State for indicating if the password was copied to clipboard
  const [passwordCopiedToClipboard, setPasswordCopiedToClipboard] =
    useState(false);

  // Function to handle password generation
  function handleGeneratePassword() {
    // Validate password length and inclusion options
    if (
      passwordLength < 4 ||
      !(
        includeUppercase ||
        includeLowercase ||
        includeNumbers ||
        includeSymbols
      )
    ) {
      setPassword(null);
      toast.error("Password: minimum 4 characters and 1 checkbox.");
      return;
    }

    // Generate a new password
    const newPassword = generatePassword({
      length: passwordLength,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols,
    });
    setPassword(newPassword);
  }

  // Function to handle copying password to clipboard
  function handleCopyToClipboard() {
    if (password) {
      setPasswordCopiedToClipboard(true);

      // Reset the copied state after 1 second
      setTimeout(() => {
        setPasswordCopiedToClipboard(false);
      }, 1000);
    } else {
      toast.error("There is no password to copy!");
    }
  }

  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Title>Password Generator</Title>
      <Container1>
        <Password hasPassword={password !== null}>
          {password ? password : "P4$5W0rD!"}
        </Password>
        <CopyArea>
          {passwordCopiedToClipboard && <Copiedtext>COPIED</Copiedtext>}
          <CopyToClipboard text={password || ''} onCopy={handleCopyToClipboard}>
            <IconCopy
              src={iconCopy}
              alt="icon Copy"
            />
          </CopyToClipboard>
        </CopyArea>
      </Container1>
      <Container2>
        <PasswordLength
          passwordLength={passwordLength}
          setPasswordLength={setPasswordLength}
        />
        <IncludeUppercase
          includeUppercase={includeUppercase}
          setIncludeUppercase={setIncludeUppercase}
        />
        <IncludeLowercase
          includeLowercase={includeLowercase}
          setIncludeLowercase={setIncludeLowercase}
        />
        <IncludeNumbers
          includeNumbers={includeNumbers}
          setIncludeNumbers={setIncludeNumbers}
        />
        <IncludeSymbols
          includeSymbols={includeSymbols}
          setIncludeSymbols={setIncludeSymbols}
        />
        <PasswordStrengthIndicator password={password} includeUppercase={includeUppercase} includeLowercase={includeLowercase} includeNumbers={includeNumbers} includeSymbols={includeSymbols} />
        <GenerateButton onClick={handleGeneratePassword}>
          GENERATE
          <GenerateButtonArrow src={iconArrow} alt="icon arrow" />
        </GenerateButton>
      </Container2>
    </>
  );
}