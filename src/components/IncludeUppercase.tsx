import React from "react";

type IncludeUppercaseProps = {
  includeUppercase: boolean;
  setIncludeUppercase: (include: boolean) => void;
};

export default function IncludeUppercase({
  includeUppercase,
  setIncludeUppercase,
}: IncludeUppercaseProps) {
  function handleIncludeUppercaseChange() {
    setIncludeUppercase(!includeUppercase);
  }
  return (
    <div>
      <input
        type="checkbox"
        id="includeUppercase"
        checked={includeUppercase}
        onChange={handleIncludeUppercaseChange}
      />
      <label htmlFor="includeUppercase">Include Uppercase Letters</label>
    </div>
  );
}

