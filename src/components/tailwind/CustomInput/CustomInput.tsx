const CustomInput = () => {
  return (
    <div>
      <label
        htmlFor="price"
        className="block text-sm font-medium text-gray-900 text-left"
      >
        Label
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          className="
          block w-full rounded-md border-0 py-5 p-7 pr-20 
          text-gray-900 ring-1 ring-inset ring-gray-300 
          placeholder:text-gray-400 
          focus:ring-2 focus:ring-inset focus:ring-yellow-700 
          font-bold text-5xl"
          placeholder="label"
        />
      </div>
    </div>
  );
};

export default CustomInput;
