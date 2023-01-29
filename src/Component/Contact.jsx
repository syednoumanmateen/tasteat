import React from 'react'
import OurBranches from '../Reuse/OurBranches'
import Title from '../Reuse/Title'
import Common from '../library/Service/Common.jsx'
import icon1 from '../Images/contact1.svg'
import icon2 from '../Images/contact2.svg'
import icon3 from '../Images/contact3.svg'

const Contact = () => {

  let isDesk = Common.isDesktop() ? true : false
  let contactList = [
    {
      "icon": icon1,
      "text": "Riverside 25, San Francisco, California"
    },
    {
      "icon": icon2,
      "text": "restaurantate@mail.com"
    },
    {
      "icon": icon3,
      "text": "800-234-567"
    }
  ]

  return (
    <div>
      <Title>Contact Us</Title>
      <div className="container-fluid">
        <div className={`row align-items-center ${isDesk ? "m-5" : "m-3"}`}>
          <div className="col-12 col-lg-5 mb-3 bg-cream">
            <div className="">
              <div className='fw500 fs28 mb-2'>Contact Information</div>
              <div className="fs18 mb-5">We love hearing from customers, visitors and people from the Restaurantate. We really appreciate you taking the time to get in touch. Please fill in the form below.</div>
              {(contactList || []).map((e, ind) => {
                return (
                  <>
                    <div className="row mb-4 align-items-center" key={ind}>
                      <div className="col-1">
                        <div className="brd-rad-50 bg-dark text-center width-icon">
                          <img className='p-0' src={e.icon} alt={e.text} />
                        </div>
                      </div>
                      <div className="col-11 ps-5 fs22 fw500">{e.text}</div>
                    </div>
                  </>)
              })}
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div>
              <div className={`brd-tb mb-2`}>MAIL US</div>
            </div>
            <div className='fw500 fs28 mb-2'>Our Branches</div>
            <form>
              <div className="input-group px-1 row g-0">
                <div className={`col-12 col-lg-6 mb-5 ${isDesk ? 'pe-4' : ''}`}>
                  <input type="text" className="form-control bg-transparent py-3" placeholder="Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                </div>
                <div className={`col-12 col-lg-6 mb-5`}>
                  <input type="text" className="form-control bg-transparent py-3" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                </div>
                <div className={`col-12 col-lg-6 mb-5 ${isDesk ? 'pe-4' : ''}`}>
                  <input type="text" className="form-control bg-transparent py-3 " placeholder="Timing" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                </div>
                <div className={`col-12 col-lg-6 mb-5`}>
                  <input type="text" className="form-control bg-transparent py-3 " placeholder="Date" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                </div>
                <div className={`col-12 mb-5`}>
                  <textarea type="text" className="form-control bg-transparent py-3 " placeholder="Message" rows={5} aria-label="Recipient's username" aria-describedby="basic-addon2"></textarea>
                </div>
              </div>
              <div>
                <button className='btn btn-theme btn-md fs-3'>Submit Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <OurBranches />
    </div>
  )
}

export default Contact
