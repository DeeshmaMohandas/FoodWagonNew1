const ToggleButton = ({ selected, setSelected }) => {
  return (
    <div className="flex bg-white p-2 rounded-full w-max mx-auto shadow mb-4">
      {["Delivery", "Pickup"].map((mode) => (
        <button
          key={mode}
          onClick={() => setSelected(mode)}
          className={`px-4 py-1 rounded-full font-medium ${
            selected === mode ? "bg-orange-500 text-white" : "text-gray-700"
          }`}
        >
          {mode}
        </button>
      ))}
    </div>
  );
};

export default ToggleButton;
