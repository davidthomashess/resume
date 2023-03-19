import './Terminal.css'
import skills from '../../../Contents/skills.json'

const {
  linux,
  batch,
  ps
} = skills.global.skills.shell

const Terminal = () => {
  return <div className="container">
  <div className="inner-container">
      <div className="sub-skill-1">
        <div className="inner-sub-skill-1-header">
          <h2>{linux.sub}</h2>
        </div>
        <div className="inner-sub-skill-1-content">
          <ul>
            <li>{linux.b1}</li>
            <li>{linux.b2}</li>
            <li>{linux.b3}</li>
            <li>{linux.b4}</li>
          </ul>
        </div>
      </div>
      <div className="sub-skill-2">
        <div className="inner-sub-skill-2-header">
          <h2>{batch.sub}</h2>
        </div>
        <div className="inner-sub-skill-2-content">
          <ul>
            <li>{batch.b1}</li>
            <li>{batch.b2}</li>
            <li>{batch.b3}</li>
          </ul>
        </div>
      </div>
      <div className="sub-skill-3">
        <div className="inner-sub-skill-3-header">
          <h2>{ps.sub}</h2>
        </div>
        <div className="inner-sub-skill-3-content">
          <ul>
            <li>{ps.b1}</li>
            <li>{ps.b2}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
}

export default Terminal