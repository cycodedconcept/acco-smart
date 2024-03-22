import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './style.css'
import { Autonew, Lap, Clock, Ahero, V1, V2, ProImage, Lif, Lib, Liins, Mark, Phone, Mail, Reach } from '../assets'




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
                <h1>Upskill For Global<br></br> Growth via Partnership.</h1>
                <p>
                    Learn cutting-edge Partnership, Management and<br></br> Corporate skills with real world case studies and<br></br> effect globally recognized opportunities
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
                  <h2 className='text-center pohead'>Objective</h2>

                  <div className="row">
                      <div className="col-sm-12 col-md-12 col-lg-6">
                          <div className="project-text">
                              <h3><span className='wash mb-5'>PARTNERSHIP AGREEMENT</span></h3>
                              <p>
                                  Partnership agreement allows for effective and efficient running of partnership business. The set of rules guiding the operation of partnership business is contained in a document known as, “Partnership Deeds”. The agreement must be signed by partners in the presence of a lawyer. Although people can enter into partnership without any written form of agreement but it is advisable to have a written agreement. 
                              </p>
                              <p>
                              Partnership accounting is purely an extension of the basic principles governing the final accounts of a sole trader. The final accounts of a sole trader comprises of the Trading, Profits and Loss Account and the Balance Sheet while the partnership accounting add two other accounts to the aforementioned accounts. These are: i. Appropriation Account ii. Current and Capital Account
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


      <div className="section-reach" id='section'>
          <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
              <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6">
                      <div className="reach-text">
                          <h2 className='wash mb-5'>Reach Out to Us</h2>

                          <p><img src={ Phone } alt="" className='mr-3'/> +234 803 338 4408</p>
                          <p><img src={ Lib } alt="" className='mr-3'/> accosmart_consulting</p>
                          <p><img src={ Liins } alt="" className='mr-3'/> accosmart_consulting</p>
                          <p><img src={ Lif } alt="" className='mr-3'/> accosmart_consulting</p>
                          <p><img src={ Mail } alt="" className='mr-3'/> info@accosmartconsulting</p>
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
