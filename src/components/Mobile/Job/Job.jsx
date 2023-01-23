import React, { useState } from 'react'

import './Job.css'

import logoAFS from '../../../img/SVG/accenture.svg'
import logoRH from '../../../img/SVG/rh.svg'

const Job = () => {
  const [page, setPage] = useState()
  
  const active = 'active-tab-color-mobile workButton-mobile'
  const inactive = 'inactive-tab-color-mobile workButton-mobile'
  
  const [afsActive, setAfsActive] = useState(inactive)
  const [rhActive, setRhActive] = useState(inactive)
  
  const options = {
    afs: "afs",
    rh: "rh"
  }
  
  const activeSwitcher = (option) => {
    setAfsActive(() => option === options.afs ? active : inactive)
    setRhActive(() => option === options.rh ? active : inactive)
  }
  
  const afs = () => {
    activeSwitcher(options.afs)
    setPage(
      <div className="workMobile-work-card">
        <div className="workMobile-logos">
          <img 
            src={logoAFS} 
            alt="Accenture Federal Services logo" 
            width="160px" 
            height="160px"
          />
        </div>
        <div className="mobile-work-title">
          <b>Accenture Federal Services</b>
          <br />
          <b>San Antonio, TX - <b>(Present)</b></b>
          <p className="mobile-work-text">React Automation Engineer</p>
          <ul className="workMobile-ul-nobuff">
            <li className="mobile-work-text">Write Cypress automation test scripts to speed up QA.</li>
            <li className="mobile-work-text">Run test scripts to assert deployments.</li>
            <li className="mobile-work-text">Write minor fixes to application in React.</li>
          </ul>
        </div>
        <div>
          
        </div>
      </div>
    )
  }
  
  const rh = () => {
    activeSwitcher(options.rh)
    setPage(
      <div className="mobile-work-card">
        <div className="workMobile-logos">
            <img 
              src={logoRH} 
              alt="Robert Half logo" 
              width="160px" 
              height="160px"
            />
        </div>
        <div className="workMobile-work-title">
          <b>Robert Half Technology</b>
          <br />
          <b>San Antonio, Texas - 2017</b>
        </div>
        <div className="workMobile-justify-text">
          <p className="mobile-work-text">System Technician - Temp</p>
          <ul className="workMobile-ul-nobuff">
          <li className="mobile-work-text">Configure computer systems with system upgrades</li>
          <li className="mobile-work-text">Disconnect, package and move workstations to new locations to setup for clients.</li>
          </ul>
        </div>
      </div>
    )
  }
  
  return (
    <div className="mobile-work-body">
      <div className="workInnerContent-mobile">
        <div className="workInnerContentButtons-mobile">
          <div className="workButtons-rows-mobile">
            <div className={afsActive} onClick={afs}>Accenture</div>
            <div className={rhActive} onClick={rh}>Robert Half</div>
          </div>
          {page}
        </div>
      </div>
    </div>
  )
}

export default Job
