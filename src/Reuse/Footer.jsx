import React, { memo } from 'react'
import logo from '../Images/logo.svg'
import Common from '../library/Service/Common.jsx'

const Footer = () => {

  let isDesk = Common.isDesktop() ? true : false

  return (
    <>
      <div className="container-fluid p-0">
        <div className='brd-btm'>
          <div className="container-fluid">
            <div className={`row g-0 py-3 ${isDesk ? 'px-4' : ''}`}>
              <div className={`col-12 col-lg-3 ${isDesk ? '' : 'text-center'}`}><a href="instagram" className='px-3 py-3 fs-4 fw-500 decoration-none'>#The TastEat</a></div>
              <div className={`col-12 col-lg-6 text-center ${isDesk ? '' : 'my-3'}`}>
                <img src={logo} className="img-fluid" alt="THE TASTEAT" />
              </div>
              <div className={`col-12 col-lg-3 text-light ${isDesk ? 'text-end' : 'text-center'}`}>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className={`row g-0 align-items-center py-3 ${isDesk ? 'px-4' : 'py-4'}`}>
              <div className={`col-12 col-lg-3 ${isDesk ? '' : 'text-center'}`}>
                <div className={`brd-tb mb-4`}>CONTACT</div>
                <div className='fs20 mb-2'>5 Rue Dalou, 75015 Paris</div>
                <div className='text-orange fs18'>+123 456 789</div>
                <div className='text-orange fs18'>josefin@mail.com</div>
              </div>
              <div className={`col-12 col-lg-6 text-center ${isDesk ? '' : 'my-3'}`}>
                <div className={`text-center mb-3 fs24 ${isDesk ? '' : 'my-3'} winherit`}>Join our mailing list for updates,
                  Get news & offers events.</div>
                <div className="container-fluid">
                  <div className="input-group mb-3 px-1 row g-0">
                    <input type="text" className="form-control bg-transparent py-3 col-12" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <input className={`input-group-text btn btn-orange fs24 col-12 ${isDesk ? "col-lg-3" : "py-3"}`} placeholder="Subscribe" id="basic-addon2" />
                  </div>
                </div>
              </div>
              <div className={`col-12 col-lg-3 text-light ${isDesk ? 'text-end' : 'text-center'}`}>
                <div className={`brd-tb mb-4`}>WORKING HOURS</div>
                <div className='fs18'>
                  <div className={`d-inline-block mb-2 ${isDesk ? 'text-end' : 'text-center'}`}>
                    <div className='text-warning d-inline-block'>Mon – Fri:</div>
                    <div className='d-inline-block'>7.00am – 6.00pm</div>
                  </div>
                  <div className={`${isDesk ? 'text-end d-inline-block' : 'text-center'}`}>
                    <div className={`d-inline-block ${isDesk ? 'me-2' : ''}`}>
                      <div className='text-warning d-inline-block'>Sat:</div>
                      <div className='d-inline-block'>7.00am – 6.00pm</div>
                    </div>
                    <div className={`${isDesk ? "d-inline-block" : "d-block"}`}>
                      < div className={`text-warning d-inline-block`}>Sun:</div>
                      <div className='d-inline-block'>8.00am – 6.00pm</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-warning text-center fs25'>
          SYED NOUMAN MATEEN
        </div>
      </div>
    </>
  )
}

export default memo(Footer)
