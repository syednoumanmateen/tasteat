import React, { memo } from 'react'
import chefsList from '../library/Data/Chefs.jsx'
import Common from '../library/Service/Common.jsx'

const OurChefsList = () => {

  let isDesk = Common.isDesktop() ? true : false

  return (
    <>
      <div className={`container-fluid ${isDesk ? 'p-5' : 'p-3'}`}></div>
      <div className="container-fluid">
        <div className='text-center'>
          <div className={`brd-tb mb-3`}>BEST CHEFS</div>
        </div>
        <div className='fw500 fs28 text-center mb-3'>Meet Our Professional Chefs</div>
        <div className="row p-0 g-0">
          {chefsList.map((e, ind) => {
            return (
              <>
                <div key={ind} className="col-12 col-lg-4 p-0">
                  <div className="card border-0 text-center">
                    <div className="card-body px-3">
                      <img className='img-fluid chef-img' width={'100%'} src={e.icon} alt={e.label} />
                      <div className='chef'>
                        <div className="row text-center">
                          <div className="offset-3 col-1"></div>
                          {[1, 2, 3, 4].map((e, ind) => {
                            return (
                              <>
                                <div key={ind} className="col-1 p-3 text-light">{e}</div>
                              </>
                            )
                          })}
                        </div>
                      </div>
                      <div className=" py-3">
                        <div className="fs30 fw600">{e.label}</div>
                        <div className="fs20 fw500">{e.designation}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          })
          }
        </div>
      </div>

    </>
  )
}

export default memo(OurChefsList)
