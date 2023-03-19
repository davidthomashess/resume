import './Code.css'
import skills from '../../../Contents/skills.json'

const {
  js,
  ts,
  bash,
  json
} = skills.global.skills.code

const Code = () => {
  return <div className="container">
    <div className="inner-container">
      <div className="sub-skill-1">
        <div className="inner-sub-skill-1-header">
          <h2>{js.sub}</h2>
        </div>
        <div className="inner-sub-skill-1-content">
          <ul>
            <li>{js.b1}</li>
            <li>{js.b2}</li>
            <li>{js.b3}</li>
            <li>{js.b4}</li>
          </ul>
        </div>
      </div>
      <div className="sub-skill-2">
        <div className="inner-sub-skill-2-header">
          <h2>{ts.sub}</h2>
        </div>
        <div className="inner-sub-skill-2-content">
          <ul>
            <li>{ts.b1}</li>
            <li>{ts.b2}</li>
          </ul>
        </div>
      </div>
      <div className="sub-skill-3">
        <div className="inner-sub-skill-3-header">
          <h2>{bash.sub}</h2>
        </div>
        <div className="inner-sub-skill-3-content">
          <ul>
            <li>{bash.b1}</li>
            <li>{bash.b2}</li>
          </ul>
        </div>
      </div>
      <div className="sub-skill-4">
        <div className="inner-sub-skill-4-header">
          <h2>{json.sub}</h2>
        </div>
        <div className="inner-sub-skill-4-content">
          <ul>
            <li>{json.b1}</li>
            <li>{json.b2}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
}

export default Code