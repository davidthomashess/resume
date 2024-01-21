import "./Education.css";
import logoTamusa from "../../../img/SVG/tamusa-01.svg";
import logoSAC from "../../../img/SVG/alamo-sac.svg";
import React from "react";

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
          <b data-testid="edu-aNm">Texas A&#38;M University-San Antonio</b>
          <br />
          <b data-testid="edu-aNm-SA"> San Antonio, Texas</b>
        </div>

        <div className="desktop-edu-text-group">
          <p className="desktop-edu-text" data-testid="edu-aNm-degree">
            BAAS Information Technology - ERP
          </p>
          <p className="desktop-edu-text" data-testid="edu-aNm-award">
            Summa Cum Laude 2015
          </p>
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
          <b data-testid="edu-SAC">San Antonio College</b>
          <br />
          <b data-testid="edu-SAC-SA">San Antonio, Texas</b>
        </div>

        <div className="desktop-edu-text-group">
          <p className="desktop-edu-text" data-testid="edu-SAC-degree">
            Associate Digital Design: Web Design
          </p>
          <p className="desktop-edu-text" data-testid="edu-SAC-award">
            Phi Theta Kappa Honors Society 2013
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
