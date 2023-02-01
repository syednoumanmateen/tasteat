import React, { memo, useState } from 'react'
import faqList from '../library/Data/FAQ.jsx'
import common from '../library/Service/Common.jsx'
import Title from '../Reuse/Title'

const FAQ = () => {

  let isDesk = (common.isDesktop()) ? true : false
  let [show, setShow] = useState(false)
  let click;

  click = (i) => {
    faqList.map((e, index) => {
      if (i === index) {
        setShow(show ? faqList[index].key = false : faqList[index].key = true)
      }
      return e
    })
  }

  return (
    <div>
      <Title>FAQ</Title>
      <div className='mt50'>
        <div className={`${isDesk ? "py-5" : "py-3"}`}></div>
        <div className='text-center'>
          <div className={`brd-tb mb-3`}>QUESTIONS</div>
        </div>
        <div className='fw500 fs28 text-center mb-3'>Frequently Asked Questions</div>
        <div className="container mb-5">
          {faqList.map((e, ind) => {
            return (
              <>
                <div className="card mb-3" key={ind}>
                  <div className="card-body">
                    <div className="row fs24 fw500" onClick={() => click(ind)}>
                      <div className="col-10">{e.qa}{e.key}</div>
                      <div className="col-2 text-end">
                        {(e.key) ? <i className={`bi bi-chevron-up`}></i> : <i className={`bi bi-chevron-doen`}></i>}
                      </div>
                    </div>
                    {(e.key) ? <div>{e.ans}</div> : ""}
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default memo(FAQ)
