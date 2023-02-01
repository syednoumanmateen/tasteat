import React, { memo } from 'react'
import Title from '../Reuse/Title'
import { galleryList } from '../library/Data/Gallery.jsx'
import Common from '../library/Service/Common.jsx'
import Feature from '../library/Data/Feature'

const Gallery = () => {

  let isDesk = Common.isDesktop() ? true : false

  return (
    <>
      <Title>Gallery</Title>
      <div className="container-fluid">
        <div className={`row my-5 ${isDesk ? 'px-4' : 'px-2'}`}>
          {galleryList.map((e, ind) => {
            return (
              <>
                <div className="col-auto mb-5 position-img text-center" key={ind}>
                  <img className='img-fluid' src={e.icon} alt={e.label} width={(ind === 0 || ind === galleryList.length - 1) ? '875px' : '417px'} />
                  <div className='d-flex flex-column justify-content-center align-items-center position p-0'>
                    <div className='text-light fw600 fs28'>{e.label}</div>
                    <div className='text-warning fs22'>{e.cuisine}</div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
        <div className={`text-center ${isDesk ? 'my-5' : 'my-4'}`}>
          <button className='btn btn-theme btn-md fs-3'>See All dishes</button>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div className={`bg-image-reserve text-light ${isDesk ? 'p-5' : 'p-3'}`}>
          <div className="py-5">
            <div>
              <div className={`brd-tb mb-3`}>RESERVATION</div>
            </div>
            <div className='fw500 fs38 mb-1'>This Evening Will Be A Great Experience !!!</div>
            <div className="fs20">We take reservations for lunch, dinner. To make a table reservation, please call us in between 10am-6pm, Monday to Friday</div>
            <div className={`${isDesk ? 'my-5' : 'my-4'}`}>
              <button className='btn btn-theme btn-md fs-3'>Book A Table</button>
            </div>
          </div>
        </div>
      </div>
      <Feature />
    </ >
  )
}

export default memo(Gallery)
