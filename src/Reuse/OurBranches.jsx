import React, { memo } from 'react'
import common from '../library/Service/Common.jsx'
import img1 from '../Images/branch1.jpg'
import img2 from '../Images/branch2.jpg'
import mail from '../Images/mail.svg'
import contact from '../Images/contact.svg'

const OurBranches = () => {
  let isDesk = (common.isDesktop()) ? true : false

  let branchList = [
    {
      "label": "Los Angeles, CA",
      "address": "Riverside 25, Los Angeles,United States.",
      "icon": img1,
      "mail": "contact@restaurantate.com",
      "contact": "(487) 870 - 1087"
    },
    {
      "label": "San Francisco, CA",
      "address": "Riverside 25, San Francisco California.",
      "icon": img2,
      "mail": "contact@restaurantate.com",
      "contact": "(487) 870 - 1088"
    }
  ]

  return (
    <>
      <div className={`${isDesk ? "py-5" : "py-3"}`}></div>
      <div className='text-center'>
        <div className={`brd-tb mb-3`}>VISIT US!</div>
      </div>
      <div className='fw500 fs28 text-center mb-3'>Our Branches</div>
      <div className={`container-fluid ${isDesk ? "p-5" : "p-2"}`}>
        <div className='row'>
          {branchList.map((e, ind) => (
            <div className="col-12 col-lg-6 mb-5" key={ind}>
              <div className='container-fluid brd'>
                <div className="row">
                  <div className={`col-12 col-lg-7 p-4 my-auto`}>
                    <div className={`fw700 mb-1 ${isDesk ? 'fs25' : 'fs20'}`}>{e.label}</div>
                    <div className={`mb-3 fs18`}>{e.address}</div>
                    <div><img className='me-2 mb-2' src={mail} alt={e.mail} />{e.mail}</div>
                    <div><img className='me-2' src={contact} alt={e.contact} />{e.contact}</div>
                  </div>
                  <div className="col-12 col-lg-5">
                    <img src={e.icon} width={isDesk ? 'auto' : '100%'} alt={e.label} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default memo(OurBranches)
