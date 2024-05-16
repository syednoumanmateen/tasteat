import React, { memo } from 'react'
import gallery1 from '../Images/gallery/abtgallery1.jpg'
import gallery2 from '../Images/gallery/abtgallery2.jpg'
import gallery3 from '../Images/gallery/abtgallery3.jpg'
import gallery4 from '../Images/gallery/abtgallery4.jpg'
import gallery5 from '../Images/gallery/abtgallery5.jpg'
import aboutList from '../library/Data/AboutList.jsx'
import Common from '../library/Service/Common.jsx'
import BookATable from '../Reuse/BookATable'
import OurChefsList from '../Reuse/OurChefsList'
import Testimonial from '../Reuse/Testimonial'
import Title from '../Reuse/Title'
import signature from '../Images/home/signature.svg'
import wheelabout from '../Images/wheelabout.svg'
import about from '../Images/about/about.jpg'
import profile from '../Images/about/ceo.jpg'

const About = () => {

  let isDesk = Common.isDesktop() ? true : false
  // const dispatch = useDispatch();
  // const { value } = useSelector((state) => state.home)

  return (
    <>
      <div>
        <Title>About Us</Title>
        <div className={`${isDesk ? 'py-5' : 'py-3'}`}></div>
        <div className="contianer-fluid">
          <div className="row g-0 p-0 align-items-center">
            <div className={`col-12 col-lg-6 ${isDesk ? 'p-5' : 'p-3'}`}>
              <div>
                <div className={`brd-tb mb-3`}>ABOUT US</div>
              </div>
              <div className='fw500 fs28 mb-2'>Quality And  Tradition</div>
              <div className={`py-3 mb-3 ${isDesk ? 'fs25' : 'fs22 mb-4'}`}>The people, food and the prime locations make the perfect place good friends & family to come together and have great time. Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.</div>
              <div className={`mb-3 text-muted`}>JOSEFINE</div>
              <img src={signature} className='img-fluid mb-4' alt="signature" />
              <div className={` ${isDesk ? 'py-5' : 'py-4'}`}>
                <button className='btn btn-theme btn-md fs-3'>See Our Masters</button>
              </div>
            </div>
            <div className={`col-12 col-lg-6 ${isDesk ? 'p-5 mb-5' : 'p-3'}`}>
              <div className={`card border-0 position-relative ${isDesk ? '' : 'shadow'}`} style={{ width: isDesk ? '550px' : '' }}>
                <img className='card-img-top brd-rad-tr-50' style={{ width: isDesk ? '' : '325px', zIndex: isDesk ? '0' : '1' }} src={about} alt="about" />
                <img className={`card-img-top position-absolute wheel-about rotate`} style={{ width: isDesk ? '' : '170px' }} src={wheelabout} alt="wheel" />
                <div className={`card-body ${isDesk ? 'position-absolute  about-card p-5 bg-light border' : 'p-3'}`}>
                  <div className="row g-0 align-items-center mb-3">
                    <div className="col-2">
                      <img src={profile} className='img-fluid brd-rad-50' width={'65px'} alt="ceo profile" />
                    </div>
                    <div className="col-10 ps-3">
                      <div className='fs28 fw600'>Josefine</div>
                      <div className='fs18'>CEO & Founder</div>
                    </div>
                  </div>
                  <div className={`fs20`}>Peoples gave stars for our quality
                    and helthy food.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`bg-about-image ${isDesk ? 'py-5' : 'py-3'}`}>
          <div className='container-fluid  p-0'>
            <div className={`row g-0 p-0`}>
              {aboutList.map((e, ind) => (
                <div className={`col-12 col-lg-3`} key={ind}>
                  <div className={` text-center text-light ${isDesk ? 'p-5' : 'px-2 py-4'} ${(isDesk && ind !== aboutList.length - 1) ? 'brd-r' : ''}`}>
                    <img className='mb-4' src={e.icon} alt={e.label} />
                    <div className='fs30 fw600'>{e.label}</div>
                    <div className={`fs20 mb-3 mx-3`}>{e.description}</div>
                    <div className='text-warning fs18'>See More</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <OurChefsList name={'about'} />
        <Testimonial name={'About'} />
        <div className="container-fluid py-5">
          <div className='text-center'>
            <div className={`brd-tb mb-3`}>GALLERY</div>
          </div>
          <div className='fw500 fs38 mb-1 text-center mb-5'>We Make Fresh Dishes</div>
          <div className="row">
            <div className="col-12 col-lg-3 d-flex flex-column p-0">
              <img className='mb-2 imge' src={gallery1} alt="g1" />
              <img className='mb-2 imge' src={gallery2} alt="g2" />
            </div>
            <div className="col-12 col-lg-6 p-0">
              <img className={`mb-2 imge`} src={gallery3} alt="g3" />
            </div>
            <div className="col-12 col-lg-3 d-flex flex-column p-0">
              <img className='mb-2 imge' src={gallery4} alt="g4" />
              <img className='mb-2 imge' src={gallery5} alt="g5" />
            </div>
          </div>
        </div>
        <BookATable />
      </div>
    </>
  )
}

export default memo(About)
