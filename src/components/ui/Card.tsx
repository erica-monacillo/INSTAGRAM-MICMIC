import React from "react";

// Explicitly define `children` as part of the prop type
export const Card: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
  <div className={`card ${className}`}>
    {children}
  </div>
);
