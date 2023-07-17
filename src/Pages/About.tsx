import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './style.css'
import { Autonew, Lap, Clock, Ahero, V1, V2, ProImage, Fimage, Lif, Lib, Liins, Mark, Phone, Mail, Reach } from '../assets'




interface Card {
    id: number;
    image: any;
    text: string;
}

const aboutCard: Card[] = [
    {
        id: 0,
        image: V1,
        text: "Agile"
    },
    {
        id: 0,
        image: V2,
        text: "Ambition"
    },
    {
        id: 0,
        image: V1,
        text: "Teamwork"
    },
    {
        id: 0,
        image: V2,
        text: "Speed"
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
                <h1>Upskill For Global<br></br> Growth.</h1>
                <p>
                    Learn cutting-edge Business, Management and<br></br> Corporate skills with real world case studies and<br></br> earn globally recognized certificates
                </p>
                <div className="hero-icons-about">
                    <p className='mr-5'><img src={ Autonew } alt="" /> Flexible</p>
                    <p className='mr-5'><img src={ Clock } alt="" /> Fast</p>
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

      <div className="section-project">
          <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-1"></div>
              <div className="col-sm-12 col-md-12 col-lg-10">
                  <h2 className='text-center pohead'>Our Project</h2>

                  <div className="row">
                      <div className="col-sm-12 col-md-12 col-lg-6">
                          <div className="project-text">
                              <h3>Our <span className='wash mb-5'>Health Training</span><br></br> Services</h3>
                              <p>
                                At our company, we believe that a versatile workforce is the 
                                cornerstone of an effective work place especially in the health 
                                system. That's why we offer a range of health training programs 
                                that help individuals develop the knowledge and skills they need to 
                                make informed decisions in their work place, 
                              </p>
                              <p>
                                manage clients as well 
                                as work with other colleagues in an environment devoid of workplace 
                                crises. Our programs cover a wide range of topics, from Leadership 
                                and Management in Health, Project management, Human Resource 
                                management, to Electrocardiogram Interpretation, mental health etc. 
                                Over the years, we have helped thousands of healthcare professionals attain 
                                their goals across continents – students who participated in our online courses 
                                have come from various countries including Zambia, UAE, Russia, USA, UK, Ghana, 
                                Botswana, Namibia, Nigeria among others.
                              </p>
                          </div>
                      </div>
                      <div className="col-sm-12 col-md-12 col-lg-6">
                          <img src={ ProImage } alt="" className='w-100'/>
                      </div>
                  </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-1"></div>
          </div>
      </div>

      <div className="section-full-video mt-5" style={{backgroundImage: `url(${Fimage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}></div>

      <div className="section-reach">
          <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
              <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6">
                      <div className="reach-text">
                          <h2 className='wash mb-5'>Reach Out to Us</h2>

                          <p><img src={ Phone } alt="" className='mr-3'/> +234 803 338 4408</p>
                          <p><img src={ Lib } alt="" className='mr-3'/> credbride_consulting</p>
                          <p><img src={ Liins } alt="" className='mr-3'/> credbride_consulting</p>
                          <p><img src={ Lif } alt="" className='mr-3'/> credbride_consulting</p>
                          <p><img src={ Mail } alt="" className='mr-3'/> info.credbrideconsulting@gmail.com</p>
                          <p><img src={ Mark } alt="" className='mr-3'/> 11 Opebi Street Ikeja, Lagos State</p>
                      </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6">
                      <img src={ Reach } alt="" className='w-75'/>
                  </div>
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          </div>
      </div>
      
    </div>
  )
}

export default About
