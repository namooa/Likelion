import React from 'react'
import Nav from '../Header/Nav.jsx'
import Main_img from '../../assets/img/main_img.png'
import '../../assets/sass/Section1.scss'

const Section1 = () => {
  return (
    <section className='hero_section'>
      <Nav />
      <img src={Main_img} alt="24SS FILA Pink Blossom" className='hero_img' />
      <div className='hero_content'>
        <h2 className='hero_title'>24 NEW 인터런</h2>
        <button className='hero_btn'>자세히 보기</button>
      </div>
      <div className='carousel_dots'>
        <span className='dot active'></span>
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
      </div>
      <div className='carousel_arrows'>
        <button className='arrow'>&#8249;</button>
        <button className='arrow'>&#8250;</button>
      </div>
    </section>
  )
}

export default Section1
