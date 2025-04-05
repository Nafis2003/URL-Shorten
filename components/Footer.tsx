// Footer.tsx
"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-4 text-center">
      <Link
        href="https://github.com/Nafis2003"
        target="_blank"
        rel="noopener noreferrer"
        className="text-center text-sm text-muted-foreground hover:text-foreground"
      >
        <span>
          Created by <span className="underline text-blue-500">Nafis Sadiq</span>
        </span>
      </Link>
    </footer>
  );
}
