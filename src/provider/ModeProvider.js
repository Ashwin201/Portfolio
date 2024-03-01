"use client";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
const ModeProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </>
  );
};

export default ModeProvider;
