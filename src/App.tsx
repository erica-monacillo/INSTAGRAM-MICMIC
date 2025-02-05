import React from "react";
import "@/App.css";  // Import global styles
import "font-awesome/css/font-awesome.min.css";  // Import font awesome icons
import { Layout } from "@/components/Layout";  // Import Layout
import { Sidebar } from "@/components/Sidebar";
import { MainContent } from "@/components/MainContent";
import { Suggestions } from "@/components/Suggestions";



const App: React.FC = () => (
  <Layout>
    <Sidebar />
    <MainContent />
    <Suggestions />
  </Layout>
);

export default App;
