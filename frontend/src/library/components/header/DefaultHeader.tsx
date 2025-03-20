"use client";

import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Sun, Moon } from "lucide-react";

export const DefaultHeader = (props: any) => {
  const { user } = useUser();

  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.style.setProperty("--background", "#0a0a0a");
      root.style.setProperty("--foreground", "#ededed");
    } else {
      root.style.setProperty("--background", "#ffffff");
      root.style.setProperty("--foreground", "#171717");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-teal-700 dark:bg-sky-950 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="black-white font-bold text-xl hover:text-white"
        >
          <Image
            src="/logo/main-logo.svg"
            alt="Project List Logo"
            width={100}
            height={100}
          />
        </Link>

        <div className="flex items-center space-x-4">
          {/* Do NOT use 'Link' from 'next/link' - it cannot logout auth0 properly */}
          {user && (
            <a
              href="/api/auth/logout"
              className="text-black bg-amber-600 hover:bg-amber-400 dark:text-white px-3 py-1 rounded"
            >
              Logout
            </a>
          )}

          <button
            onClick={toggleTheme}
            className="text-white bg-gray-700 hover:bg-amber-400 dark:bg-amber-500 dark:text-black px-3
              py-1 rounded flex items-center"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
