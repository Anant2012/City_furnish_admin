const AddBanner = () => {
  return (
    <div className="w-[50%] mx-auto bg-white shadow-sm mt-20 rounded-md">
      <div
        className="bg-baby_blue text-white font-lora  py-3 px-3 tracking-wider font-semibold  flex items-center overflow-hidden text-xl"
      >
        ☰ <span style={{ marginLeft: "10px" }}>ADD BANNER</span>
      </div>
      <div className="pass flex space-x-[14%]">
        <div style={{ marginBottom: "1%" }}>
          BANNER IMAGE <span className="spans">*</span>
        </div>
          <input type="file" accept="image/*" required />
      </div>
      <div className="pass flex space-x-[10%]">
        <div style={{ marginBottom: "1%" }}>
          BANNER TEXT <span className="spans">*</span>
        </div>
          <input type="text" required className="input"></input>
      </div>
      <button className="w-[20%] h-10 bg-baby_blue text-white rounded-lg mx-auto mt-6 mb-4 hover:scale-105 duration-300 hover:bg-sky-700 relative left-[40%]" type="submit">
          Submit
        </button>
    </div>
  );
};

export default AddBanner;
