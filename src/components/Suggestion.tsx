import React from "react";
import { Button } from "@/components/ui/button";

export const Suggestion: React.FC<{ username: string }> = ({ username }) => (
  <li className="flex items-center justify-between">
    <span>{username}</span>
    <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-1 rounded">Follow</Button>
  </li>
);
