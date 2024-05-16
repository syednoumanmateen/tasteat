import React, { memo } from 'react'
import common from '../library/Service/Common.jsx'
import Frequent from '../Reuse/Frequent'
import Recent from '../Reuse/Recent'
import Title from '../Reuse/Title'
import img1 from '../Images/orderviaapp/app1.svg'
import img2 from '../Images/orderviaapp/app2.svg'
import img3 from '../Images/orderviaapp/app3.svg'
import img4 from '../Images/orderviaapp/app4.svg'
import img5 from '../Images/orderviaapp/app5.svg'
import img6 from '../Images/orderviaapp/app6.svg'

const OrderViaApp = () => {

  let isDesk = (common.isDesktop()) ? true : false
  let winherit = (isDesk) ? { width: "1000px" } : {}

  let appList = [img1, img2, img3, img4, img5, img6]

  return (
    <div>
      <Title>Order Via App</Title>
      <div className='container-fluid'>
        <div className={`${isDesk ? "py-5" : "py-3"}`}></div>
        <div className='text-center'>
          <div className={`brd-tb mb-3`}>GET CONNECTED</div>
        </div>
        <div className='fw500 fs28 text-center mb-2'>Order Via App</div>
        <div className={`py-3 mb-3 text-center ${isDesk ? 'fs25' : 'fs22 mb-4'} mx-auto`} style={winherit}>You can simply sit your place and order the food from our restaurant
          via these food ordering app.</div>
        <div className="container-fluid">
          <div className={`row text-center ${isDesk ? "p-5" : "p-3"}`}>
            {appList.map((e, ind) => (
              <div className="col-12 col-lg-4 mb-5" key={ind}>
                <div className='border brd-sm p-4 mx-3'>
                  <img src={e} width={250} height={50} alt="mobile" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`text-center mb-5`}>
          <button className='btn btn-theme btn-md fs-3'>Order Now</button>
        </div>
      </div>
      <div className="bg-theme">
        <Recent />
      </div>
      <Frequent />
    </div>
  )
}

export default memo(OrderViaApp)
