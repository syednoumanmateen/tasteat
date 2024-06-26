import React, { memo } from 'react'
import '../Reuse/Common.css'
import common from '../library/Service/Common.jsx'
import { frequent } from '../library/Data/Orders.jsx'

const Frequent = () => {
  let isDesk = (common.isDesktop()) ? true : false

  let frequentList = frequent

  return (
    <>
      <div className={`${isDesk ? "py-5" : "py-3"}`}></div>
      <div className='text-center'>
        <div className={`brd-tb mb-3`}>MOSTLY LOVED</div>
      </div>
      <div className='fw500 fs28 text-center mb-5'>Frequently Orders</div>
      <div className="container-fluid">
        <div className={`row ${isDesk ? "px-5" : "g-0"}`}>
          {frequentList.map((e, ind) => (
            <div className="col-12 col-lg-4" key={ind}>
              <div className="card m-2">
                <div className={`card-body p-0 ${isDesk ? '' : ''}`}>
                  <img className='zoom' width={'100%'} key={ind} src={e.icon} alt={ind} />
                  <div className='p-2'>
                    <div className="brd-dot-btm fs-2 fw600 p-2">{e.label}</div>
                    <div className='p-2 fs20'><span className='text-muted me-2'>${e.prev_value}</span><span>${e.value}</span></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`text-center ${isDesk ? 'py-5' : 'py-4'}`}>
        <button className='btn btn-theme btn-md fs-3'>Order Now</button>
      </div>
    </>
  )
}

export default memo(Frequent)
