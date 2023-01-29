import React from 'react'
import Common from '../library/Service/Common.jsx'
import Title from '../Reuse/Title'
import menuList from '../library/Data/Menu.jsx'
import BookATable from '../Reuse/BookATable'

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
                  <div className='fs36 fw600 mb-4'>{e.label}</div>
                  {e.subMenu.map((i, k) => {
                    return (
                      <>
                        <div key={k} className={`row g-0 ${isDesk ? 'mb-5' : 'mb-3'} align-items-center`}>
                          <div className={`${isDesk ? 'col-lg-2' : 'col-12'} p-0`}>
                            <img className='brd-rad-50' src={i.icon} alt="" />
                          </div>
                          <div className={`${isDesk ? 'col-lg' : 'col-12'} p-0`}>
                            <div className='fs26 fw600'>{i.label}</div>
                            <div className='fs18 text-muted'>{i.description}</div>
                          </div>
                          <div className={`${isDesk ? 'col-lg' : 'col-12'} p-0`}>
                            {isDesk ? <div className='brd-dot-btm me-2'></div> : <div></div>}
                          </div>
                          <div className={`${isDesk ? 'col-lg-1' : 'col-12'} p-0 fs28 fw600`}>$ {i.value}</div>
                        </div>
                      </>
                    )
                  })
                  }
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
