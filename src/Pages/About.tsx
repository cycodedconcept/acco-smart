import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './style.css'
import Contact from './Contact'
import { Autonew, Lap, Clock, Ahero, V1, V2, ProImage, Au } from '../assets'




interface Card {
    id: number;
    image: any;
    text: string;
}

const aboutCard: Card[] = [
    {
        id: 0,
        image: V1,
        text: "ARS"
    },
    {
        id: 0,
        image: V2,
        text: "Partnership"
    },
    {
        id: 0,
        image: V1,
        text: "SIL"
    },
    {
        id: 0,
        image: V2,
        text: "Interest"
    }
]

const cardArr = aboutCard.map(item =>
    <div data-aos="flip-left">
        <div className='card-unit' key={item.id}>
        <div className="card-unit-img text-center">
            <img src={ item.image } alt="" />
        </div>
        <div className="card-unit-text">
            <h5>{ item.text }</h5>
        </div>
    </div>
    </div>
    
)



const About: React.FC = () => {
    useEffect(() => {
        AOS.init();
    }, [])

  return (
    <div>
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div className="section-hero" style={{backgroundImage: `url(${Ahero})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
            
                <div className="hero-content-about">
                    <h1> Foster growth,<br></br> ethical practices,<br></br> and continuous learning</h1>
                    <p>
                    Whether you're a beginner or looking to refine your skills, our<br></br> 
                    expertly crafted tutorials, interactive exercises, and comprehensive<br></br>
                    resources are designed to make learning accounting<br></br> accessible and 
                    enjoyable.
                    </p>
                    <div className="hero-icons-about">
                        <p className='mr-5'><img src={ Autonew } alt="" /> Informating</p>
                        <p className='mr-5'><img src={ Clock } alt="" /> Educating</p>
                        <p><img src={ Lap } alt="" /> 100% Online</p>
                    </div>
                </div>
            </div>
        </div>

        

      <div className="section-culture">
          <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-1"></div>
              <div className="col-sm-12 col-md-12 col-lg-10">
                  <h2 className='text-center mb-5'>Our Culture</h2>
                  <div className="about-card-section">
                      { cardArr }
                  </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-1"></div>
          </div>
      </div>

      <div className="section-project my-5">
          <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-1"></div>
              <div className="col-sm-12 col-md-12 col-lg-10">
                  <h2 className='text-center pohead'>Who We Are</h2>

                  <div className="row">
                      <div className="col-sm-12 col-md-12 col-lg-7">
                          <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                <div className="project-text">
                                    <h3><span className='wash mb-5'>About The Mentor</span></h3>
                                    <p>
                                        Mr. Abanum Collins is more than just a teacher; he's a mentor and a guide, deeply committed to his students' success. He employs innovative teaching methods and provides extra support to ensure that each student grasps the fundamental concepts of accounting.
                                    </p>
                                    <p>
                                        His dedication stems from his personal journey, and he strives to be the teacher he never had, inspiring his students to not only excel academically but to also understand the real-world applications of their knowledge.
                                    </p>
                                    <div className="vm-section">
                                        <div className="misson">
                                            <h3 className='wash'>Our Mission</h3>
                                            <p>- Empower individuals globally with accessible online financial accounting education.</p>
                                            <p>- Equip learners with expertise and practical skills for the financial world.</p>
                                            <p>- Foster growth, ethical practices, and continuous learning.</p>
                                        </div>
                                        <div className="Vission ml-5">
                                            <h3 className='wash'>Our Vision</h3>
                                            <p>- Become the leading online learning platform in financial accounting.</p>
                                            <p>- Recognized for excellence in education and innovation.</p>
                                            <p>- Offer cutting-edge courses that meet the finance industry's evolving needs.</p>
                                            <p>- Nurture a community of professionals dedicated to impacting the global economy positively.</p>
                                        </div>
                                    </div>
                                </div>
                          </div>
                      </div>
                      <div className="col-sm-12 col-md-12 col-lg-5">
                          <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                             <img src={ Au } alt="" className='au'/>
                          </div>
                      </div>
                  </div>

                  <h2 className='text-center pohead'>Accounting Simplified</h2>

                  <div className="row">
                      <div className="col-sm-12 col-md-12 col-lg-6 mt-5">
                          <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                <div className="project-text2">
                                    <h3><span className='wash mb-5'>Acoounting & Interest</span></h3>
                                    <p>
                                    Welcome to Accounting Simplified, the ultimate online destination for mastering the art of accounting. Our platform is dedicated to providing clear, concise, and engaging accounting lessons for students of secondary schools. 
                                    </p>
                                    <p>
                                        Whether you're a beginner or looking to refine your skills, our expertly crafted tutorials, interactive exercises, and comprehensive resources are designed to make learning accounting accessible and enjoyable. Join us and unlock your potential in the world of finance and numbers!
                                    </p>
                                </div>
                          </div>
                      </div>
                      <div className="col-sm-12 col-md-12 offset-lg-1 col-lg-5">
                          <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                              <img src={ ProImage } alt="" className='w-100 project-text2'/>
                          </div>
                      </div>
                  </div>

              </div>
              <div className="col-sm-12 col-md-12 col-lg-1"></div>
          </div>
      </div>
      <Contact />
    </div>
  )
}

export default About
