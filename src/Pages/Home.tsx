import React from 'react'
import './style.css'
import { How1, How2, How3, Hero, Autonew, Lap, Clock, Vimage } from '../assets'


interface Ivideo {
    id: number;
    image: any;
    heading: string;
    paragraph: string;
    url: string;
}

const myVideos: Ivideo[] = [
    {
        id: 0,
        image: Vimage,
        heading: "Marketing",
        paragraph: "Master the principles of 360 marketing for business growth.",
        url: "https://www.projectguide.com"
    },
    {
        id: 1,
        image: Vimage,
        heading: "Marketing",
        paragraph: "Master the principles of 360 marketing for business growth.",
        url: "https://www.projectguide.com"
    },
    {
        id: 2,
        image: Vimage,
        heading: "Marketing",
        paragraph: "Master the principles of 360 marketing for business growth.",
        url: "https://www.projectguide.com"
    },
    {
        id: 3,
        image: Vimage,
        heading: "Marketing",
        paragraph: "Master the principles of 360 marketing for business growth.",
        url: "https://www.projectguide.com"
    },
    {
        id: 4,
        image: Vimage,
        heading: "Marketing",
        paragraph: "Master the principles of 360 marketing for business growth.",
        url: "https://www.projectguide.com"
    },
    {
        id: 5,
        image: Vimage,
        heading: "Marketing",
        paragraph: "Master the principles of 360 marketing for business growth.",
        url: "https://www.projectguide.com"
    }
]

// create a function to map through your array of objects
const videoViewArr = myVideos.map(item =>
    <div className='col-sm-12 col-md-12 col-lg-4' key={item.id}>
        <div className='video-card'>
            <div className="video-card-header">
            <img src={ item.image } alt="" className='w-15'/>
            </div>
            <div className="video-card-body">
                <h5>{ item.heading }</h5>
                <p>{ item.paragraph }</p>
            </div>
            <div className="video-card-footer">
                <button className='vbtn' onClick={() => window.location.href = item.url}>Download Project Guide</button>
            </div>
        </div>
    </div>
)

const Home: React.FC = () => {
    
  return (
    <div>
      <div className="section-hero" style={{backgroundImage: `url(${Hero})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
          
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

      <div className="section-works mt-5">
          <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-1"></div>
              <div className="col-sm-12 col-md-12 col-lg-10">
                  <h2 className='text-center'>Our Projects</h2>
                  <div className="row">
                      { videoViewArr }
                  </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-1"></div>
          </div>
      </div>

    </div>
  )
}

export default Home
