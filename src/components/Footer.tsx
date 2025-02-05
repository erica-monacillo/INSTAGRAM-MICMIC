import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm text-left py-6 w-full font-sans">
      <div className="container mx-auto flex flex-wrap justify-start items-start gap-3 px-4">
        <a href="#" className="hover:underline">About . </a>
        <a href="#" className="hover:underline">Help . </a>
        <a href="#" className="hover:underline">Press . </a>
        <a href="#" className="hover:underline">API . </a>
        <a href="#" className="hover:underline">Jobs . </a>
        <a href="#" className="hover:underline">Privacy . </a>
        <a href="#" className="hover:underline">Terms . </a>
        <a href="#" className="hover:underline">Locations . </a>
        <a href="#" className="hover:underline">Language . </a>
        <a href="#" className="hover:underline">Meta Verified</a>
      </div>
      <p className="mt-3 px-4">&copy; 2025 INSTAGRAM FROM META</p>
    </footer>
  );
};

export default Footer;
