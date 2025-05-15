import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already set a preference
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialDarkMode = storedTheme ?
    storedTheme === "dark" :
    prefersDark;

    setIsDarkMode(initialDarkMode);
    updateTheme(initialDarkMode);
  }, []);

  const updateTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    updateTheme(newDarkMode);

    toast({
      title: `${newDarkMode ? "Dark" : "Light"} Mode Activated`,
      description: `Theme switched to ${newDarkMode ? "dark" : "light"} mode.`
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}>

      {isDarkMode ?
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" data-id="lsba362hn" data-path="src/components/theme/ThemeToggle.tsx">
          <circle cx="12" cy="12" r="4" data-id="wyub2vmeu" data-path="src/components/theme/ThemeToggle.tsx" />
          <path d="M12 2v2" data-id="ip1r06scz" data-path="src/components/theme/ThemeToggle.tsx" />
          <path d="M12 20v2" data-id="yy9g5l4jb" data-path="src/components/theme/ThemeToggle.tsx" />
          <path d="m4.93 4.93 1.41 1.41" data-id="y3clrhhpz" data-path="src/components/theme/ThemeToggle.tsx" />
          <path d="m17.66 17.66 1.41 1.41" data-id="t3g2mvkhh" data-path="src/components/theme/ThemeToggle.tsx" />
          <path d="M2 12h2" data-id="x0gbrhrlm" data-path="src/components/theme/ThemeToggle.tsx" />
          <path d="M20 12h2" data-id="sfslp1fdb" data-path="src/components/theme/ThemeToggle.tsx" />
          <path d="m6.34 17.66-1.41 1.41" data-id="n1jb9c8zd" data-path="src/components/theme/ThemeToggle.tsx" />
          <path d="m19.07 4.93-1.41 1.41" data-id="y5xi58vgs" data-path="src/components/theme/ThemeToggle.tsx" />
        </svg> :

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" data-id="8ytfyihf8" data-path="src/components/theme/ThemeToggle.tsx">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" data-id="pafgp70fz" data-path="src/components/theme/ThemeToggle.tsx" />
        </svg>
      }
    </Button>);

};

export default ThemeToggle;