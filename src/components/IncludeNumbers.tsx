import React from "react";

type IncludeNumbersProps = {
  includeNumbers: boolean;
  setIncludeNumbers: (include: boolean) => void;
};

export default function IncludeNumbers({
  includeNumbers,
  setIncludeNumbers,
}: IncludeNumbersProps) {
  function handleIncludeNumbersChange() {
    setIncludeNumbers(!includeNumbers);
  }
  return (
    <div>
      <input
        type="checkbox"
        id="includeNumbers"
        checked={includeNumbers}
        onChange={handleIncludeNumbersChange}
      />
      <label htmlFor="includeNumbers">Include Numbers</label>
    </div>
  );
}
