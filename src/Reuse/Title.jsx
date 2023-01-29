import React, { memo } from 'react'

const Title = (props) => {
  return (
    <>
      <div className="bg-theme py80 text-center">
        <div className="brd-tb fs40">{props.children}</div>
      </div>
    </>
  )
}

export default memo(Title)
