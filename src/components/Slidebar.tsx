
const Sidebar = () => {
  return (
    <div className="hidden lg:block w-64 mt-20">
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="font-bold">Suggestions for you</h3>
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="profile"
                className="rounded-full w-10 h-10 mr-2"
              />
              <div>Suggested User</div>
            </div>
            <button className="text-blue-500">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
