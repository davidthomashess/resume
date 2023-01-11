import './Job.css'

import logoAFS from '../../../img/SVG/accenture.svg'
import logoRH from '../../../img/SVG/rh.svg'

const Job = () => {
  return (
    <div className="desktop-work-body">
      <div className="desktop-work-card">
        <div className="desktop-logos">
          <img 
            src={logoAFS} 
            alt="Accenture Federal Services logo" 
            width="160px" 
            height="160px"
          />
        </div>
        <div className="desktop-work-title">
          <b>Accenture Federal Services</b>
          <br />
          <b>San Antonio, TX - 2017</b>
        </div>
        <div className="desktop-justify-text">
          <p className="desktop-work-text role">Automation Test Scripter <b>(Present)</b></p>
          <ul className="desktop-ul-nobuff">
            <li className="desktop-work-text">Write Cypress automation test scripts to speed up QA.</li>
            <li className="desktop-work-text">Run test scripts to assert deployments.</li>
            <li className="desktop-work-text">Write minor fixes to application in React.</li>
          </ul>
        </div>
      </div>
      <div className="desktop-work-card">
        <div className="desktop-logos">
            <img 
              src={logoRH} 
              alt="Robert Half logo" 
              width="160px" 
              height="160px"
            />
        </div>
        <div className="desktop-work-title">
          <b>Robert Half Technology</b>
          <br />
          <b>San Antonio, Texas - 2017</b>
        </div>
        <div className="desktop-justify-text">
          <p className="desktop-work-text role">System Technician - Temp</p>
          <ul className="desktop-ul-nobuff">
          <li className="desktop-work-text">Configure computer systems with system upgrades</li>
          <li className="desktop-work-text">Disconnect, package and move workstations to new locations to setup for clients.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Job