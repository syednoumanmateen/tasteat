import React, { memo } from 'react'
import Common from '../Service/Common.jsx'
import { galleryFeatureList } from '../Data/Gallery.jsx'

const Feature = () => {

  let isDesk = Common.isDesktop() ? true : false

  return (
    <>
      <div className={`container-fluid ${isDesk ? 'p-5' : 'p-3'}`}>
        {galleryFeatureList.map((e, ind) => (
          <div className={`row g-0 align-items-center ${(isDesk) ? '' : 'mb-5'}`} key={ind}>
            <div className={`col-12 col-lg-6 ${(isDesk) ? 'p-5' : 'py-4'} ${(isDesk && ind === 1) ? 'order-1' : ''}`}>
              <div>
                <div className={`brd-tb mb-3`}>FEATURE</div>
              </div>
              <div className='fw500 fs38 mb-1'>{e.label}</div>
              <div className="fs20">{e.description}</div>
              <div className={`${isDesk ? 'my-5' : 'my-4'}`}>
                <button className='btn btn-theme btn-md fs-3'>View Menu</button>
              </div>
            </div>
            <div className={`col-12 col-lg-6 ${(isDesk && ind === 1) ? 'order-0' : ''}`}>
              <img src={e.icon} className="img-fluid" width={'100%'} alt={e.label} />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default memo(Feature)
