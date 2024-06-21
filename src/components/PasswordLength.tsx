import React, { ChangeEvent } from "react";

type PasswordLengthProps = {
  passwordLength: number;
  setPasswordLength: (length: number) => void;
};

export default function PasswordLength({
  passwordLength,
  setPasswordLength,
}: PasswordLengthProps) {
  function handlePasswordLengthChange(event: ChangeEvent<HTMLInputElement>) {
    setPasswordLength(parseInt(event.target.value, 10));
  }
  return (
    <div>
      <p>Password length: {passwordLength}</p>
      <input
        type="range"
        id="passwordLength"
        min="4"
        max="20"
        value={passwordLength}
        onChange={handlePasswordLengthChange}
      />
    </div>
  );
}
