import React from 'react'
import img1 from '../../assets/img/section2-1.png'
import img2 from '../../assets/img/section2-2.png'
import img3 from '../../assets/img/section2-3.png'
import img4 from '../../assets/img/section2-4.png'
import img5 from '../../assets/img/section2-5.png'
import img6 from '../../assets/img/section2-6.png'
import img7 from '../../assets/img/section2-7.png'
import '../../assets/sass/Section2.scss'

const Section2 = () => {
  return (
    <div>
      <div className='section2_wrap'>
        <div className='section2_title'>지금 많이 찾는 상품</div>
        <div className='section2_tabs'>
          <div className='tab active'># 냉감티셔츠</div>
          <div className='tab'># 에사페</div>
          <div className='tab'># 반팔티셔츠</div>
          <div className='tab'># 페이토&샌들</div>
          <div className='tab'># 인터런</div>
        </div>
        <div className='product_list'>
          <div className='list'>
            <img src={img1} alt="" className='product_img' />
            <div className='text_wrap'>
              <div className='tags'>공용&nbsp;&nbsp;컴포트핏&nbsp;&nbsp;라이프스타일</div>
              <div className='title'>&lt;COLD WAVE&gt; 그래픽 프린트 냉감 티셔츠</div>
              <div className='price'>49,000원 <span className='heart'>♡</span></div>
            </div>
          </div>
          <div className='list'>
            <img src={img2} alt="" className='product_img' />
            <div className='text_wrap'>
              <div className='tags'>공용&nbsp;&nbsp;컴포트핏&nbsp;&nbsp;라이프스타일</div>
              <div className='title'>&lt;COLD WAVE&gt; 그래픽 프린트 냉감 티셔츠</div>
              <div className='price'>49,000원 <span className='heart'>♡</span></div>
            </div>
          </div>
          <div className='list'>
            <img src={img3} alt="" className='product_img' />
            <div className='text_wrap'>
              <div className='tags'>공용&nbsp;&nbsp;컴포트핏&nbsp;&nbsp;라이프스타일</div>
              <div className='title'>&lt;COLD WAVE&gt; 그래픽 프린트 냉감 티셔츠</div>
              <div className='price'>49,000원 <span className='heart'>♡</span></div>
            </div>
          </div>
          <div className='list'>
            <img src={img4} alt="" className='product_img' />
            <div className='text_wrap'>
              <div className='tags'>공용&nbsp;&nbsp;컴포트핏&nbsp;&nbsp;라이프스타일</div>
              <div className='title'>&lt;COLD WAVE&gt; 그래픽 프린트 냉감 티셔츠</div>
              <div className='price'>49,000원 <span className='heart'>♡</span></div>
            </div>
          </div>
          <div className='list'>
            <img src={img5} alt="" className='product_img' />
            <div className='text_wrap'>
              <div className='tags'>공용&nbsp;&nbsp;컴포트핏&nbsp;&nbsp;라이프스타일</div>
              <div className='title'>&lt;COLD WAVE&gt; 그래픽 프린트 냉감 티셔츠</div>
              <div className='price'>49,000원 <span className='heart'>♡</span></div>
            </div>
          </div>
          <div className='list'>
            <img src={img6} alt="" className='product_img' />
            <div className='text_wrap'>
              <div className='tags'>공용&nbsp;&nbsp;컴포트핏&nbsp;&nbsp;라이프스타일</div>
              <div className='title'>&lt;COLD WAVE&gt; 그래픽 프린트 냉감 티셔츠</div>
              <div className='price'>49,000원 <span className='heart'>♡</span></div>
            </div>
          </div>
          <div className='list'>
            <img src={img7} alt="" className='product_img' />
            <div className='text_wrap'>
              <div className='tags'>공용&nbsp;&nbsp;컴포트핏&nbsp;&nbsp;라이프스타일</div>
              <div className='title'>&lt;COLD WAVE&gt; 그래픽 프린트 냉감 티셔츠</div>
              <div className='price'>49,000원 <span className='heart'>♡</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2
