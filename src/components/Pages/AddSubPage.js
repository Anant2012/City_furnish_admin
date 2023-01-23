const AddSubPage = ({ isMainPage = false }) => {
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
        ☰{" "}
        <span style={{ marginLeft: "10px" }}>
          ADD NEW {isMainPage ? "MAIN" : "SUB"} PAGE
        </span>
      </div>
      {!isMainPage && (
        <div className="pass">
          <div style={{ marginBottom: "1%" }}>
            SELECT MAIN PAGE<span className="spans">*</span>
          </div>
          <div className="input">
            <select>
              <option>Friends and Partner</option>
              <option>Rental agreement</option>
            </select>
          </div>
        </div>
      )}
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          PAGE NAME<span className="spans">*</span>
        </div>
        <div className="input">
          <input type="text" required />
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>PAGE TITLE</div>
        <div className="input">
          <input type="text" required />
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>DESCRIPTION</div>
        <div className="input">
          <textarea rows="2" cols="40" />
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          HIDDEN PAGE <span className="spans">*</span>
        </div>
        <div className="input">
          <input type="radio" name="hidden" id="yes" />
          <label for="yes">Yes</label>
          <input type="radio" name="hidden" id="no" />
          <label for="no">No</label>
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

export default AddSubPage;
