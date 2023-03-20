import "./Job.css";

import logoAFS from "../../../img/SVG/accenture.svg";
import logoRH from "../../../img/SVG/rh.svg";

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
          <b data-testid="job-AFS">Accenture Federal Services</b>
          <br />
          <b data-testid="job-AFS-SA">
            San Antonio, TX - <i>(Present)</i>
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
          <b data-testid="job-RH-">Robert Half Technology</b>
          <br />
          <b data-testid="job-RH-SA">
            San Antonio, Texas - <i>2017</i>
          </b>
        </div>
        <div className="desktop-justify-text">
          <p className="desktop-work-text role" data-testid="job-RH-heading">
            System Technician - Temp
          </p>
          <ul className="desktop-ul-nobuff">
            <li className="desktop-work-text" data-testid="job-RH-bullet1">
              Configure computer systems with system upgrades
            </li>
            <li className="desktop-work-text" data-testid="job-RH-bullet2">
              Disconnect, package and move workstations to new locations to
              setup for clients.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Job;
