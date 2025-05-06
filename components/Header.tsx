"use client";

import { Dispatch, SetStateAction } from "react";
import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";

export default function Header({ theme, toggleTheme }: { theme: string, toggleTheme: Dispatch<SetStateAction<boolean>> }) {
  const handleToggle = (toggled: boolean) => {
    toggleTheme(toggled);
  };

  return (
    <header className="absolute right-10 top-5 text-xl">
      <Expand
        toggled={theme === "dark"}
        onToggle={handleToggle}
        duration={750}
        forceMotion={false}
        className="text-2xl"
      />
    </header>
  );
}
