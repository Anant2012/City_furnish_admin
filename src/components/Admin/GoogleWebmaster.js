import { useState, useRef } from "react";
import JoditEditor from "jodit-react";

const GoogleWebmaster = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <div style={{ margin: "2%" }}>
      <div className="form-sub-heading">Search Engine Information</div>
      <div style={{ margin: "2%" }} className="Settings">
        <label>META TITLE </label>
        <input type="text" className="input5" />
      </div>
      <div style={{ margin: "2%" }} className="Settings jodi-editor-container">
        <label>META KEYWORD </label>
        <div className="jodi-editor">
          <JoditEditor
            ref={editor}
            value={content}
            onBlur={(newContent) => setContent(newContent)}
          />
        </div>
      </div>
      <div style={{ margin: "2%" }} className="Settings">
        <label>META DESCRIPTION </label>
        <textarea className="input5" rows={2} cols={40} />
      </div>
      <div className="form-sub-heading" style={{ marginTop: "5%" }}>
        Google Webmaster Info
      </div>
      <div style={{ margin: "2%" }} className="Settings">
        <label>GOOGLE ANALYTICS CODE </label>
        <div className="input-container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "12px",
            }}
          >
            <textarea rows={2} cols={40} />
            <div>
              For Examples:
              <br />
              <code>{`<script type="text/javascript">`}</code>
              <br />
              <code>{`var _gaq = _gaq || [];`}</code>
              <br />
              <code>{`_gaq.push([_setAccount, UA-XXXXX-Y]);`}</code>
              <br />
              <code>{`_gaq.push([_trackPageview]);`}</code>
              <br />
              <code>{`(function() {`}</code>
              <br />
              <code>{`var ga = document.createElement(script); ga.type = text/javascript; ga.async = true;`}</code>
              <br />
              <code>{`ga.src = (https: == document.location.protocol ? https://ssl : http://www) + .google-analytics.com/ga.js;`}</code>
              <br />
              <code>{`ga.src = (https: == document.location.protocol ? https://ssl : http://www) + .google-analytics.com/ga.js;`}</code>
              <br />
              <code>{`  })();`}</code>
              <br />
              <code>{`</script>`}</code>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div style={{ margin: "2%" }} className="Settings">
        <label>GOOGLE ANALYTICS CODE </label>
        <div className="input-container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "12px",
            }}
          >
            <textarea rows={2} cols={40} />
            <div>
              Google Webmaster Verification using Meta tag. <br />
              For more reference:{" "}
              <a
                target="_blank"
                href="https://support.google.com/webmasters/answer/35638#3"
              >
                https://support.google.com/webmasters/answer/35638#3
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleWebmaster;
