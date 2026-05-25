import React from 'react'
import Logo from '../assets/img/logo.png'
import '../assets/sass/Footer.scss'

const Footer = () => {
  return (
    <div>
      <div className='footer_wrap'>
        <img src={Logo} alt="FILA" className='footer_logo' />
        <div className='footer_middle'>
          <div className='footer_left'>
            <div className='footer_nav'>
              <div className='nav_item'>매장안내</div>
              <span className='bar'>|</span>
              <div className='nav_item'>공지사항</div>
              <span className='bar'>|</span>
              <div className='nav_item'>FILA MEMBERSHIP</div>
              <span className='bar'>|</span>
              <div className='nav_item'>단체 판매</div>
              <span className='bar'>|</span>
              <div className='nav_item'>대리점 개설문의</div>
              <span className='bar'>|</span>
              <div className='nav_item'>FILA 입찰 참여 안내</div>
            </div>
            <div className='footer_info'>
              <div className='info_row'>
                서울특별시 성북구 보문로 35 필라코리아(주)&nbsp;&nbsp;대표이사 : 김지헌
              </div>
              <div className='info_row'>
                사업자등록번호 : 716-81-01573&nbsp;&nbsp;<span className='link'>사업자정보확인</span>&nbsp;&nbsp;통신판매업신고 : 제 2020-서울강동-0160 호&nbsp;&nbsp;개인정보 관리책임자 : 이희우
              </div>
              <div className='info_row'>
                본 사이트의 상품이미지 저작권은 필라코리아(주)에 있으며, 내용의 무단복제를 금합니다.
              </div>
              <div className='info_row'>
                콘텐츠산업진흥법에 의한 콘텐츠보호안내 <span className='link'>자세히 보기</span>
              </div>
            </div>
          </div>
          <div className='footer_right'>
            <button className='cs_btn'>CS CENTER</button>
            <div className='cs_phone'>1577-3472</div>
            <div className='cs_email'>filaonline@fila.com</div>
            <div className='cs_hours'>평일 월 - 금 : 09시 - 18시 (공휴일 제외)</div>
          </div>
        </div>
        <div className='footer_bottom'>
          <div className='bottom_left'>
            <div className='bottom_item'>통합회원 이용약관</div>
            <span className='bar'>|</span>
            <div className='bottom_item'>개인정보 처리방침</div>
            <span className='bar'>|</span>
            <div className='bottom_item'>제보센터</div>
          </div>
          <div className='bottom_right'>
            <div className='country'>※ KOREA</div>
            <div className='family_site'>FAMILY SITE ▲</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
