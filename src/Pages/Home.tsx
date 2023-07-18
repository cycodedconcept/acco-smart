import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './style.css'
import { How1, How2, How3, Hero, Autonew, Lap, Clock, Vimage, Fimage } from '../assets'


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
        <div data-aos="zoom-out">
        <div className='video-card'>
            <div className="video-card-header">
            <img src={ item.image } alt="" className='w-15'/>
            </div>
            <div className="video-card-body">
                <h5 className='wash'>{ item.heading }</h5>
                <p>{ item.paragraph }</p>
            </div>
            <div className="video-card-footer">
                <button className='vbtn' onClick={() => window.location.href = item.url}>Download Project Guide</button>
            </div>
        </div>
        </div>
    </div>
)

const Home: React.FC = () => {
    useEffect(() => {
        AOS.init();
    }, [])

  return (
    <div>
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
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
        </div>
      
      <div className="row how">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
                <h4 className='work-head'>How It works</h4>
                <div className="how-it-works">
                    <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
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
                    </div>
                    <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
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
                    </div>
                    <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
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
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>

      <div className="section-works mt-5 mb-5">
          <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-1"></div>
              <div className="col-sm-12 col-md-12 col-lg-10">
                  <h2 className='text-center mb-5'>Our Projects</h2>
                  <div className="row">
                      { videoViewArr }
                  </div>
                  <div className="view-section-btn text-center mt-5">
                      <button>View all Project</button>
                  </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-1"></div>
          </div>
      </div>

      <div className="section-full-video" style={{backgroundImage: `url(${Fimage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}></div>

    </div>
  )
}

export default Home
