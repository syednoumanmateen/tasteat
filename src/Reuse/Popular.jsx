import React, { memo } from 'react'
import '../Reuse/Common.css'
import common from '../library/Service/Common.jsx'
import { popular } from '../library/Data/Orders.jsx'

const Popular = () => {
  let isDesk = (common.isDesktop()) ? true : false
  let winherit = (isDesk) ? { width: "1000px" } : {}

  let popularList = popular

  return (
    <>
      <div className={`${isDesk ? "py-5" : "py-3"}`}></div>
      <div className='text-center'>
        <div className={`brd-tb mb-3`}>MENU</div>
      </div>
      <div className='fw500 fs28 text-center mb-2'>Popular Dishes</div>
      <div className={`py-3 mb-3 text-center ${isDesk ? 'fs25' : 'fs22 mb-4'} mx-auto`} style={winherit}>Our chefs create melt-in-your-mouth dishes that'll satiate even the fussiest eaters now
        the dishes are in offers use it based on hunger.</div>
      <div className="contailer-fluid">
        <div className={`row g-0 ${isDesk ? "px-5" : ""}`}>
          {popularList.map((e, ind) => {
            return (
              <>
                <div className="col-12 col-lg-3 mb-3" key={ind}>
                  <div className="card border-0">
                    <div className={`card-body ${isDesk ? '' : ''}`}>
                      <img width={'100%'} src={e.icon} alt={e.icon} />
                      <div className="row g-0 brd-btm fs-2 fw600 py-2">
                        <div className="col-10">{e.label}</div>
                        <div className="col-2 text-end">${e.value}</div>
                      </div>
                      <div className='py-1 fs20'>{e.description}</div>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
      <div className={`text-center ${isDesk ? 'my-5' : 'my-4'}`}>
        <button className='btn btn-theme btn-md fs-3'>See All dishes</button>
      </div>
    </>
  )
}

export default memo(Popular)
