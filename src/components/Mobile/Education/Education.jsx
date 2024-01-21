import React, { useState } from 'react'

import './Education.css'
import logoTamusa from '../../../img/SVG/tamusa-01.svg'
import logoSAC from '../../../img/SVG/alamo-sac.svg'

const Education = () => {
  const [page, setPage] = useState()
  
  const active = 'active-tab-color-mobile eduButton-mobile'
  const inactive = 'inactive-tab-color-mobile eduButton-mobile'
  
  const [tamusaActive, setTamusaActive] = useState(inactive)
  const [sacActive, setSacActive] = useState(inactive)
  
  const options = {
    tamusa: "tamusa",
    sac: "sac"
  }
  
  const activeSwitcher = (option) => {
    setTamusaActive(() => option === options.tamusa ? active : inactive)
    setSacActive(() => option === options.sac ? active : inactive)
  }
  
  const tamusa = () => {
    activeSwitcher(options.tamusa)
    setPage(
      <div className="mobile-edu-card">
        <div className="mobile-edu-logos">
          <img 
            src={logoTamusa} 
            alt="Texas A&M University - San Antonio logo" 
            width="200px" 
            height="200px"
          />
        </div>
        <div className="mobile-edu-title">
          <b>Texas A&#38;M University-San Antonio</b>
          <br />
          <b> San Antonio, Texas</b>
        </div>
        
        <div className="mobile-edu-text-group">
          <p className="mobile-edu-text">BAAS Information Technology - ERP</p>
          <p className="mobile-edu-text">Summa Cum Laude 2015</p>
        </div>
      </div>
    )
  }
  
  const sac = () => {
    activeSwitcher(options.sac)
    setPage(
      <div className="mobile-edu-card">
        <div className="mobile-edu-logos">
          <div className="mobile-edu-px180">
            <img 
              src={logoSAC} 
              alt="San Antonio College" 
              width="180px" 
              height="180px"
            />
          </div>
        </div>
        <div className="mobile-edu-title">
          <b>San Antonio College</b>
          <br />
          <b>San Antonio, Texas</b>
        </div>
        
        <div className="mobile-edu-text-group">
          <p className="mobile-edu-text">Associate Digital Design: Web Design</p>
          <p className="mobile-edu-text">Phi Theta Kappa Honors Society 2013</p>
        </div>
      </div>
    )
  }
  
  return (
    <div className="mobile-edu-body">
      <div className="eduInnerContent-mobile-edu">
        <div className="eduInnerContentButtons-mobile">
          <div className="eduButtons-rows-mobile">
            <div className={tamusaActive} onClick={tamusa}>TAMU-SA</div>
            <div className={sacActive} onClick={sac}>SAC</div>
          </div>
          {page}
        </div>
      </div>
    </div>
  )
}

export default Education