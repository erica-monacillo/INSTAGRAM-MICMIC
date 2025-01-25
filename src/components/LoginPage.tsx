const LoginPage = () => {
    return (
      <div className="flex min-h-screen bg-gray text-white">
        {/* Logo Section (Left side) */}
        <div className="flex items-center justify-start w-1/2 p-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
            alt="Instagram Logo" 
            className="w-40" 
          />
        </div>
  
        {/* Login Form Section (Right side) */}
        <div className="flex flex-col items-center justify-center w-1/2 p-6 bg-gray-800 text-black shadow-md rounded-lg">
          {/* Title */}
          <div className="text-3xl font-playwrite font-bold text-white mb-6">
            Instagram
          </div>
  
          <form className="w-full">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username or Email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Log In
            </button>
          </form>
  
          <div className="text-center mt-4 text-sm">
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default LoginPage;
  