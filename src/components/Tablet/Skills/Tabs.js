import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tab from './Tab'

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
  }
  
  constructor(props) {
    super(props)
    
    this.state = {
      activeTabe: this.props.children[0]
    }
  }
  
  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab })
  }
  
  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this
    
    return (
      <div className="tabs">
        <div className="innerContentButtons">
          <ul className="listSkills">
            {children.map((child) => {
              const { label } = child.props
              
              return (
                <Tab
                  activeTab={activeTab}
                  key={label}
                  label={label}
                  onClick={onClickTabItem}
                />
              )
            })}
          </ul>
        </div>
        <div className="tab-content innerContentContent">
          {children.map((child) => {
            if(child.props.label !== activeTab) return undefined;
            return child.props.children
          })}
        </div>
      </div>
    )
  }
}

export default Tabs