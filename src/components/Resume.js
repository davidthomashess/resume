import React, { useState, useEffect } from 'react'
import './Resume.css'

import Header from './Desktop/Header/Header'
import Footer from './Desktop/Footer/Footer'

import Skills from './Desktop/Skills/Skills'
import Education from './Desktop/Education/Education'
import Portfolio from './Desktop/Portfolio/Portfolio'
import Job from './Desktop/Job/Job'

import TabletSkills from './Tablet/Skills/Skills'
import TabletEducation from './Tablet/Education/Education'
import TabletPortfolio from './Tablet/Portfolio/Portfolio'
import TabletJob from './Tablet/Job/Job'

import MobileSkills from './Mobile/Skills/Skills'
import MobileEducation from './Mobile/Education/Education'
import MobilePortfolio from './Mobile/Portfolio/Portfolio'
import MobileJob from './Mobile/Job/Job'

const Resume = () => {
  // Desktop >= 1355w
  // Tablet >= 720w
  // Mobile < 720w
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [sizeSkill, setSizeSkill] = useState()
  const [sizePort, setSizePort] = useState()
  const [sizeEdu, setSizeEdu] = useState()
  const [sizeJob, setSizeJob] = useState()
  
  const handleResize = () => 
    setWindowWidth(window.innerWidth)
    
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    
    if(windowWidth >= 1355) {
      setSizeSkill(<Skills />)
      setSizePort(<Portfolio />)
      setSizeEdu(<Education />)
      setSizeJob(<Job />)
    }
    if(windowWidth < 1355) {
      setSizeSkill(<TabletSkills />)
      setSizePort(<TabletPortfolio />)
      setSizeEdu(<TabletEducation />)
      setSizeJob(<TabletJob />)
    }
    if(windowWidth < 720) {
      setSizeSkill(<MobileSkills />)
      setSizePort(<MobilePortfolio />)
      setSizeEdu(<MobileEducation />)
      setSizeJob(<MobileJob />)
    }
      
      return () => 
        window.removeEventListener('resize', handleResize)
  },[windowWidth])
  
  const [selectedSkill, setSelectedSkill] = useState(null)
  const [selectedPort, setSelectedPort] = useState(null)
  const [selectedEdu, setSelectedEdu] = useState(null)
  const [selectedJob, setSelectedJob] = useState(null)
  
  const toggleSkill = (checkSkill) =>
    selectedSkill===checkSkill 
    ? setSelectedSkill(null)
    : setSelectedSkill(checkSkill)
  
  const togglePort = (checkPort) =>
    selectedPort===checkPort
    ? setSelectedPort(null)
    : setSelectedPort(checkPort)
  
  const toggleEdu = (checkEdu) => 
    selectedEdu===checkEdu
    ? setSelectedEdu(null)
    : setSelectedEdu(checkEdu)
  
  const toggleJob = (checkJob) => 
    selectedJob===checkJob 
    ? setSelectedJob(null)
    : setSelectedJob(checkJob)
  
  return (
    <div className="wrapper">
      <div className="accordion">
        <div className="topHalf">
          <div className="header">
            <Header />
          </div>
          <div className="contents">
            <div className="itemSkill">
              <div className="title" onClick={() => toggleSkill("skill")}>
                <div className="titlePadding">
                  <h2>SKILLS</h2>
                </div>
                <span>{selectedSkill === "skill" ? "-" : "+"}</span>
              </div>
              <div className={selectedSkill === "skill" ? "content showSkill" : "content"}>
                {sizeSkill}
              </div>
            </div>
            
            <div className="itemEdu">
              <div className="title" onClick={() => toggleEdu("edu")}>
                <div className="titlePadding">
                  <h2>EDUCATION</h2>
                </div>
                <span>{selectedEdu === "edu" ? "-" : "+"}</span>
              </div>
              <div className={selectedEdu === "edu" ? "content showEdu" : "content"}>
                {sizeEdu}
              </div>
            </div>
            
            <div className="itemPort">
              <div className="title" onClick={() => togglePort("port")}>
                <div className="titlePadding">
                  <h2>PORTFOLIO</h2>
                </div>
                <span>{selectedPort === "port" ? "-" : "+"}</span>
              </div>
              <div className={selectedPort === "port" ? "content showPort" : "content"}>
                {sizePort}
              </div>
            </div>
            
            <div className="itemJob">
              <div className="title" onClick={() => toggleJob("job")}>
                <div className="titlePadding">
                  <h2>EXPERIENCE</h2>
                </div>
                <span>{selectedJob === "job" ? "-" : "+"}</span>
              </div>
              <div className={selectedJob === "job" ? "content showJob" : "content"}>
                {sizeJob}
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Resume