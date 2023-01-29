import React from 'react'
import BookATable from '../Reuse/BookATable'
import Testimonial from '../Reuse/Testimonial'
import '../Reuse/Common.css'
import Offer from '../Reuse/Offer'
import Popular from '../Reuse/Popular'

const Home = () => {
  return (
    <div>
      home
      time
      story
      menu
      <Testimonial />
      <div className='bg-image-home bg-attachment'></div>
      <Offer />
      <Popular />
      Service
      blog
      <BookATable />
    </div>
  )
}

export default Home
