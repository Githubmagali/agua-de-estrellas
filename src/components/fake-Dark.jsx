"use client"
import { useState, useEffect } from "react";
import {faker } from '@faker-js/faker';


function FakeDark() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(() => {
    if (isFakeDark) {
      document.documentElement.classList.add("fake-dark-mode");
    } else {
      document.documentElement.classList.remove("fake-dark-mode");
    }
  }, [isFakeDark]);

  return (
    <button
      onClick={() => setIsFakeDark((prevIsFakeDark) => !prevIsFakeDark)}
    >
      {isFakeDark ? "☀️" : "🌙"}
    </button>
  );
}

export default FakeDark;


