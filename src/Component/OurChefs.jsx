import React, { memo } from 'react'
import Title from '../Reuse/Title'
import Testimonial from '../Reuse/Testimonial.jsx'
import OurChefsList from '../Reuse/OurChefsList'
import best from '../Images/chefs/skill.jpg'
import common from '../library/Service/Common.jsx'

const OurChefs = () => {

  let isDesk = (common.isDesktop()) ? true : false
  let progessBArList = [{ "label": "Experienced", "wid": "85%" }, { "label": "Professionalism", "wid": "78%" }, { "label": "Creative", "wid": "95%" }]

  return (
    <div>
      <Title>Our Chefs</Title>
      <OurChefsList name={'chefs'} />
      <Testimonial name={'About'} />
      <div className={`container-fluid ${isDesk ? 'p-5' : 'p-3'}`}>
        <div className="row align-items-center g-0">
          <div className="col-12 col-lg-6 p-0">
            <div className={`${isDesk ? "p-5" : "p-3"}`}></div>
            <div className=''>
              <div className={`brd-tb mb-3`}>BEST CHEFS</div>
            </div>
            <div className='fw500 fs28 mb-2'>Only Skilled Team</div>
            <div className={`py-3 mb-3 ${isDesk ? 'fs25' : 'fs22 mb-4'}`}>Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.</div>
            {progessBArList.map((e, ind) => (
              <div className='mb-3' key={ind}>
                <div className='fw700 fs28 mb-2'>{e.label}</div>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{ width: `${e.wid}` }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            ))}
            <div className={` ${isDesk ? 'py-5' : 'py-4'}`}>
              <button className='btn btn-theme btn-md fs-3'>See all dishes</button>
            </div>
          </div>
          <div className="col-12 col-lg-6 p">
            <img src={best} className={`img-fluid ${isDesk ? "p-5" : "p-3"}`} alt="bestChef" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(OurChefs)
