import React, { useState, useRef } from "react";

export const Input = () => {
  const [name, setName] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

  console.log("ref", ref?.current?.value);

  return (
    <input ref={ref} value={name} onChange={(e) => setName(e.target.value)} />
  );
};
