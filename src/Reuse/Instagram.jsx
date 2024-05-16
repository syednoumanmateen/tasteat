import React, { memo } from 'react'
import img1 from '../Images/gallery/instgallery1.jpg'
import img2 from '../Images/gallery/instgallery2.jpg'
import img3 from '../Images/gallery/instgallery3.jpg'
import img4 from '../Images/gallery/instgallery4.jpg'
import img5 from '../Images/gallery/instgallery5.jpg'
import img6 from '../Images/gallery/instgallery6.jpg'
import common from '../library/Service/Common.jsx'

const Instagram = () => {

  let isDesk = (common.isDesktop()) ? true : false

  let instagramList = [img1, img2, img3, img4, img5, img6]

  return (
    <>
      <div className={`${isDesk ? "py-5" : "py-3"}`}></div>
      <div className='text-center'>
        <div className={`brd-tb mb-3`}>STORIES</div>
      </div>
      <div className='fw500 fs28 text-center'>Instagram Gallery</div>
      <div className={`text-center ${isDesk ? "p-5" : "p-3"}`}>
        {instagramList.map((e, ind) => (<img className='me-4 mb-3' key={ind} src={e} width={isDesk ? '250' : '98%'} alt={ind} />))}
      </div>
    </>
  )
}

export default memo(Instagram)
