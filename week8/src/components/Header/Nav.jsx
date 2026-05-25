import React from 'react'
import Logo from '../../assets/img/logo.png'
import Map from '../../assets/img/map.png'
import Search from '../../assets/img/search.png'
import Login from '../../assets/img/login.png'
import Shopping from '../../assets/img/shopping.png'
import '../../assets/sass/Nav.scss'

const Nav = () => {
  return (
    <nav className='Nav_wrap'>
      <img src={Logo} alt="FILA" className='Logo' />
      <ul className='nav_menu'>
        <li>WOMEN</li>
        <li>MEN</li>
        <li>KIDS</li>
        <li className='divider'>|</li>
        <li>TENNIS</li>
        <li>BRAND</li>
      </ul>
      <div className='nav_icons'>
        <img src={Map} alt="매장찾기" />
        <img src={Search} alt="검색" />
        <img src={Login} alt="로그인" />
        <img src={Shopping} alt="장바구니" />
      </div>
    </nav>
  )
}

export default Nav
