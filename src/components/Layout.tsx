import React, { ReactNode } from "react";

interface layoutProps {
    children : ReactNode;
}

export const Layout: React.FC<layoutProps> = ({ children }) => (
    <div className="flex bg-white text-foreground min-h-screen">
        {children}
    </div>
)