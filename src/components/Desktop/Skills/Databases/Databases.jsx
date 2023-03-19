import './Databases.css'
import skills from '../../../Contents/skills.json'

const {
  sql,
  nosql,
  dba,
  er
} = skills.global.skills.data

const Databases = () => {
  return <div className="container">
  <div className="inner-container">
      <div className="sub-skill-1">
        <div className="inner-sub-skill-1-header">
          <h2>{sql.sub}</h2>
        </div>
        <div className="inner-sub-skill-1-content">
          <ul>
            <li>{sql.b1}</li>
            <li>{sql.b2}</li>
            <li>{sql.b3}</li>
            <li>{sql.b4}</li>
            <li>{sql.b5}</li>
          </ul>
        </div>
      </div>
      <div className="sub-skill-2">
        <div className="inner-sub-skill-2-header">
          <h2>{nosql.sub}</h2>
        </div>
        <div className="inner-sub-skill-2-content">
          <ul>
            <li>{nosql.b1}</li>
            <li>{nosql.b2}</li>
          </ul>
        </div>
      </div>
      <div className="sub-skill-3">
        <div className="inner-sub-skill-3-header">
          <h2>{dba.sub}</h2>
        </div>
        <div className="inner-sub-skill-3-content">
          <ul>
            <li>{dba.b1}</li>
            <li>{dba.b2}</li>
            <li>{dba.b3}</li>
          </ul>
        </div>
      </div>
      <div className="sub-skill-4">
        <div className="inner-sub-skill-4-header">
          <h2>{er.sub}</h2>
        </div>
        <div className="inner-sub-skill-4-content">
          <ul>
            <li>{er.b1}</li>
            <li>{er.b2}</li>
            <li>{er.b3}</li>
            <li>{er.b4}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
}

export default Databases