import React, { memo } from 'react'
import Title from '../Reuse/Title'
import Common from '../library/Service/Common.jsx'
import img1 from '../Images/book1.jpg'
import img2 from '../Images/book2.jpg'
import logo1 from '../Images/about/book1.svg'
import logo2 from '../Images/about/book2.svg'
import logo3 from '../Images/about/book3.svg'
import logo4 from '../Images/about/book4.svg'
import { useRef } from 'react'

const BookATable = () => {
  let isDesk = Common.isDesktop() ? true : false
  let inputRef = useRef();

  let formInput = ["Name", "Email", "Phone", "Date", "Timing", "Person"]
  let chooseList = [{ "icon": logo1, "label": "Fresh Foods" }, { "icon": logo2, "label": "Fast Delivery" }, { "icon": logo3, "label": "Quality Interior" }, { "icon": logo4, "label": "24/7 Service" }]

  return (
    <>
      <Title>Book A Table</Title>
      <div className={`${isDesk ? 'p-5' : 'p-3'}`}>
        <div className="container-fluid my-5">
          <div className="row g-0">
            <div className={`col-12 col-lg-6 p-0 ${isDesk ? '' : 'order-1'}`}>
              <div className={`${isDesk ? 'my100' : 'my-4 py-4'}`}>
                <form>
                  <div className='brd-tb mb-3'>RESERVATION</div>
                  <div className={`mb-2 ${isDesk ? 'fs50' : 'fs25'}`}>Book Your Table</div>
                  <div className='fs20 mb-4'>Take a look at Restaurantate fabulous menu. And then use our online booking system to book a table instantly!</div>
                  <div className="container-fluid">
                    <div className="input-group px-1 row g-0">
                      {formInput.map((e, ind) => {
                        return (
                          <>
                            <div key={ind} className={`col-12 col-lg-6 mb-5 ${isDesk ? 'pe-3' : ''}`}>
                              <input ref={inputRef} type="text" className="form-control  py-3" onClick={() => formInput.map(d => ind=== d ? inputRef.current.style.border = '1px solid rgb(233, 182, 95)':inputRef.current.style='none')} placeholder={e} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            </div>
                          </>
                        )
                      })}
                    </div>
                  </div>
                  <button className={`btn btn-theme btn-md py-2 px-4 fs24 ${isDesk ? "" : "py-3"}`} id="basic-addon2">Book A Table</button>
                </form>
              </div>
            </div>
            <div className={`col-12 col-lg-6 p-0 ${isDesk ? 'text-end' : 'order-0'}`}>
              <img src={img1} className={`img-fluid`} alt="book" />
            </div>
          </div>
        </div>

        <div className="container-fluid mb-5">
          <div className="row g-0">
            <div className="col-12 col-lg-6 p-0">
              <img src={img2} className={`img-fluid`} alt="book" />
            </div>
            <div className="col-12 col-lg-6 p-0">
              <div className={`${isDesk ? 'my100' : 'my-4 py-4'}`}>
                <div className='brd-tb mb-3'>WHY CHOOSE US</div>
                <div className={`mb-2 ${isDesk ? 'fs50' : 'fs25'}`}>Why We Are The Best?</div>
                <div className='fs20 mb-4'>The people, food and the prime locations make Restaurantate the perfect place good friends & family to come together and have great time. Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.</div>
                <div className="container-fluid">
                  <div className="row g-0 mb-5">
                    {chooseList.map((e, ind) => {
                      return (<>
                        <div className={`col-12 col-lg-6 mb-3 ${isDesk ? 'pe-3' : ''}`}>
                          <div className="brd-tag">
                            <div className="row g-0 p-3">
                              <div className="col-1">
                                <img src={e.icon} alt={e.label} />
                              </div>
                              <div className="col-11 ps-3 fs24">{e.label}</div>
                            </div>
                          </div>
                        </div>
                      </>)
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(BookATable)
