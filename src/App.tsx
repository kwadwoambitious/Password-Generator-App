import React, { useState } from "react";
import IncludeUppercase from "./components/IncludeUppercase";
import IncludeLowercase from "./components/IncludeLowercase";
import IncludeNumbers from "./components/IncludeNumbers";
import IncludeSymbols from "./components/IncludeSymbols";
import { generatePassword } from "./utils/generatePassword";
import PasswordLength from "./components/PasswordLength";

export default function App() {
  const [password, setPassword] = useState<string | null>(null);

  const [passwordLength, setPasswordLength] = useState<number>(4);

  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);

  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);

  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);

  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);

  function handleGeneratePassword() {
    const newPassword = generatePassword({
      length: passwordLength,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols,
    });
    setPassword(newPassword);
  }

  return (
    <div>
      {password}
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
      <button onClick={handleGeneratePassword}>GENERATE</button>
    </div>
  );
}
