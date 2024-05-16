import React, { memo } from 'react'
import './Timeline.css'

const Timeline = (props) => {
  return (
    <>
      <div class="timeline">
        {props.data.map((e, ind) => {
          let border = (ind === props.data.length - 1) ? {} : { borderLeft: '2px dashed rgb(133, 133, 133)' }
          return (
            <div key={ind} class="container-timeline" style={border}>
              <div className='content' key={ind}>
                <div className='fs25 fw700'>{e.step}</div>
                <div className='fs18'>{e.description}</div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default memo(Timeline)
