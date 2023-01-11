import './Admin.css'
import skills from '../../../Contents/skills.json'

const {
  oc,
  prisma,
  docker,
  yaml
} = skills.global.skills.admin

const Admin = () => {
  return <div className="container-tablet">
  <div className="inner-container-tablet">
      <div className="sub-skill-1-tablet">
        <div className="inner-sub-skill-1-header-tablet">
          <h2>{oc.sub}</h2>
        </div>
        <div className="inner-sub-skill-1-content-tablet">
          <ul>
            <li>{oc.b1}</li>
            <li>{oc.b2}</li>
            <li>{oc.b3}</li>
          </ul>
        </div>
      </div>
      <div className="sub-skill-2-tablet">
        <div className="inner-sub-skill-2-header-tablet">
          <h2>{prisma.sub}</h2>
        </div>
        <div className="inner-sub-skill-2-content-tablet">
          <ul>
            <li>{prisma.b1}</li>
            <li>{prisma.b2}</li>
          </ul>
        </div>
      </div>
      <div className="sub-skill-3-tablet">
        <div className="inner-sub-skill-3-header-tablet">
          <h2>{docker.sub}</h2>
        </div>
        <div className="inner-sub-skill-3-content-tablet">
          <ul>
            <li>{docker.b1}</li>
          </ul>
        </div>
      </div>
      <div className="sub-skill-4-tablet">
        <div className="inner-sub-skill-4-header-tablet">
          <h2>{yaml.sub}</h2>
        </div>
        <div className="inner-sub-skill-4-content-tablet">
          <ul>
            <li>{yaml.b1}</li>
            <li>{yaml.b2}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
}

export default Admin