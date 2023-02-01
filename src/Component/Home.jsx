import React, { memo } from 'react'
import menu from '../Images/menu/menu.jpg'
import { offerList, timeList } from '../library/Data/Home.jsx'
import menuList from '../library/Data/Menu.jsx'
import Common from '../library/Service/Common.jsx'
import BookATable from '../Reuse/BookATable'
import '../Reuse/Common.css'
import Offer from '../Reuse/Offer'
import OurMenuList from '../Reuse/OurMenuList'
import Popular from '../Reuse/Popular'
import Testimonial from '../Reuse/Testimonial'

const Home = () => {

  let isDesk = Common.isDesktop() ? true : false

  return (
    <div>
      home
      <div className="container-fluid p-0 bg-cream ">
        <div className="row g-0 p-0">
          {timeList.map((e, ind) => {
            return (<>
              <div key={ind} className={`col-12 col-lg-4 p-0 ${e.anime}`}>
                <div className={`row g-0 aligin-items-center ${isDesk ? 'p-5' : 'p-3'}`}>
                  <div className={`col-12 col-lg-2 p-0`}>
                    <div className="width-chef brd-rad-50 bg-dark">
                      <img className='img-fluid' src={e.icon} alt={e.label} />
                    </div>
                  </div>
                  <div className="col-12 col-lg-10 p-0">
                    <div className="fs30 fw600">{e.label}</div>
                    <div className={`fs20 ${ind === timeList.length - 1 ? 'text-black' : ''}`}>{e.description}</div>
                  </div>
                </div>
              </div>
            </>)
          })}
        </div>
      </div>
      story
      <div className="container-fluid">
        <div className={`row ${isDesk ? 'p-5' : 'p-3'}`}>
          <div className="col-12 col-lg-6 p-0 animate__animated animate__fadeInUp animate__delay_1s animate_duration_1s">
            <div>
              <div className={`brd-tb mb-3`}>MENU</div>
            </div>
            <div className='fw500 fs28 mb-2'>Try Our Special Dishes</div>
            <div className={`py-3 mb-3 ${isDesk ? 'fs25' : 'fs22 mb-4'}`}>Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.</div>
            <img src={menu} className="img-fluid mb-3" alt="menuhome" />
            <div className={` ${isDesk ? 'py-5' : 'py-4'}`}>
              <button className='btn btn-theme btn-md fs-3'>See all dishes</button>
            </div>
          </div>
          <div className={`col-12 col-lg-6 p-0 ${isDesk ? 'scrollbar' : ''}`}>
            {menuList.map((e, ind) => {
              return (
                <OurMenuList key={ind} data={e} />
              )
            })}
          </div>
        </div>
      </div>
      <Testimonial />
      <div className='bg-image-home bg-attachment'></div>
      <Offer />
      <Popular />
      <div className="container-fluid bg-theme">
        <div className={`row align-items-center ${isDesk ? 'p-5' : 'p-3'}`}>
          <div className="col-12 col-lg-5 p-0">
            <div>
              <div className={`brd-tb mb-3`}>WHAT WE OFFER</div>
            </div>
            <div className='fw500 fs28 mb-4'>Our Great Services</div>
            <div className={`py-3 mb-3 ${isDesk ? 'fs25' : 'fs22 mb-4'}`}>The atmosphere set the stage. It’s about more than just a dining room away from your home. food takes the spotlight as guests.</div>
          </div>
          <div className="col-12 col-lg-7 p-0">
            <div className="row align-items-center justify-content-center">
              {offerList.map((e, ind) => {
                return (<>
                  <div key={ind} className="col-12 col-lg-4 p-0 mb-3">
                    <div className="brd-10-sld text-center p-5 m-1">
                      <img className='img-fluid mb-3' src={e.icon} alt="" />
                      <div>{e.label}</div>
                    </div>
                  </div>
                </>)
              })}
            </div>
          </div>
        </div>
      </div>
      <BookATable />
    </div >
  )
}

export default memo(Home)
