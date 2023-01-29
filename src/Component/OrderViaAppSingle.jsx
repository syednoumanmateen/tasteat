import React from 'react'
import Frequent from '../Reuse/Frequent'
import Orderviaapp from '../Reuse/Orderviaapp'
import Title from '../Reuse/Title'
import imgIcon from '../Images/orderviaapp/app1.svg'
import img from '../Images/orderviaapp/delic.png'
import imgbg from '../Images/home/badgebg1.jpg'
import Common from '../library/Service/Common.jsx'
import android from '../Images/android.svg'
import ios from '../Images/ios.svg'

const OrderViaAppSingle = () => {

  let isDesk = Common.isDesktop() ? true : false

  return (
    <div>
      <Title>Order Via App Sinble</Title>
      <div className={`container-fluid ${isDesk ? "p-5 my-5" : "py-5"}`}>
        <div className={`row g-0 bg-order-image ${isDesk ? "" : ""}`} style={{ backgroundImage: "url(" + imgbg + ")" }}>
          <div className={`col-12 col-lg-8 ${isDesk ? "p-5" : "p-3"}`}>
            <img className={`${isDesk ? 'mb-5' : 'mb-3'}`} src={imgIcon} width={isDesk ? '50%' : '100%'} alt="logo" />
            <div className='mb-1'>
              <div className='brd-tb-nor fs20 mb-3'>
                50% OFFER FOR FIRST ORDER
              </div>
            </div>
            <div className='fw500 fs28 mb-1'>Delicious Food Delivery</div>
            <div className={`mb-3 ${isDesk ? 'fs25' : 'fs22 mb-4'}`}>The fastest delivery service in the city so you can order your needed
              foods from our restaurant via this app they will deliver the food as soon as possible on your door step.</div>
            <div className="row">
              <div className="col-12 col-lg-3 mb-3  ">
                <img src={ios} alt="ios" />
              </div>
              <div className="col-12 col-lg-3">
                <img src={android} alt="android" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 p-0 text-end">
            <img src={img} className="img-fluid" alt="delic" />
          </div>
        </div>
      </div>
      <Orderviaapp />
      <Frequent />
    </div>
  )
}

export default OrderViaAppSingle
