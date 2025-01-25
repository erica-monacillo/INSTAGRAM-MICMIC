
import LoginPage from "@/components/LoginPage";
import Navbar from "@/components/Navbar";

const App = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-1 justify-center items-center p-4">
        <LoginPage />
      </main>
    </div>
  );
};

export default App;
