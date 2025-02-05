import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-black text-foreground">
    <main className="flex-grow flex">{children}</main>
  </div>
);
