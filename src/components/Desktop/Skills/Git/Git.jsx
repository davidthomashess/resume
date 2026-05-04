import './Git.css'
import skills from '../../../Contents/skills.json'

const {
  git,
  bitbucket,
  github
} = skills.global.skills.git

const Git = () => {
  return <div className="container">
  <div className="inner-container">
      <div className="sub-skill-1">
        <div className="inner-sub-skill-1-header">
          <h2>{git.sub}</h2>
        </div>
        <div className="inner-sub-skill-1-content">
          <ul>
            <li>{git.b1}</li>
            <li>{git.b2}</li>
            <li>{git.b3}</li>
          </ul>
        </div>
      </div>
      <div className="sub-skill-2">
        <div className="inner-sub-skill-2-header">
          <h2>{bitbucket.sub}</h2>
        </div>
        <div className="inner-sub-skill-2-content">
          <ul>
            <li>{bitbucket.b1}</li>
            <li>{bitbucket.b2}</li>
            <li>{bitbucket.b3}</li>
            <li>{bitbucket.b4}</li>
          </ul>
        </div>
      </div>
      <div className="sub-skill-3">
        <div className="inner-sub-skill-3-header">
          <h2>{github.sub}</h2>
        </div>
        <div className="inner-sub-skill-3-content">
          <ul>
            <li>{github.b1}</li>
            <li>{github.b2}</li>
            <li>{github.b3}</li>
            <li>{github.b4}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
}

export default Git