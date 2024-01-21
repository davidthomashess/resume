import './Education.css'
import logoTamusa from '../../../img/SVG/tamusa-01.svg'
import logoSAC from '../../../img/SVG/alamo-sac.svg'

const Education = () => {
  return (
    <div className="tablet-edu-body">
      <div className="tablet-edu-card">
        <div className="tablet-edu-logos">
          <img 
            src={logoTamusa} 
            alt="Texas A&M University - San Antonio logo" 
            width="200px" 
            height="200px"
          />
        </div>
        <div className="tablet-edu-title">
          <b>Texas A&#38;M University-San Antonio</b>
          <br />
          <b> San Antonio, Texas</b>
        </div>
        
        <div className="tablet-edu-text-group">
          <p className="tablet-edu-text">BAAS Information Technology - ERP</p>
          <p className="tablet-edu-text">Summa Cum Laude 2015</p>
        </div>
      </div>
      <div className="tablet-edu-card">
        <div className="tablet-edu-logos">
          <div className="tablet-edu-px180">
            <img 
              src={logoSAC} 
              alt="San Antonio College" 
              width="180px" 
              height="180px"
            />
          </div>
        </div>
        <div className="tablet-edu-title">
          <b>San Antonio College</b>
          <br />
          <b>San Antonio, Texas</b>
        </div>
        
        <div className="tablet-edu-text-group">
          <p className="tablet-edu-text">Associate Digital Design: Web Design</p>
          <p className="tablet-edu-text">Phi Theta Kappa Honors Society 2013</p>
        </div>
      </div>
    </div>
  )
}

export default Education