import React from 'react'
import img1 from '../../assets/img/section3-1.png'
import img2 from '../../assets/img/section3-2.png'
import '../../assets/sass/Section3.scss'

const Section3 = () => {
  return (
    <div>
      <div className='section3_wrap'>
        <div className='section3_title'>기획전</div>
        <div className='card_list'>
          <div className='list'>
            <img src={img1} alt="" className='card_img' />
            <div className='text_wrap'>
              <div className='title'>FILA CUSTOM STUDIO</div>
              <button className='detail_btn'>자세히 보기</button>
            </div>
          </div>
          <div className='list'>
            <img src={img2} alt="" className='card_img' />
            <div className='text_wrap'>
              <div className='title'>Pertex Life</div>
              <button className='detail_btn'>자세히 보기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3
