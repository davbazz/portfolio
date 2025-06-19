import React from "react";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "a" | "span" | "h1" | "h2" | "h3";
  htmlFor?: string;
}

export function Text({ children, className = "", as, htmlFor }: TextProps) {
  return React.createElement(as || "p", { children, className, htmlFor });
}

export function Header100({ as = "h1", children, className }: TextProps) {
  return (
    <Text as={as} className={`text-2xl font-medium ${className}`}>
      {children}
    </Text>
  );
}

export function Header200({ as = "h2", children, className }: TextProps) {
  return (
    <Text as={as} className={`text-xl font-medium ${className}`}>
      {children}
    </Text>
  );
}

export function Body100({ children, className }: TextProps) {
  return (
    <Text className={`text-base text-zinc-400 ${className}`}>{children}</Text>
  );
}
