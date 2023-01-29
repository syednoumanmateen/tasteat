import React, { memo } from 'react'
import common from '../library/Service/Common.jsx'
import img1 from '../Images/orderviaapp/mob1.jpg'
import img2 from '../Images/orderviaapp/mob2.jpg'
import img3 from '../Images/orderviaapp/mob3.jpg'

const Orderviaapp = () => {

  let isDesk = (common.isDesktop()) ? true : false
  let winherit = (isDesk) ? { width: "1000px" } : {}

  let orderViaAppList = [img1, img2, img3]

  return (
    <>
      <div className="bg-theme">
        <div className={`${isDesk ? "py-5" : "py-3"}`}></div>
        <div className='text-center'>
          <div className={`brd-tb mb-3`}>ORDER VIA APPS</div>
        </div>
        <div className='fw500 fs28 text-center mb-2'>A Simple Way To Order Your Food</div>
        <div className={`py-3 mb-3 text-center ${isDesk ? 'fs25' : 'fs22 mb-4'} mx-auto`} style={winherit}>Order your food via apps are the simple way to stop your hunger. You can simply sit your
          place and order the food from our restaurant via these food ordering app.</div>
        <div className="container-fluid">
          <div className={`row text-center ${isDesk ? "p-5" : "p-3"}`}>
            {orderViaAppList.map((e, ind) => {
              return (
                <>
                  <div className="col-12 col-lg-4 mb-5" key={ind}>
                    <img className='brd-sm' src={e} alt="mobile" />
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Orderviaapp)
