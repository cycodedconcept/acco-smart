import React, { useEffect, useState, useRef } from 'react'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './style.css'
import { How1, How2, How3, Hero, Autonew, Lap, Clock, Vimage, What, Ci, Ci2, Pi, Pi2 } from '../assets'
import { Partnership } from '../pdf'




interface Ivideo {
    id: number;
    image: any;
    heading: string;
    video: string;
    downloadUrl: any;
}

const myVideos: Ivideo[] = [
    {
        id: 0,
        image: Ci,
        heading: "Calculation Interest On Capital",
        video: "https://res.cloudinary.com/dufhtdavb/video/upload/v1710611124/samples/calculation_of_interest_xmhx1o.mp4",
        downloadUrl: ''
    },
    {
        id: 1,
        image: Ci2,
        heading: "Calculating Interest On Capital Cont.",
        video: "https://res.cloudinary.com/dufhtdavb/video/upload/v1710611948/samples/calculation_of_interest2_ho78na.mp4",
        downloadUrl: ''

    },
    {
        id: 2,
        image: Vimage,
        heading: "Introduction To Partnership",
        video: "https://res.cloudinary.com/dufhtdavb/video/upload/v1710612266/samples/introduction_to_partnership_jnmon4.mp4",
        downloadUrl: ''

    },
    {
        id: 3,
        image: Pi,
        heading: "Partnership Account",
        video: "https://res.cloudinary.com/dufhtdavb/video/upload/v1710612788/samples/partnership_account_j6ox3s.mp4",
        downloadUrl: Partnership

    },
    {
        id: 4,
        image: Pi2,
        heading: "Partnership Account cont.",
        video: "https://res.cloudinary.com/dufhtdavb/video/upload/v1710613358/samples/partnership2_lidz8x.mp4",
        downloadUrl: ''

    }
]


// create a function to map through your array of objects
const Home: React.FC = () => {

    const [toggle, setToggle] = useState(true)
    const [md, setMid] = useState(0);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        AOS.init();
    }, [])

    
    const showModal = (id: number) => {
        setToggle(!toggle)
        setMid(id)
    }
    




    const hideModal = (item: number) => {
        setToggle(!toggle)
    }

    const handleDownload = (e: any) => {
        const pdfUrl = `${e.target.value}`;
    
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', `${e.target.value}`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    const goToWhasapp = () => window.open("https://wa.me/+2348033384408?text=I've%20questions%20for%20you%20please%20thanks", '_blank')

    
    const videoViewArr = myVideos.map(item =>
        <div className='col-sm-12 col-md-12 col-lg-4' key={item.id}>
            <div data-aos="zoom-out">
            <div className='video-card'>
                <div className="video-card-header" onClick={()=>showModal(item.id)}>
                <img src={ item.image } alt="" className='w-15'/>
                </div>
                <div className="video-card-body">
                    <h5 className='wash'>{ item.heading }</h5>
                </div>
                <div className="video-card-footer">
                    <button className='vbtn' value={item.downloadUrl} onClick={handleDownload}>{item.downloadUrl ? 'Download Document' : 'Document Not Available'}</button>
                </div>
            </div>
            </div>
        </div>
    )


  return (
    <>
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div className="section-hero" style={{backgroundImage: `url(${Hero})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
                
                <div className="hero-content">
                    <h1>Powering Success Through<br></br> Strategic Partnerships</h1>
                    <p>
                        we believe in the power of partnership to drive innovation and unlock<br></br> new opportunities for growth. Partnership gives access to a dynamic<br></br> ecosystem where ideas flourish, expertise converges, and innovation thrives.
                    </p>
                    <div className="hero-icons">
                        <p className='mr-5'><img src={ Autonew } alt="" /> Informating</p>
                        <p className='mr-5'><img src={ Clock } alt="" /> Educating</p>
                        <p><img src={ Lap } alt="" /> 100% Online</p>
                    </div>
                </div>
            </div>
        </div>

        {
            myVideos && myVideos?.map((item, index) => (
                <div key={index}>
                    {item?.id === md && (
                        <div id="re-modal" className={`mymodal ${toggle ? "hide-mymodal" : ""}`}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="whsap">
                                    <img src={ What } alt="" onClick={ goToWhasapp }/>
                                    <p className='mt-2 ml-2'>For Question Click the WhatsApp icon</p>
                                </div>
                                <span className="close" onClick={() => hideModal(item?.id)}>&times;</span>
                            </div>
                            <div className="modal-body">
                                
                                <Video ref={videoRef} controls> 
                                    <source src={ item.video } type='video/mp4' />
                                </Video>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            ))
        }
      
      <div className="row how">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
                <h4 className='work-head'>Aim & Focus</h4>
                <div className="how-it-works">
                    <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <div className="how-card">
                                <div className="how-card-header">
                                    <img src={ How3 } alt=""/>
                                </div>
                                <div className="how-card-body">
                                    <h5 className='wash'>Augumented Reality Strategy (ARS)</h5>
                                    <p>
                                      Using augumented reality experience to <br></br>re-shape the educational system
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
                                <h5 className='wash'>Student Information Literacy</h5>
                                <p>
                                   Information literacy fosters intellectual<br></br> curiosity and a lifelong learning.
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
                                <h5 className='wash'>Partnerships Accounts</h5>
                                <p>
                                   Using partnerships to drive innovations and collaborations.
                                </p>
                            </div>
                        </div>
                    </div>    
                </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
      <div className="section-works mt-5 mb-5" id='section'>
          <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-1"></div>
              <div className="col-sm-12 col-md-12 col-lg-10">
                  <h2 className='text-center mb-5'>Watch Videos</h2>
                  <div className="row">
                      { videoViewArr }
                  </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-1"></div>
          </div>
      </div> 
       
           
    </>
  )
}

export default Home
