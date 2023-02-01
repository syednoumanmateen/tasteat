import React, { memo, useContext } from 'react'
import play from '../Images/play.svg'
import common from '../library/Service/Common.jsx'
import videoContext from '../library/Service/Context.jsx'
import '../Reuse/Common.css'
import Youtube from './Youtube'

const Video = () => {
  let isDesk = (common.isDesktop()) ? true : false

  let { setModalShow, icon } = useContext(videoContext)

  return (
    <>
      <div className='bg-image-video' style={{ backgroundImage: "url(" + icon + ")" }}>
        <div className='text-center middle' onClick={() => setModalShow(true)}>
          <div className='width-video mx-auto brd-rad-50'>
            <img className={`align-middle ${isDesk ? 'py-4 px-3' : 'p-3'}`} width={'50px'} height={'100px'} src={play} alt="play" />
          </div>
        </div>
      </div>
      <Youtube />
    </>
  )
}

export default memo(Video)
