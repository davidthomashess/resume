import "./Job.css";

import logoAFS from "../../../img/SVG/accenture.svg";
import logoMobomo from "../../../img/SVG/mobomo.svg";

const Job = () => {
  return (
    <div className="desktop-work-body">
      <div className="desktop-work-card">
        <div className="desktop-logos">
          <img
            src={logoMobomo}
            alt="Robert Half logo"
            width="160px"
            height="160px"
          />
        </div>
        <div className="desktop-work-title">
          <b data-testid="job-RH-">Mobomo, LLC</b>
          <br />
          <b data-testid="job-RH-SA">
            Gaithersburg, MD - <i>2024</i>
          </b>
        </div>
        <div className="desktop-justify-text">
          <p className="desktop-work-text role" data-testid="job-RH-heading">
            Full Stack Developer
          </p>
          <ul className="desktop-ul-nobuff">
            <li className="desktop-work-text" data-testid="job-RH-bullet1">
              Voice application development for Alexa
            </li>
            <li className="desktop-work-text" data-testid="job-RH-bullet2">
              Combine custom PHP, React and NodeJS applications within AWS
              services.
            </li>
          </ul>
        </div>
      </div>
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
          <b data-testid="job-AFS">Accenture Federal Services</b>
          <br />
          <b data-testid="job-AFS-SA">
            San Antonio, TX - <i>2023</i>
          </b>
        </div>
        <div className="desktop-justify-text">
          <p className="desktop-work-text role" data-testid="job-AFS-heading">
            React Automation Engineer
          </p>
          <ul className="desktop-ul-nobuff">
            <li className="desktop-work-text" data-testid="job-AFS-bullet1">
              Write Cypress automation test scripts to speed up QA.
            </li>
            <li className="desktop-work-text" data-testid="job-AFS-bullet2">
              Run test scripts to assert deployments.
            </li>
            <li className="desktop-work-text" data-testid="job-AFS-bullet3">
              Write minor fixes to application in React.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Job;
