import React from "react";
import { Stories } from "@/components/Stories";
import { Post } from "@/components/Post";

export const MainContent: React.FC = () => (
  <div className="flex-1 p-4">
    <Stories />
    <Post />
  </div>
);
