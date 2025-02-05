// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-400 text-sm text-center py-4">
      <div className="flex flex-wrap justify-center space-x-3">
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Help</a>
        <a href="#" className="hover:underline">Press</a>
        <a href="#" className="hover:underline">API</a>
        <a href="#" className="hover:underline">Jobs</a>
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Terms</a>
        <a href="#" className="hover:underline">Locations</a>
        <a href="#" className="hover:underline">Language</a>
        <a href="#" className="hover:underline">Meta Verified</a>
      </div>
      <p className="mt-2">&copy; 2025 INSTAGRAM FROM META</p>
    </footer>
  );
};

export default Footer;