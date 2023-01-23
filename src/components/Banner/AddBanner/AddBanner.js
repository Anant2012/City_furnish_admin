const AddBanner = () => {
  return (
    <div
      style={{ margin: "3%", borderRadius: "7px", border: "1px solid gray" }}
    >
      <div
        style={{
          fontWeight: "bold",
          backgroundColor: "lightgray",
          border: "1px solid lightgray",
          padding: "10px",
        }}
      >
        ☰ <span style={{ marginLeft: "10px" }}>ADD BANNER</span>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          BANNER IMAGE <span className="spans">*</span>
        </div>
        <div className="input">
          <input type="file" accept="image/*" required />
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          BANNER TEXT <span className="spans">*</span>
        </div>
        <div>
          <input type="text" required className="input"></input>
        </div>
      </div>

      <div className="buton">
        <button
          style={{
            color: "white",
            backgroundColor: "#1876ba",
            border: "none",
            padding: "6px",
          }}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default AddBanner;
