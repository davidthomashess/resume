import './Job.css'

import logoAFS from '../../../img/SVG/accenture.svg'
import logoRH from '../../../img/SVG/rh.svg'

const Job = () => {
  return (
    <div className="tablet-work-body">
      <div className="tablet-work-card">
        <div className="tablet-logos">
          <img 
            src={logoAFS} 
            alt="Accenture Federal Services logo" 
            width="160px" 
            height="160px"
          />
        </div>
        <div className="tablet-work-title">
          <b>Accenture Federal Services</b>
          <br />
          <b>San Antonio, TX - <b>(Present)</b></b>
        </div>
        <div className="tablet-justify-text">
          <p className="tablet-work-text role">React Automation Engineer</p>
          <ul className="tablet-ul-nobuff">
            <li className="tablet-work-text">Write Cypress automation test scripts to speed up QA.</li>
            <li className="tablet-work-text">Run test scripts to assert deployments.</li>
            <li className="tablet-work-text">Write minor fixes to application in React.</li>
          </ul>
        </div>
      </div>
      <div className="tablet-work-card">
        <div className="tablet-logos">
            <img 
              src={logoRH} 
              alt="Robert Half logo" 
              width="160px" 
              height="160px"
            />
        </div>
        <div className="tablet-work-title">
          <b>Robert Half Technology</b>
          <br />
          <b>San Antonio, Texas - 2017</b>
        </div>
        <div className="tablet-justify-text">
          <p className="tablet-work-text role">System Technician - Temp</p>
          <ul className="tablet-ul-nobuff">
          <li className="tablet-work-text">Configure computer systems with system upgrades</li>
          <li className="tablet-work-text">Disconnect, package and move workstations to new locations to setup for clients.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Job
