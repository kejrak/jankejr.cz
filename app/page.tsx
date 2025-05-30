"use client"

import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.add(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.body.classList.add("dark");
    } else {
      setTheme("light");
      document.body.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content */}
      <main className="ml-auto mr-auto flex items-center">
        <div className="py-5 relative">
          <div className="text-left px-5">
            <h1 className="text-6xl font-neuzeit-bold font-bold">Jan Kejř</h1>
            <div className="flex text-md mt-5 leading-8 flex-col">
              <span className="font-biotif-regular font-medium ">Co-Founder at <a className="underline" href="https://advantup.cz" target="_blank">Advantup</a></span>
              <span className="font-biotif-book opacity-50">
                Entrepreneur. Tech Guy. Designer.
              </span>
            </div>
          </div>
        </div>
      </main >

      <Footer />
    </div >
  );
}
