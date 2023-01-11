import Logo from '../images/logo-circle.svg'

import './Header.css'

const Header = () => {
  return (
    <div id="logo" >
      <img
          src={Logo}
          alt="triangle with all three sides equal"
          width="300"
      />
    </div>
  )
}

export default Header