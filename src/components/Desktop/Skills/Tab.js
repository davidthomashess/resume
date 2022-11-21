import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }
  
  onClick = () => {
    const { label, onClick } = this.props
    onClick(label);
  }
  
  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      }
    } = this
    
    let className = 'listSkillsItem'
    let inactiveTabColor = 'inactive-tab-color'
    
    if(activeTab === label) {
      className += ' tab-list-active'
      inactiveTabColor = 'none'
    }
    
    return (
      <li
        className={className}
        onClick={onClick}
      >
        <div className={inactiveTabColor}>
          <button className='skillButton'>{label}</button>
        </div>
      </li>
    )
  }
}

export default Tab