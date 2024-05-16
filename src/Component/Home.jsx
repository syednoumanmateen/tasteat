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
import wheelhome from '../Images/wheelhome.svg'
import home from '../Images/home/home.jpg'
import about from '../Images/home/resturant.jpg'
import signature from '../Images/home/signature.svg'

const Home = () => {

  let isDesk = Common.isDesktop() ? true : false

  return (
    <div>
      <div className="contianer-fluid p-0 bg-theme">
        <div className="row g-0 p-0 align-items-center">
          <div className={`col-12 col-lg-6 ${isDesk ? 'p-5' : 'p-3'}`}>
            <div className={`fw900 fs28 mb-2 ${isDesk ? 'fs100' : 'fs60'}`} style={{ lineHeight: '1' }}>Welcome to Restaurant</div>
            <div className={`py-3 mb-3 ${isDesk ? 'fs25' : 'fs22 mb-4'}`}>The people, food and the prime locations make the perfect place good friends & family to come together and have great time.</div>
            <div className={` ${isDesk ? 'py-5' : 'py-4'}`}>
              <button className='btn btn-theme btn-md fs-3'>View Menu</button>
            </div>
          </div>
          <div className={`col-12 col-lg-6 ${isDesk ? 'p-5 pb-0' : 'p-3 pb-0'}`}>
            <div className={`position-relative`} style={{ zIndex: '0' }}>
              <img className='card-img-top brd-rad-tltr-50 brd-25' src={home} alt="home" />
              <img className={`card-img-top position-absolute wheel-home rotate`} style={{ width: isDesk ? '' : '175px', zIndex: '-1' }} src={wheelhome} alt="wheel" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0 bg-cream ">
        <div className="row g-0 p-0">
          {timeList.map((e, ind) => (
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
          ))}
        </div>
        <div className={`row g-0  align-items-center ${isDesk ? 'p-5' : 'p-3'}`}>
          <div className={`col-12 col-lg-6 p-0 mb-3`}>
            <img src={about} className={`img-fluid`} width={'100%'} alt="about" />
          </div>
          <div className={`col-12 col-lg-6 ${isDesk ? 'ps-5' : ''}`}>
            <div className='fw600 fs28'>The Delicious Story</div>
            <div className={`py-3 mb-3 ${isDesk ? 'fs25' : 'fs22 mb-4'}`}>The people, food and the prime locations make the perfect place  for the friends & family to come together and have great time.</div>
            <div className="row g-0 mb-3">
              {[{ "year": '2018', "text": "Plan for this restaurant to deliver healthy food." }, { "year": '2022', "text": "Happily in the fourth year by fulfill the motto." }].map((e, ind) => (
                <div className="col-12 col-lg-6 p-0 mb-3">
                  <div className='fw600 fs28'>{e.year}</div>
                  <div className={`fs20`}>{e.text}</div>
                </div>
              ))}
            </div>
            <div className={`mb-3 fs22 text-muted`}>JOSEFINE</div>
            <img src={signature} className='img-fluid mb-4' alt="signature" />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className={`row ${isDesk ? 'p-5' : 'p-3'}`}>
          <div className="col-12 col-lg-6 p-0">
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
            {menuList.map((e, ind) => (<OurMenuList key={ind} data={e} />))}
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
              {offerList.map((e, ind) => (
                <div key={ind} className="col-12 col-lg-4 p-0 mb-3">
                  <div className="brd-10-sld text-center p-5 m-1">
                    <img className='img-fluid mb-3' src={e.icon} alt="" />
                    <div>{e.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BookATable />
    </div >
  )
}

export default memo(Home)
