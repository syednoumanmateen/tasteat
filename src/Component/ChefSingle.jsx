import React, { memo, useState } from 'react'
import chefsIcon from '../Images/chefs/thumburl.jpg'
import videoContext from '../library/Service/Context.jsx'
import Title from '../Reuse/Title'
import Video from '../Reuse/Video'
import common from '../library/Service/Common.jsx'
import single from '../Images/chefs/chef2.jpg'
import chef1 from '../Images/about/chef1.svg'
import chef2 from '../Images/about/chef2.svg'
import chef3 from '../Images/about/chef3.png'
import chef4 from '../Images/about/chef4.svg'

const ChefSingle = () => {

  let [modalShow, setModalShow] = useState(false)
  let isDesk = (common.isDesktop()) ? true : false
  let chefContent = [{
    "icon": chef1,
    "label": "Experience",
    "text": "10 Years of Expereince"
  }, {
    "icon": chef2,
    "label": "Mail",
    "text": "tasteat@mail.com"
  }, {
    "icon": chef3,
    "label": "Contact Us",
    "text": "800-234-567"
  }, {
    "icon": chef4,
    "label": "Locate Us",
    "text": "Riverside 25, San Francisco, California."
  }]

  return (
    <>
      <Title>Chef Single</Title>
      <div className={`container-fluid ${isDesk ? 'p-5' : 'p-3'}`}>
        <div className="row g-0 align-items-center">
          <div className="col-12 col-lg-6 p-0">
            <img className='img-fluid' src={single} alt="singlechef" />
          </div>
          <div className={`col-12 col-lg-6 ${isDesk ? 'p-5' : 'p-3'}`}>
            <div className={`fs32 fw600`}>Evan Matthew</div>
            <div className='fw500 fs25 mb-2 text-warning'>Master Chef</div>
            <div className='fs20 mb-5'>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divid with additional clickthroughs from Nanotechnology immersion along the information highway will close the loop on focusing solely the bottom line.</div>
            <div className="row row align-items-center">
              {chefContent.map((e, ind) => (
                <div key={ind} className="col-12 col-lg-6 p-0 mb-5">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-lg-3">
                      <div className={`bg-dark brd-rad-50 width-chef mb-3 ${isDesk ? '' : ''} `}>
                        <img className={`${isDesk ? '' : ''} `} width={'35px'} src={e.icon} alt="" />
                      </div>
                    </div>
                    <div className="col-12 col-lg-9">
                      <div className='fs25 fw500'>
                        {e.label}
                      </div>
                      <div className={`fs18 ${(ind === 1 || ind === 2) ? 'text-warning' : ''}`}>
                        {e.text}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className='my-5 bg-theme' style={{ height: isDesk ? '500px' : '250px' }}>
        <div className={`${isDesk ? 'py-5' : "py-3"}`}>
          <div className='text-center'>
            <div className={`brd-tb mb-3`}>PROMO</div>
          </div>
          <div className='fw500 fs28 text-center mb-2'>My Promo Video</div>
        </div>
      </div>
      <div className={`${isDesk ? 'p-5' : 'p-3'}`} style={{ marginTop: isDesk ? '-435px' : '-195px' }}>
        <videoContext.Provider value={{ name: 'chefs', icon: chefsIcon, modalShow, setModalShow, fullscreen: true }}>
          <Video />
        </videoContext.Provider>
      </div>
    </ >
  )
}

export default memo(ChefSingle)
