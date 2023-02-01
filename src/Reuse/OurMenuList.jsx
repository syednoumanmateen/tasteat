import React, { memo } from 'react'
import Common from '../library/Service/Common.jsx'

const OurMenuList = ({ data }) => {
  let isDesk = Common.isDesktop() ? true : false

  return (
    <>
      <div className='fs36 fw600 mb-4'>{data.label}</div>
      {data.subMenu.map((i, k) => {
        return (
          <>
            <div key={k} className={`row g-0 ${isDesk ? 'mb-5' : 'mb-3'} align-items-center ${i.anime}`}>
              <div className={`${isDesk ? 'col-lg-2' : 'col-12'} p-0`}>
                <img className='brd-rad-50' src={i.icon} alt="" />
              </div>
              <div className={`${isDesk ? 'col-lg' : 'col-12'} p-0`}>
                <div className='fs26 fw600'>{i.label}</div>
                <div className='fs18 text-muted'>{i.description}</div>
              </div>
              <div className={`${isDesk ? 'col-lg' : 'col-12'} p-0`}>
                {isDesk ? <div className='brd-dot-btm me-2'></div> : <div></div>}
              </div>
              <div className={`${isDesk ? 'col-lg-1' : 'col-12'} p-0 fs28 fw600`}>$ {i.value}</div>
            </div>
          </>
        )
      })
      }
    </>
  )
}

export default memo(OurMenuList)
