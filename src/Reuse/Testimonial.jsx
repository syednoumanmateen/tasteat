import React, { memo } from 'react'
import { SwiperSlide } from 'swiper/react'
import common from '../library/Service/Common.jsx'
import Slides from './Slides.jsx'
import testimonialList from '../library/Data/Testimonial.jsx'
import badge from '../Images/testimonial/badge.svg'

const Testimonial = (props) => {

  let isDesk = (common.isDesktop()) ? true : false
  let winherit = (isDesk) ? { width: "1000px" } : {}

  let testimonialUI = (props.name === 'About') ? <>
    <div className='text-center'>
      <div className={`brd-tb mb-3`}>
        TESTIMONIAL
      </div>
      <div className={`${isDesk ? 'fs-1 mb-2' : 'fs-4 mb-3'}`}>
        Whats Our Clients Say
      </div>
      <Slides loop={true} navigation={true}>
        {(testimonialList || []).map((e, ind) => (
          <SwiperSlide key={ind}>
            <div className={`py-3 ${isDesk ? 'fs25' : 'fs22 mb-4'} mx-auto`} style={winherit}>{e.description}</div>
            <div className={`my-2 ${isDesk ? "p-5" : "p-3"}`}>
              <img className='brd-rad-50 position-relative' src={e.icon} alt={e.label} />
              <span className='brd-badge px3 position-absolute bg-warning position-badg'>
                <img src={badge} alt="badge" />
              </span>

              <div className='fs25'>{e.label}</div>
              <div className='fs20 text-warning'>{e.address}</div>
            </div>
          </SwiperSlide>
        ))}
      </Slides>
    </div>
  </> : <>
    <div>
      <div className={`brd-tb mb-3`}>
        TESTIMONIAL
      </div>
      <div className={`${isDesk ? 'fs-1 mb-2' : 'fs-4 mb-3'}`}>
        Our Clients Say
      </div>
      <div>We love to hear from customers, so please leave a comment or say hello in an email.</div>
      <Slides pagination={true} clickable={true} dynamicBullets={true} slidesPerView={isDesk ? 2.4 : 1} spaceBetween={30}>
        {(testimonialList || []).map((e, ind) => (
          <SwiperSlide key={ind}>
            <div className={`card bg-card my-5 ${isDesk ? "p-5" : "p-3"}`}>
              <div className={`row g-0 brd-btm pb-3 align-items-center`}>
                <div className="col-12 col-lg-3">
                  <img className='brd-rad-50 mb-3 position-relative' src={e.icon} alt={e.label} />
                  <span className='brd-badge px3 position-absolute bg-warning position-badge'>
                    <img src={badge} alt="badge" />
                  </span>
                </div>
                <div className={`col-12 col-lg-9`}>
                  <div className='fs25'>{e.label}</div>
                  <div className='fs18 text-warning'>{e.address}</div>
                </div>
              </div>
              <div className={`pt-3 fs25`}>{e.description}</div>
            </div>
          </SwiperSlide>
        ))}
      </Slides>
    </div>
  </>

  return (
    <>
      <div className={`bg-theme ${isDesk ? 'p-5' : 'p-3'}`}>
        <div>{testimonialUI}</div>
      </div>
    </>
  )
}

export default memo(Testimonial)
