import React from "react";

type IncludeSymbolsProps = {
  includeSymbols: boolean;
  setIncludeSymbols: (include: boolean) => void;
};

export default function IncludeSymbols({
  includeSymbols,
  setIncludeSymbols,
}: IncludeSymbolsProps) {
  function handleIncludeSymbolsChange() {
    setIncludeSymbols(!includeSymbols);
  }
  return (
    <div>
      <input
        type="checkbox"
        id="includeSymbols"
        checked={includeSymbols}
        onChange={handleIncludeSymbolsChange}
      />
      <label htmlFor="includeSymbols">Include Symbols</label>
    </div>
  );
}
