import "./Code.css";
import skills from "../../../Contents/skills.json";

const { js, ts, bash, json, php, java } = skills.global.skills.code;

export default function Code() {
  return (
    <div className="container">
      <div className="inner-container">
        <div className="sub-skill">
          <div className="inner-sub-skill-header">
            <h2>{js.sub}</h2>
          </div>
          <div className="inner-sub-skill-content">
            <ul>
              <li>{js.b1}</li>
              <li>{js.b2}</li>
              <li>{js.b3}</li>
              <li>{js.b4}</li>
            </ul>
          </div>
        </div>
        <div className="sub-skill">
          <div className="inner-sub-skill-header">
            <h2>{ts.sub}</h2>
          </div>
          <div className="inner-sub-skill-content">
            <ul>
              <li>{ts.b1}</li>
              <li>{ts.b2}</li>
              <li>{ts.b3}</li>
            </ul>
          </div>
        </div>
        <div className="sub-skill">
          <div className="inner-sub-skill-header">
            <h2>{bash.sub}</h2>
          </div>
          <div className="inner-sub-skill-content">
            <ul>
              <li>{bash.b1}</li>
              <li>{bash.b2}</li>
            </ul>
          </div>
        </div>
        <div className="sub-skill">
          <div className="inner-sub-skill-header">
            <h2>{json.sub}</h2>
          </div>
          <div className="inner-sub-skill-content">
            <ul>
              <li>{json.b1}</li>
              <li>{json.b2}</li>
            </ul>
          </div>
        </div>
        <div className="sub-skill">
          <div className="inner-sub-skill-header">
            <h2>{php.sub}</h2>
          </div>
          <div className="inner-sub-skill-content">
            <ul>
              <li>{php.b1}</li>
              <li>{php.b2}</li>
            </ul>
          </div>
        </div>
        <div className="sub-skill">
          <div className="inner-sub-skill-header">
            <h2>{java.sub}</h2>
          </div>
          <div className="inner-sub-skill-content">
            <ul>
              <li>{java.b1}</li>
              <li>{java.b2}</li>
              <li>{java.b3}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
