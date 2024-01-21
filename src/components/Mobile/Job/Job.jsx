import React, { useState } from "react";

import "./Job.css";

import logoMobomo from "../../../img/SVG/mobomo.svg";
import logoAFS from "../../../img/SVG/accenture.svg";

const Job = () => {
  const [page, setPage] = useState();

  const active = "active-tab-color-mobile workButton-mobile";
  const inactive = "inactive-tab-color-mobile workButton-mobile";

  const [mobomoActive, setMobomoActive] = useState(inactive);
  const [afsActive, setAfsActive] = useState(inactive);

  const options = {
    mobomo: "mobomo",
    afs: "afs",
  };

  const activeSwitcher = (option) => {
    setMobomoActive(() => (option === options.mobomo ? active : inactive));
    setAfsActive(() => (option === options.afs ? active : inactive));
  };

  const mobomo = () => {
    activeSwitcher(options.mobomo);
    setPage(
      <div className="mobile-work-card">
        <div className="mobile-work-logos">
          <img
            src={logoMobomo}
            alt="Robert Half logo"
            width="160px"
            height="160px"
          />
        </div>
        <div className="workMobile-work-title">
          <b>Mobomo, LLC</b>
          <br />
          <b>
            Gaithersburg, MD - <i>2024</i>
          </b>
        </div>
        <br />
        <p className="mobile-work-text mobile-work-title">
          Full Stack Developer
        </p>
        <div className="workMobile-justify-text">
          <ul className="workMobile-ul-nobuff">
            <li className="mobile-work-text">
              Voice application development for Alexa.
            </li>
            <li className="mobile-work-text">
              Combine custom PHP, React and NodeJS applications within AWS
              services.
            </li>
          </ul>
          <br />
        </div>
      </div>
    );
  };

  const afs = () => {
    activeSwitcher(options.afs);
    setPage(
      <div className="mobile-work-card">
        <div className="mobile-work-logos">
          <img
            src={logoAFS}
            alt="Robert Half logo"
            width="160px"
            height="160px"
          />
        </div>
        <div className="workMobile-work-title">
          <b>Accenture Federal Services</b>
          <br />
          <b>
            San Antonio, Texas - <i>2023</i>
          </b>
        </div>
        <br />
        <p className="mobile-work-text mobile-work-title">
          React Automation Engineer
        </p>
        <div className="workMobile-justify-text">
          <ul className="workMobile-ul-nobuff">
            <li className="mobile-work-text">
              Write Cypress automation test scripts to speed up QA.
            </li>
            <li className="mobile-work-text">
              Run test scripts to assert deployments.
            </li>
            <li className="mobile-work-text">
              Write minor fixes to application in React.
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="mobile-work-body">
      <div className="workInnerContent-mobile">
        <div className="workInnerContentButtons-mobile">
          <div className="workButtons-rows-mobile">
            <div className={mobomoActive} onClick={mobomo}>
              Mobomo
            </div>
            <div className={afsActive} onClick={afs}>
              Accenture
            </div>
          </div>
          {page}
        </div>
      </div>
    </div>
  );
};

export default Job;
