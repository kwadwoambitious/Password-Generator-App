import React from "react";

type IncludeLowercaseProps = {
  includeLowercase: boolean;
  setIncludeLowercase: (include: boolean) => void;
};

export default function IncludeLowercase({
  includeLowercase,
  setIncludeLowercase,
}: IncludeLowercaseProps) {
  function handleIncludeLowercaseChange() {
    setIncludeLowercase(!includeLowercase);
  }
  return (
    <div>
      <input
        type="checkbox"
        id="includeLowercase"
        checked={includeLowercase}
        onChange={handleIncludeLowercaseChange}
      />
      <label htmlFor="includeLowercase">Include Lowercase Letters</label>
    </div>
  );
}
