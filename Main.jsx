import React from 'react'
import './Main.css'
import img1 from '../../Assets/img1.jpg'

import {HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck} from 'react-icons/hi'

const Data=[
  {
    id:1,
    imgSrc:img1,
    destTitle: 'hhhh',
    location: 'ytvtf',
    grade:'jbnjrv',
    fees: '$700',
    description: 'jevheihvefivnv'
  },
  {
    id:2,
    imgSrc:img1,
    destTitle: 'hhhh',
    location: 'ytvtf',
    grade:'jbnjrv',
    fees: '$700',
    description: 'jevheihvefivnv'
  },
  {
    id:3,
    imgSrc:img1,
    destTitle: 'hhhh',
    location: 'ytvtf',
    grade:'jbnjrv',
    fees: '$700',
    description: 'jevheihvefivnv'
  },
  {
    id:4,
    imgSrc:img1,
    destTitle: 'hhhh',
    location: 'ytvtf',
    grade:'jbnjrv',
    fees: '$700',
    description: 'jevheihvefivnv'
  },
  {
    id:5,
    imgSrc:img1,
    destTitle: 'hhhh',
    location: 'ytvtf',
    grade:'jbnjrv',
    fees: '$700',
    description: 'jevheihvefivnv'
  },
  {
    id:6,
    imgSrc:img1,
    destTitle: 'hhhh',
    location: 'ytvtf',
    grade:'jbnjrv',
    fees: '$700',
    description: 'jevheihvefivnv'
  },
  {
    id:7,
    imgSrc:img1,
    destTitle: 'hhhh',
    location: 'ytvtf',
    grade:'jbnjrv',
    fees: '$700',
    description: 'jevheihvefivnv'
  },
  {
    id:8,
    imgSrc:img1,
    destTitle: 'hhhh',
    location: 'ytvtf',
    grade:'jbnjrv',
    fees: '$700',
    description: 'jevheihvefivnv'
  },
  {
    id:9,
    imgSrc:img1,
    destTitle: 'hhhh',
    location: 'ytvtf',
    grade:'jbnjrv',
    fees: '$700',
    description: 'jevheihvefivnv'
  },
  

]

const Main = () => {
  return (
   <section className='main container section'>
    
    <div className="secTitle">
      <h3 className="title">
        Most Visited Destinations
      </h3>
    </div>

    <div className="secContent grid">

    {
      Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
        return(
          <div  key={id} className='singleDestination'>
            <div className="imageDiv">
              <img src={imgSrc} alt={destTitle}/>
            </div>
            <div className="cardInfo">
              <h4 className='destTitle'>{destTitle}</h4>
              <span className="continent flex">
                <HiOutlineLocationMarker className='icon'/>
                <span className='name'>{location}</span>

              </span>
              <div className="fees flex">
                <div className="grade">
                  <span>{grade}<small>+1</small></span>

                </div>
                <div className="price">
                  <h5>{fees}</h5>
                </div>
              </div>
              <div className="desc">
                <p>
                  {description}
                  </p>
              </div>
              <button className='btn flex'>
                DETAILS <HiOutlineClipboardCheck className='icon'/>
              </button>
            </div>
          </div>
        )
      })
    }
    </div>

   </section>
  )
}

export default Main