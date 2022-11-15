import React, { useState } from 'react'

import './Skills.css'

import Code from './Code/Code'
import Admin from './Admin/Admin'
import Agile from './Agile/Agile'
import Databases from './Databases/Databases'
import Git from './Git/Git'
import Terminal from './Terminal/Terminal'
import Testing from './Testing/Testing'
import Web from './Web/Web'


const Skills = () => {
  const [page, setPage] = useState()
  
  const active = 'active-tab-color-mobile skillButton-mobile'
  const inactive = 'inactive-tab-color-mobile skillButton-mobile'
  
  const [codeActive, setCodeActive] = useState(inactive)
  const [terminalActive, setTerminalActive] = useState(inactive)
  const [webActive, setWebActive] = useState(inactive)
  const [testingActive, setTestingActive] = useState(inactive)
  const [adminActive, setAdminActive] = useState(inactive)
  const [agileActive, setAgileActive] = useState(inactive)
  const [gitActive, setGitActive] = useState(inactive)
  const [databaseActive, setDatabaseActive] = useState(inactive)
  
  const options = {
    code: "code",
    terminal: "terminal",
    web: "web",
    testing: "testing",
    admin: "admin",
    agile: "agile",
    git: "git",
    database: "database"
  }
  
  const activeSwitcher = (option) => {
    setCodeActive(() => option === options.code ? active : inactive)
    setTerminalActive(() => option === options.terminal ? active : inactive)
    setWebActive(() => option === options.web ? active : inactive)
    setTestingActive(() => option === options.testing ? active : inactive)
    setAdminActive(() => option === options.admin ? active : inactive)
    setAgileActive(() => option === options.agile ? active : inactive)
    setGitActive(() => option === options.git ? active : inactive)
    setDatabaseActive(() => option === options.database ? active : inactive)
  }
  
  const code = () => {
    activeSwitcher(options.code)
    setPage(
      <Code />
    )
  }
  
  const terminal = () => {
    activeSwitcher(options.terminal)
    setPage(
      <Terminal />
    )
  }
  
  const web = () => {
    activeSwitcher(options.web)
    setPage(
      <Web />
    )
  }
  
  const testing = () => {
    activeSwitcher(options.testing)
    setPage(
      <Testing />
    )
  }
  
  const admin = () => {
    activeSwitcher(options.admin)
    setPage(
      <Admin />
    )
  }
  
  const agile = () => {
    activeSwitcher(options.agile)
    setPage(
      <Agile />
    )  
  }
  
  const git = () => {
    activeSwitcher(options.git)
    setPage(
      <Git />
    )
  }
  
  const databases = () => {
    activeSwitcher(options.database)
    setPage(
      <Databases />
    )
  }
  
  return (
    <div className="innerContent-mobile">
      <div className="innerContentButtons-mobile">
        <div className="skillButtons-rows-mobile">
          <div className={codeActive} onClick={code}>Code</div>
          <div className={terminalActive} onClick={terminal}>Terminal</div>
        </div>
        <div className="skillButtons-rows-mobile">
          <div className={webActive} onClick={web}>Web</div>
          <div className={testingActive} onClick={testing}>Testing</div>
        </div>
        <div className="skillButtons-rows-mobile">
          <div className={adminActive} onClick={admin}>Admin</div>
          <div className={agileActive} onClick={agile}>Agile</div>
        </div>
        <div className="skillButtons-rows-mobile">
          <div className={gitActive} onClick={git}>Git</div>
          <div className={databaseActive} onClick={databases}>Database</div>
        </div>
          {page}
        </div>
    </div>
  )
}

export default Skills