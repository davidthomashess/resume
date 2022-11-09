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
  return (
    <div className="innerContent">
      <div className="innerContentButtons">
          <Code />
          <Terminal />
          <Web />
          <Testing />
          <Admin />
          <Agile />
          <Git />
          <Databases />
        </div>
    </div>
  )
}

export default Skills