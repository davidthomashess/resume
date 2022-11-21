import './Education.css'
import logoTamusa from '../../../img/SVG/tamusa-01.svg'
import logoSAC from '../../../img/SVG/alamo-sac.svg'

const Education = () => {
  return (
    <div className="desktop-edu-body">
      <div className="desktop-edu-card">
        <div className="desktop-edu-logos">
          <img 
            src={logoTamusa} 
            alt="Texas A&M University - San Antonio logo" 
            width="200px" 
            height="200px"
          />
        </div>
        <div className="desktop-edu-title">
          <b>Texas A&#38;M University-San Antonio</b>
          <br />
          <b> San Antonio, Texas</b>
        </div>
        
        <div className="desktop-edu-text-group">
          <p className="desktop-edu-text">BAAS Information Technology - ERP</p>
          <p className="desktop-edu-text">Summa Cum Laude 2015</p>
        </div>
      </div>
      <div className="desktop-edu-card">
        <div className="desktop-edu-logos">
          <div className="desktop-edu-px180">
            <img 
              src={logoSAC} 
              alt="San Antonio College" 
              width="180px" 
              height="180px"
            />
          </div>
        </div>
        <div className="desktop-edu-title">
          <b>San Antonio College</b>
          <br />
          <b>San Antonio, Texas</b>
        </div>
        
        <div className="desktop-edu-text-group">
          <p className="desktop-edu-text">Associate Digital Design: Web Design</p>
          <p className="desktop-edu-text">Phi Theta Kappa Honors Society 2013</p>
        </div>
      </div>
    </div>
  )
}

export default Education