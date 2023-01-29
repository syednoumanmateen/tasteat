import React from 'react'
import '../Reuse/Common.css'
import Common from '../library/Service/Common.jsx'
import { memo } from 'react'

const BookATable = () => {

  let isDesk = Common.isDesktop() ? true : false

  return (
    <>
      <div className='bg-image'>
        <div className="container">
          <div className={`form ${isDesk ? 'my100 p100' : 'my-4 p-4'}`}>
            <form className='text-light text-center'>
              <div className='brd-tb mb-3'>RESERVATION</div>
              <div className={`mb-4 ${isDesk ? 'fs50' : 'fs25'}`}>Book Your Table</div>
              <div className="container-fluid">
                <div className="input-group px-1 row g-0">
                  <div className={`col-12 col-lg-6 mb-5 ${isDesk ? 'pe-4' : ''}`}>
                    <input type="text" className="form-control bg-transparent py-3" placeholder="Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  </div>
                  <div className={`col-12 col-lg-6 mb-5`}>
                    <input type="text" className="form-control bg-transparent py-3" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  </div>
                  <div className={`col-12 col-lg-4 mb-5 ${isDesk ? 'pe-4' : ''}`}>
                    <input type="text" className="form-control bg-transparent py-3 " placeholder="Persons" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  </div>
                  <div className={`col-12 col-lg-4 mb-5 ${isDesk ? 'pe-4' : ''}`}>
                    <input type="text" className="form-control bg-transparent py-3 " placeholder="Timing" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  </div>
                  <div className={`col-12 col-lg-4 mb-5`}>
                    <input type="text" className="form-control bg-transparent py-3 " placeholder="Date" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  </div>
                </div>
              </div>
              <button className={`btn btn-orange btn-md py-2 px-4 fs24 ${isDesk ? "" : "py-3"}`} id="basic-addon2">Book A Table</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(BookATable)
