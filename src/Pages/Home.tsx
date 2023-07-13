import React from 'react'
import './style.css'
import { How1, How2, How3, Hero, Autonew, Lap, Clock } from '../assets'

const Home: React.FC = () => {
  return (
    <div>
      <div className="section" style={{backgroundImage: `url(${Hero})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
          
          <div className="hero-content">
              <h1>Upskill For Global<br></br> Growth.</h1>
              <p>
                Learn cutting-edge Business, Management and<br></br> Corporate skills with real world case studies and<br></br> earn globally recognized certificates
              </p>
              <div className="hero-icons">
                  <p className='mr-5'><img src={ Autonew } alt="" /> Flexible</p>
                  <p className='mr-5'><img src={ Clock } alt="" /> Fast</p>
                  <p><img src={ Lap } alt="" /> 100% Online</p>
              </div>
          </div>
      </div>
      <div className="row how">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
          <h4 className='work-head'>How It works</h4>
              <div className="how-it-works">
                  <div className="how-card">
                      <div className="how-card-header">
                          <img src={ How3 } alt=""/>
                      </div>
                      <div className="how-card-body">
                          <h5 className='wash'>Get Our Website URL</h5>
                          <p>
                            Learn business & management courses, 100%
                          </p>
                      </div>
                  </div>
                  <div className="how-card">
                      <div className="how-card-header">
                          <img src={ How2 } alt=""/>
                      </div>
                      <div className="how-card-body">
                          <h5 className='wash'>Learn About Us</h5>
                          <p>
                             Discover SAGE. Our partners, history,<br></br> accreditation & culture.
                          </p>
                      </div>
                  </div>
                  <div className="how-card">
                      <div className="how-card-header">
                          <img src={ How1 } alt=""/>
                      </div>
                      <div className="how-card-body">
                          <h5 className='wash'>Start Watching Videos</h5>
                          <p>
                            Stand out boldly with the Sage Mini-MBA
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </div>
  )
}

export default Home
