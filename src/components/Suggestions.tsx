import React from "react";
import { suggestions } from "@/components/suggestionData";
import { Suggestion } from "./Suggestion";

export const Suggestions: React.FC = () => (
  <div className="w-1/4 p-4 border-l border-border">
    <h2 className="text-lg font-bold font-roboto">Suggested for you</h2>
    <ul className="mt-4 space-y-2 font-roboto">
      {suggestions.map((user) => (
        <Suggestion key={user.username} username={user.username} />
      ))}
    </ul>
  </div>
);
