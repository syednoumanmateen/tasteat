import React, { memo } from 'react'
import '../Reuse/Common.css'
import common from '../library/Service/Common.jsx'
import img1 from '../Images/home/badgeimg1.png'
import img2 from '../Images/home/badgeimg2.png'
import icon1 from '../Images/home/badge1.svg'
import icon2 from '../Images/home/badge2.svg'
import imgbg1 from '../Images/home/badgebg1.jpg'
import imgbg2 from '../Images/home/badgebg2.jpg'

const Offer = () => {
  let isDesk = (common.isDesktop()) ? true : false

  let offerList = [{
    "label": "Chicken Burger",
    "description": "Chicken burger with the tasty toppings and leaves.",
    "icon": img1,
    "badgeIcon": icon1,
    "badgeValue": "10",
    "badgeBg": imgbg1
  },
  {
    "label": "Chicken Pizza",
    "description": "Pizza with multiple flavor and the toping are mixed.",
    "icon": img2,
    "badgeIcon": icon2,
    "badgeValue": "9",
    "badgeBg": imgbg2
  }]

  let winherit = (isDesk) ? { width: "1000px" } : {}

  return (
    <>
      <div className={`${isDesk ? "py-5" : "py-3"}`}></div>
      <div className='text-center'>
        <div className={`brd-tb mb-3`}>OFFERS</div>
      </div>
      <div className='fw500 fs28 text-center mb-1'>Our Offer Dishes</div>
      <div className={`py-3 mb-3 text-center ${isDesk ? 'fs25' : 'fs22 mb-4'} mx-auto`} style={winherit}>Our chefs create melt-in-your-mouth dishes that'll satiate even the fussiest eaters now
        the dishes are in offers use it based on hunger.</div>
      <div className={`${isDesk ? "px-5" : ""}`}>
        <div className="container-fluid">
          <div className={`row ${isDesk ? '' : 'p-0 g-0'}`}>
            {offerList.map((e, ind) => {
              let bgImg = (ind === 0) ? { backgroundImage: "url(" + e.badgeBg + ")" } : { backgroundImage: "url(" + e.badgeBg + ")" }
              let badgebg = (ind === 0) ? { backgroundImage: "url(" + e.badgeIcon + ")" } : { backgroundImage: "url(" + e.badgeIcon + ")" }
              return (
                <>
                  <div className="col-12 col-lg-6  mb-5" key={ind}>
                    <div style={bgImg} className={`container-fluid badge-height`}>
                      <div className={`row ${isDesk ? 'p-5' : 'p-0 g-0'}`}>
                        <div className={`col-12 col-lg-7 p-0 ${isDesk ? 'mb-2' : 'mb-5'}`}>
                          <div className={`${isDesk ? '' : 'text-center pt-5'}`}>
                            <div style={badgebg} className={`badge-tilt text-center maxcont pt-3 ${isDesk ? '' : ' mx-auto'} ${ind === 1 ? 'text-light' : ''}`}>
                              <div className="fs22 fw800">ONLY</div>
                              <div className='fs40 fw800'>${e.badgeValue}</div>
                            </div>
                            <div>
                              <div className='brd-tb-nor fs20 mb-3'>
                                50% OFFER GOING</div>
                            </div>
                            <div className='fs34 fw700'>
                              {e.label}
                            </div>
                            <div className='fs18'>{e.description}</div>
                          </div>
                        </div>
                        <div className={`col-12 col-lg-5 p-0 ${isDesk ? "position-relative" : "text-center"}`}>
                          <img className={`${isDesk ? "position-absolute offer-img" : "text-center"}`} src={e.icon} width={350} alt={e.label} />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Offer)
