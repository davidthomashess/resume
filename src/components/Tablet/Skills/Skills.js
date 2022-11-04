import './Skills.css'

import Code from './Code/Code'
import Admin from './Admin/Admin'
import Agile from './Agile/Agile'
import Databases from './Databases/Databases'
import Git from './Git/Git'
import Terminal from './Terminal/Terminal'
import Testing from './Testing/Testing'
import Web from './Web/Web'

import Tabs from './Tabs'

const Skills = () => {
  return (
    <div className="innerContent">
      <div className="innerContentButtons">
        <Tabs>
          <div label="code">
            <Code />
          </div>
          <div label="terminal">
            <Terminal />
          </div>
          <div label="web">
            <Web />
          </div>
          <div label="testing">
            <Testing />
          </div>
          <div label="admin">
            <Admin />
          </div>
          <div label="agile">
            <Agile />
          </div>
          <div label="git">
            <Git />
          </div>
          <div label="databases">
            <Databases />
          </div>
        </Tabs>
      </div>
    </div>
  )
  
  /*
    code
    shell
    git

    agile
    testing
    sharepoint

    data
    admin
    api
  */
}

export default Skills