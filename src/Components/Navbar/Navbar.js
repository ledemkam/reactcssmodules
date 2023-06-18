import React, { useState } from 'react'
import styles from './Navbar.module.css'
import {AiOutlineMenu,AiOutlineSearch,AiOutlineClose,AiOutlineUser} from 'react-icons/ai'
import Logo from '../../Images/logodri.png'

const Navbar = () => {
    const [navtog,setNavtog] = useState(false)
  return (
    <header className={styles.navbar}>
      <img src={Logo} alt="/"/>
      <nav>
         <ul className={navtog ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
            <li>Learn More</li>
            <li>Log in</li>
            <li>Sign up</li>
            <li><AiOutlineSearch size={25} style={{ marginTop: '6px' }}/></li>
            <li><AiOutlineUser size={25} style={{ marginTop: '6px' }}/></li>
         </ul>
      </nav>
      <div onClick={()=> setNavtog(!navtog)}     className={styles.mobile_btn}>
          {navtog ?  <AiOutlineClose size={25} />  : <AiOutlineMenu size={25} /> }
        
      </div>
    </header>
  )
}

export default Navbar