import React from 'react'
import Common from '../library/Service/Common.jsx'
import Title from '../Reuse/Title'
import menuList from '../library/Data/Menu.jsx'
import BookATable from '../Reuse/BookATable'
import OurMenuList from '../Reuse/OurMenuList.jsx'

const OurMenu = () => {

  let isDesk = Common.isDesktop() ? true : false

  return (
    <>
      <Title>Our Menu</Title>
      {menuList.map((e, ind) => {
        return (
          <>
            <div className="container-fluid">
              <div key={ind} className={`row align-items-center g-0 ${isDesk ? 'p-5' : 'p-3'}`}>
                <div className={`col-12 col-lg-6 p-0 ${(ind === 1) ? 'order-1 text-end' : ''}`}>
                  <img src={e.icon} className="img-fluid" alt="starter" />
                </div>
                <div className={`col-12 col-lg-6 p-0 ${(ind === 1) ? 'order-0' : ''}`}>
                  <OurMenuList data={e} />
                  <div className={`${isDesk ? 'py-2' : 'py-2'}`}>
                    <button className='btn btn-theme btn-md fs-3'>Order Now</button>
                  </div>
                </div>
              </div>
            </div>
            {ind === menuList.length - 1 ? "" : <img className='img-fluid' src={e.bgIcon} alt={e.label} />}
          </>
        )
      })}
      <BookATable />
    </>
  )
}

export default OurMenu
