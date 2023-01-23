const UpdateBanner = () => {
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
        ☰ <span style={{ marginLeft: "10px" }}>EDIT BANNER</span>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>BANNER IMAGE</div>
        <div className="input">
          <input type="file" accept="image/*" required />
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>CURRENT IMAGE</div>
        <div className="input">
          <img
            src="https://www.reliancedigital.in/medias/One-Plus-Nord2T-Mobile-Phones-492850715-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTU0NXxpbWFnZS9qcGVnfGltYWdlcy9oNDUvaDBmLzk4NzQ2NDk2NDUwODYuanBnfDJkMzZiZTNmN2JhNjNiYjk3YzE1YzcyYmNlYzk3ZDMzNzU4OWEzNjI3YTkzNTRmMjgxOGE5OTNiYzBhOTJmYzc"
            alt=""
            style={{ height: "50px", width: "50px", borderRadius: "20%" }}
          />
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          BANNER TEXT <span className="spans">*</span>
        </div>
        <div>
          <input type="text" className="input"></input>
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

export default UpdateBanner;
