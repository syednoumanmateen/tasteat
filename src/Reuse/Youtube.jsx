import React, { memo, useContext } from 'react'
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap'
import common from '../library/Service/Common.jsx'
import videoContext from '../library/Service/Context.jsx'
import './Youtube.css'

const Youtube = () => {

  let isDesk = (common.isDesktop()) ? true : false

  let { modalShow, setModalShow, fullscreen, name } = useContext(videoContext)

  return (
    <div>
      <Modal
        show={modalShow} fullscreen={fullscreen}
        onHide={() => setModalShow(false)}
        size="lg"
        centered
      >
        <ModalHeader closeButton></ModalHeader>
        <ModalBody className='text-center pt100'>
          {(name === 'recipe') ?
            <iframe className="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F4IcIIDj4YZA%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4IcIIDj4YZA&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F4IcIIDj4YZA%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube" width={`${(isDesk) ? 940 : 380}`} height={`${(isDesk) ? 528 : 400}`} scrolling="no" title="YouTube embed" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true"></iframe>
            : <iframe className="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FO5TdnuUhIgs%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DO5TdnuUhIgs&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FO5TdnuUhIgs%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube" width={`${(isDesk) ? 940 : 380}`} height={`${(isDesk) ? 528 : 400}`} scrolling="no" title="YouTube embed" frameborder="0" allow="autoplay; fullscreen\" allowfullscreen="true"></iframe>
          }
          {/* <iframe width="940" height="528" src="https://www.youtube.com/embed/tJlzIJaokVY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </ModalBody>
      </Modal>
    </div >
  )
}

export default memo(Youtube)
