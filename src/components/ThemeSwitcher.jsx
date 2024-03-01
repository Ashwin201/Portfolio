"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { TiWeatherSunny } from "react-icons/ti";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div>
      {theme === "dark" ? (
        <span onClick={() => setTheme("light")}>
          <TiWeatherSunny cursor={"pointer"} size={27} />
        </span>
      ) : (
        <span onClick={() => setTheme("dark")}>
          <BsMoonStarsFill cursor={"pointer"} size={20} />
        </span>
      )}
    </div>
  );
};

export default ThemeSwitcher;
