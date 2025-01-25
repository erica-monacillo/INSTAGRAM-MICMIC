
const Navbar = () => {
    return (
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
        <div className="flex justify-between items-center max-w-6xl mx-auto py-4 px-6">
          <div className="text-2xl font-bold text-blue-600">Instagram</div>
          <div className="flex space-x-4">
            <button className="text-gray-600">Home</button>
            <button className="text-gray-600">Explore</button>
            <button className="text-gray-600">Profile</button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  