import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
     if(tx > -50){
        tx -= 25;
     }
     slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = ()=>{
        if(tx < 0){
            tx += 25;
         }
         slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Aayush Shroof Parents</h3>
                            <span>Jhabua, INDIA</span>
                        </div>
                    </div>
                    <p>The school feels like a second home to my children. The teachers are approachable, and the activities are engaging. I’ve seen my kids become more confident, creative, and responsible. I’m grateful for the nurturing environment at New Way Public School."</p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Raj Shah Parents</h3>
                            <span>Jhabua, INDIA</span>
                        </div>
                    </div>
                    <p>Choosing New Way Public School for my daughter was the best decision I’ve made. The school not only provides excellent education but also encourages students to explore their talents through extracurricular activities. It’s truly a place where children are prepared for life.</p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Nikita Jha Parents</h3>
                            <span>Jhabua, INDIA</span>
                        </div>
                    </div>
                    <p>New Way Public School has provided my child with an exceptional learning environment. The teachers are highly skilled, and their dedication is evident in my child’s growth, both academically and personally. The school truly focuses on instilling strong values and discipline, making it a wonderful place for holistic development.</p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Anjali Chouhan Parents</h3>
                            <span>Jhabua, INDIA</span>
                        </div>
                    </div>
                    <p>New Way Public School stands out for its student-centered approach to education. The emphasis on modern teaching techniques and real-world learning has been a game changer for my son. The school truly prepares its students for success in a fast-changing world.</p>
                </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Testimonials