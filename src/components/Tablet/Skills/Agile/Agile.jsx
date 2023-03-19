import './Agile.css'
import skills from '../../../Contents/skills.json'

const {
  jira,
  note
} = skills.global.skills.agile

const Agile = () => {
  return <div className="container">
  <div className="inner-container">
      <div className="sub-skill-1">
        <div className="inner-sub-skill-1-header">
          <h2>{jira.sub}</h2>
        </div>
        <div className="inner-sub-skill-1-content">
          <ul>
            <li>{jira.b1}</li>
            <li>{jira.b2}</li>
            <li>{jira.b3}</li>
            <li>{jira.b4}</li>
          </ul>
        </div>
      </div>
      <div className="sub-skill-2">
        <div className="inner-sub-skill-2-header">
          <h2>{note.sub}</h2>
        </div>
        <div className="inner-sub-skill-2-content">
          <ul>
            <li>{note.b1}</li>
            <li>{note.b2}</li>
            <li>{note.b3}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
}

export default Agile