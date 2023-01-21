import "../Admin/Style.css";

const AddServiceRequest = () => {
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
          ADD SERVICE REQUEST STATUS NOTIFICATION
        </span>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          SERVICE REQUEST STATUS <span className="spans">*</span>
        </div>
        <div>
          <input type="text" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          SERVICE REQUEST SUB STATUS <span className="spans">*</span>
        </div>
        <div>
          <input type="text" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          SENDER EMAIL ADDRESS <span className="spans">*</span>
        </div>
        <div>
          <input type="text" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>SMS DESCRIPTION</div>
        <div>
          <input type="text" className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>EMAIL DESCRIPTION</div>
        <div>
          <input type="text" className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>SMS NOTIFICATION</div>
        <div className="input">
          <input type="radio" name="sms_notification" id="publish" />
          <label for="publish">Publish</label>
          <input type="radio" name="sms_notification" id="unpublish" />
          <label for="unpublish">Unpublish</label>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>EMAIL NOTIFICATION</div>
        <div className="input">
          <input type="radio" name="sms_notification" id="publish" />
          <label for="publish">Publish</label>
          <input type="radio" name="sms_notification" id="unpublish" />
          <label for="unpublish">Unpublish</label>
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

export default AddServiceRequest;
