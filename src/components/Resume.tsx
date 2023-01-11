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
import content from './Resume.json'

import {
  SizeSkill,
  SizePort,
  SizeEdu,
  SizeJob,

  SelectedSkill,
  SelectedPort,
  SelectedEdu,
  SelectedJob,

  ToggleSkill,
  TogglePort,
  ToggleEdu,
  ToggleJob
} from '../../types/resume'

const { headers } = content
const { toggles } = content
const { tablet, mobile } = content.window

const Resume = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [sizeSkill, setSizeSkill] = useState<SizeSkill>()
  const [sizePort, setSizePort] = useState<SizePort>()
  const [sizeEdu, setSizeEdu] = useState<SizeEdu>()
  const [sizeJob, setSizeJob] = useState<SizeJob>()
  
  const handleResize = () => 
    setWindowWidth(window.innerWidth)
    
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    
    if(windowWidth >= tablet) {
      //
      setSizeSkill(<Skills />)
      setSizePort(<Portfolio />)
      setSizeEdu(<Education />)
      setSizeJob(<Job />)
    }
    if(windowWidth < tablet) {
      setSizeSkill(<TabletSkills />)
      setSizePort(<TabletPortfolio />)
      setSizeEdu(<TabletEducation />)
      setSizeJob(<TabletJob />)
    }
    if(windowWidth < mobile) {
      setSizeSkill(<MobileSkills />)
      setSizePort(<MobilePortfolio />)
      setSizeEdu(<MobileEducation />)
      setSizeJob(<MobileJob />)
    }
      
      return () => 
        window.removeEventListener('resize', handleResize)
  },[windowWidth])
  
  const [selectedSkill, setSelectedSkill] = useState<SelectedSkill>(null)
  const [selectedPort, setSelectedPort] = useState<SelectedPort>(null)
  const [selectedEdu, setSelectedEdu] = useState<SelectedEdu>(null)
  const [selectedJob, setSelectedJob] = useState<SelectedJob>(null)
  
  const toggleSkill: ToggleSkill = (checkSkill) =>
    selectedSkill===checkSkill 
    ? setSelectedSkill(null)
    : setSelectedSkill(checkSkill)
  
  const togglePort: TogglePort = (checkPort) =>
    selectedPort===checkPort
    ? setSelectedPort(null)
    : setSelectedPort(checkPort)
  
  const toggleEdu: ToggleEdu = (checkEdu) => 
    selectedEdu===checkEdu
    ? setSelectedEdu(null)
    : setSelectedEdu(checkEdu)
  
  const toggleJob: ToggleJob = (checkJob) => 
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
              <div className="title" onClick={() => toggleSkill(toggles.skill)}>
                <div className="titlePadding">
                  <h2>{headers.skill}</h2>
                </div>
                <span>{selectedSkill === "skill" ? "-" : "+"}</span>
              </div>
              <div className={selectedSkill === "skill" ? "content showSkill" : "content"}>
                {sizeSkill}
              </div>
            </div>
            
            <div className="itemEdu">
              <div className="title" onClick={() => toggleEdu(toggles.edu)}>
                <div className="titlePadding">
                  <h2>{headers.edu}</h2>
                </div>
                <span>{selectedEdu === "edu" ? "-" : "+"}</span>
              </div>
              <div className={selectedEdu === "edu" ? "content showEdu" : "content"}>
                {sizeEdu}
              </div>
            </div>
            
            <div className="itemPort">
              <div className="title" onClick={() => togglePort(toggles.app)}>
                <div className="titlePadding">
                  <h2>{headers.app}</h2>
                </div>
                <span>{selectedPort === "port" ? "-" : "+"}</span>
              </div>
              <div className={selectedPort === "port" ? "content showPort" : "content"}>
                {sizePort}
              </div>
            </div>
            
            <div className="itemJob">
              <div className="title" onClick={() => toggleJob(toggles.exp)}>
                <div className="titlePadding">
                  <h2>{headers.exp}</h2>
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