import React from 'react'
import img1 from '../../assets/img/section4-1.png'
import img2 from '../../assets/img/section4-2.png'
import img3 from '../../assets/img/section4-3.png'
import img4 from '../../assets/img/section4-4.png'
import img5 from '../../assets/img/section4-5.png'
import img6 from '../../assets/img/section4-6.jpg'
import img7 from '../../assets/img/section4-7.jpg'
import img8 from '../../assets/img/section4-8.jpg'
import img9 from '../../assets/img/section4-9.png'
import img10 from '../../assets/img/section4-10.png'
import '../../assets/sass/Section4.scss'

const Section4 = () => {
  return (
    <div>
      <div className='section4_wrap'>
        <div className='section4_header'>
          <div className='insta_handle'>@fila_korea</div>
        </div>
        <div className='img_grid'>
          <div className='list'>
            <img src={img1} alt="" className='grid_img' />
          </div>
          <div className='list'>
            <img src={img2} alt="" className='grid_img' />
          </div>
          <div className='list'>
            <img src={img3} alt="" className='grid_img' />
          </div>
          <div className='list'>
            <img src={img4} alt="" className='grid_img' />
          </div>
          <div className='list'>
            <img src={img5} alt="" className='grid_img' />
          </div>
          <div className='list'>
            <img src={img6} alt="" className='grid_img' />
          </div>
          <div className='list'>
            <img src={img7} alt="" className='grid_img' />
          </div>
          <div className='list'>
            <img src={img8} alt="" className='grid_img' />
          </div>
          <div className='list'>
            <img src={img9} alt="" className='grid_img' />
          </div>
          <div className='list0'>
            <img src={img10} alt="" className='grid_img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section4
