import React from 'react'
import BookATable from '../Reuse/BookATable'
import Testimonial from '../Reuse/Testimonial'
import Title from '../Reuse/Title'
import Common from '../library/Service/Common.jsx'
import gallery1 from '../Images/gallery/abtgallery1.jpg'
import gallery2 from '../Images/gallery/abtgallery2.jpg'
import gallery3 from '../Images/gallery/abtgallery3.jpg'
import gallery4 from '../Images/gallery/abtgallery4.jpg'
import gallery5 from '../Images/gallery/abtgallery5.jpg'
import aboutList from '../library/Data/AboutList.jsx'

const About = () => {

  let isDesk = Common.isDesktop() ? true : false

  return (
    <>
      <div>
        <Title>About Us</Title>
        about
        <div className={`bg-about-image ${isDesk ? 'py-5' : 'py-3'}`}>
          <div className='container-fluid  p-0'>
            <div className={`row g-0 p-0`}>
              {aboutList.map((e, ind) => {
                return (
                  <>
                    <div className={`col-12 col-lg-3`} key={ind}>
                      <div className={` text-center text-light ${isDesk ? 'p-5' : 'px-2 py-4'} ${(isDesk && ind !== aboutList.length - 1) ? 'brd-r' : ''}`}>
                        <img className='mb-4' src={e.icon} alt={e.label} />
                        <div className='fs30 fw600'>{e.label}</div>
                        <div className={`fs20 mb-3 mx-3`}>{e.description}</div>
                        <div className='text-warning fs18'>See More</div>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>
        chefs
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

export default About
