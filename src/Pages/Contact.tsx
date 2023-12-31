import React, { useEffect } from 'react'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Lif, Lib, Liins, Mark, Phone, Mail, Reach } from '../assets'


const Contact: React.FC = () => {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <div>
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

export default Contact
