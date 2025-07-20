const Header = () => {
    return (
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-xl font-bold">StayEase</div>
        <div className="flex gap-4">
          <button className="text-sm text-gray-600">Rooms</button>
          <button className="text-sm text-gray-600">Mansions</button>
          <button className="text-sm text-gray-600">Countryside</button>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="border px-2 py-1 rounded"
          />
          <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded">Sign In</button>
          <button className="text-sm border px-3 py-1 rounded">Sign Up</button>
        </div>
      </header>
    );
  };
  
  export default Header;
  