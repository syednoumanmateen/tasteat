import React, { useState } from 'react'
import recipeIcon from '../Images/recipe/thumburl.jpg'
import Title from '../Reuse/Title'
import Video from '../Reuse/Video'
import videoContext from '../library/Service/Context.jsx'
import Common from '../library/Service/Common.jsx'
import Timeline from '../Reuse/Timeline'
import { infoList, ingredientsList, instructionList, serveList } from '../library/Data/Recipe.jsx'
import '../Reuse/Timeline.css'
import timing from '../Images/recipe/timing.jpg'

const Recipe = () => {

  let [modalShow, setModalShow] = useState(false)

  let isDesk = Common.isDesktop() ? true : false
  let instruction = instructionList

  return (
    <div>
      <Title>Particular Recipe</Title>

      <div className={`${isDesk ? 'm-5' : 'm-3'}`}>
        <div className='fw500 fs28 text-center mb-3'>Potatoes And Peas In Curry</div>
        <videoContext.Provider value={{ name: 'recipe', icon: recipeIcon, modalShow, setModalShow, fullscreen: true }}>
          <Video />
        </videoContext.Provider>
      </div>

      <div className={`container-fluid`}>
        <div className={`brd-btm ${isDesk ? 'mx-5' : 'mx-3'}`}>
          <div className={`fw500 ${isDesk ? 'fs36' : 'fs26'}`}>Ingredients</div>
        </div>
        <div className={`row g-0 p-0 ${isDesk ? 'mx-5' : 'mx-3'}`}>
          <div className={`col-12 col-lg-8 py-3 ${isDesk ? 'brd-r' : ''}`}>
            <div className="row g-0 p-0">
              {ingredientsList.map((e, ind) => {
                return (
                  <>
                    <div className={`col-12 col-lg-6 p-0 py-2 ${isDesk ? 'mb-4' : 'mb-1'}`}>
                      <div className="row g-0 p-0">
                        <div className="col-12 col-lg-3 p-0 mb-2">
                          <img src={e.icon} alt={e.label} className="img-fluid brd" />
                        </div>
                        <div className={`col-12 col-lg-9 ${isDesk ? 'ps-3' : ''}`}>
                          <div className='fs25 fw500'>{e.label}</div>
                          <div className='fs18 text-muted'>{e.weight}</div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
          <div className={`col-12 col-lg-4 p-0  ${isDesk ? 'p-5' : 'py-3'}`}>
            <div className="mb-5 text-center">
              <img src={timing} className="img-fluid" width={'100%'} alt="timing" />
            </div>
            {serveList.map((e, ind) => {
              return (<>
                <div key={ind} className="row p-0 g-0 mb-3">
                  <div className="col-2 col-lg-1">
                    <img src={e.icon} alt={e.label} className="img-fluid" />
                  </div>
                  <div className="col-10 fs24 fw500">{e.label} : {e.text}</div>
                </div>
              </>)
            })}
          </div>
        </div>

        <div className={`row g-0 p-0 ${isDesk ? 'm-5' : 'm-3'}`}>
          <div className="col-12 col-lg-8 p-0">
            <div className='brd-btm'>
              <div className={`fw500 ${isDesk ? 'fs36' : 'fs26'}`}>Instructions</div>
            </div>
            <div className={`${isDesk ? 'my-4' : 'my-3'}`}>
              <Timeline data={instruction} />
            </div>
          </div>
          <div className={`col-12 col-lg-4 ${isDesk ? 'ps-5' : ''}`}>
            <div className={`brd-btm ${isDesk ? 'mb-5' : 'mb-3'}`}>
              <div className={`fw500 ${isDesk ? 'fs36' : 'fs26'}`}>Nutrition Info</div>
            </div>
            {infoList.map((e, ind) => {
              return (
                <>
                  <div className="row g-0 align-items-center mb-3" key={ind}>
                    <div className={`fs21 fs600 ${isDesk ? 'col-4' : 'col-12'}`}>
                      {e.label}
                    </div>
                    <div className={`${isDesk ? 'col brd-dot-btm' : 'col-12'}`}></div>
                    <div className={`fs18 text-muted ${isDesk ? 'col-2 text-end' : 'col-12'}`}>
                      {e.calori}
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Recipe
