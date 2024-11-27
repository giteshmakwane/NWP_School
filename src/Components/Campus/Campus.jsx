import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gall9.jpg'
import gallery_2 from '../../assets/gall5.webp'
import gallery_3 from '../../assets/gall6.jpg'
import gallery_4 from '../../assets/gall7.jpg'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className='gallery'>
        <img src={gallery_1} alt="" className='gall'/>
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus