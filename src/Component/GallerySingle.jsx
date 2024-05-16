import React, { memo } from 'react'
import Title from '../Reuse/Title'
import BookATable from '../Reuse/BookATable.jsx'
import { gallerySingleList } from '../library/Data/Gallery.jsx'
import Common from '../library/Service/Common.jsx'
import Instagram from '../Reuse/Instagram'

const GallerySingle = () => {

  let isDesk = Common.isDesktop() ? true : false

  return (
    <div>
      <Title>Gallery Single</Title>
      <div className="container-fluid">
        {gallerySingleList.map((e, ind) => (
          <div key={ind} className={`row ${isDesk ? 'p-5 my-3' : 'p-3 my-3'}`}>
            <div className="col-12 col-lg-6 p-0">
              <img src={e.icon} className="img-fluid" alt={e.label} />
            </div>
            <div className="col-12 offset-lg-1 col-lg-5 p-0 py-3 fs25">
              <div className='fw700 fs60 mb-2'>{e.label}</div>
              <div className={`mb-3 fw300 ${isDesk ? 'fs20' : 'fs20 mb-4'}`}>{e.description}</div>
              <div><span className="fw700 mb-2">CATEGORY:</span>Main Courses</div>
              <div><span className="fw700 mb-2">DATE:</span>October 20, 2023</div>
              <div><span className="fw700">TAGS:</span>Recipes, Sweet, Tasty</div>
            </div>
          </div>
        ))}
      </div>
      <BookATable />
      <Instagram />
    </div>
  )
}

export default memo(GallerySingle)
