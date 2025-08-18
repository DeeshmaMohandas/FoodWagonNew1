const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 shadow bg-white">
      <h1 className="text-xl font-bold text-orange-600">
        <span className="text-red-600">food</span>wagon
      </h1>
      <div className="text-sm text-gray-600">
        <span>Deliver to: 📍</span> Current Location <b>Deeshma KM, Feroke</b>
      </div>
      <div className="flex gap-4">
        <input className="px-3 py-1 rounded border" placeholder="Search Food" />
        <button className="bg-orange-500 text-white px-4 py-1 rounded">Login</button>
      </div>
    </header>
  );
};

export default Header;