import React, { useState } from 'react'
import chefsIcon from '../Images/chefs/thumburl.jpg'
import videoContext from '../library/Service/Context.jsx'
import Title from '../Reuse/Title'
import Video from '../Reuse/Video'

const ChefSingle = () => {

  let [modalShow, setModalShow] = useState(false)

  return (
    <>
      <Title>Chef Single</Title>

      <div className='m-5'>
        <videoContext.Provider value={{ name: 'chefs', icon: chefsIcon, modalShow, setModalShow, fullscreen: true }}>
          <Video />
        </videoContext.Provider>
      </div>
    </ >
  )
}

export default ChefSingle
