import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Images/logo.svg'
import NavbarList from '../library/Data/NavbarList.jsx'
import Common from '../library/Service/Common.jsx'

const Navbar = () => {

  let isDesk = Common.isDesktop() ? true : false

  let navlist = <ul className={`navbar-nav ${isDesk ? "ms-4" : ""}`}>
    {
      NavbarList.map((e, ind) => {
        let list = (e.label === 'Pages') ?
          <li key={ind} className={`nav-item dropdown ${isDesk ? "me-4 fs-5" : "fs-6 py-1"}`}>
            <NavLink className="nav-link p-0 text-light" to={e.path} role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <div className="row g-0"><div className="col-6 col-lg-8">{e.label} </div>
                <div className="col-6 col-lg-2 text-end">{e.icon}</div></div>
            </NavLink>
            <ul className={`dropdown-menu dropdown-menu-dark ${isDesk ? 'bg-theme p-3' : 'bg-menu px-0 border-0'}`}>
              {e.sub.map((i, key) => {
                return (
                  <>
                    <li key={key} className={`nav-item ${isDesk ? "my-2 fs-5" : "fs-6 my-1 ms-4 py-1"}`}><NavLink className="nav-link text-light p-0" to={i.path}>{i.label}</NavLink></li>
                  </>
                )
              })}
            </ul>
          </li> : <li className={`nav-item ${isDesk ? "me-4 fs-5" : "fs-6 py-1"}`} key={ind}>
            <NavLink className='text-decoration-none text-light' to={e.path}>{e.label}</NavLink>
          </li>
        return (
          <>
            {list}
          </>
        )
      })
    }
  </ul>

  return (
    <>
      <div className="container-fluid p-0">
        <div className='brd-btm'>
          <div className={`row g-0 align-items-center ${isDesk ? 'px-4 py-5' : 'py-4'}`}>
            <div className={`col-12 col-lg-4 ${isDesk ? '' : 'text-center'}`}><button className='btn btn-theme px-3 py-3 fs-4 fw-500'>Call - 123456789</button></div>
            <div className={`col-12 col-lg-4 text-center ${isDesk ? '' : 'my-5'}`}>
              <NavLink to={'/home'}>
                <img src={logo} className="img-fluid" alt="THE TASTEAT" />
              </NavLink>
            </div>
            <div className={`col-12 col-lg-4 ${isDesk ? 'text-end' : 'text-center'}`}><button className='btn btn-theme px-3 py-3 fs-4 fw-500'>Reservation</button></div>
          </div>
        </div>
        <div className='py-2 brd-btm'>
          <div className="row g-0 align-items-center">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler bg-light m-2 abs" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="bi bi-list fs-1"></i>
                </button>
                <div className={`collapse navbar-collapse col-8 p-2 ${isDesk ? '' : 'bg-menu'}`} id="navbarNavDropdown">
                  {navlist}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Navbar)
