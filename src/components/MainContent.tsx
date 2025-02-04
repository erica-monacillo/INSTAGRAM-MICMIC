import React from "react"; 
import { Stories } from "@/components/Stories";  // Assuming this component is already working
import PostsFeed from "@/components/PostsFeed";  // Correct import

export const MainContent: React.FC = () => (
  <div className="flex-1 p-4">
    <Stories />  {/* Assuming this is working */}
    <PostsFeed />  {/* This will render the posts dynamically */}
  </div>
);
