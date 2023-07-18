import React from 'react'
import './footer.css'
import { Logo, Face, Twitter, In, Ins } from '../../assets/';

const getPartnership = () => {
  window.location.href = "https://docs.google.com/document/d/1jyN5SrQpAeTOWu6D89f-xIV8t4GRmbKA/edit?usp=drive_link&ouid=104074875044099012246&rtpof=true&sd=true"
}

const getAchieve = () => {
  window.location.href = "https://docs.google.com/document/d/1kc9D-7aQkaDSDB7kxKoozPP2SLzOexQ4/edit?usp=sharing&ouid=104074875044099012246&rtpof=true&sd=true"
}

const lessonPlan = () => {
  window.location.href = "https://docs.google.com/document/d/1Qdcp8WBTPW_O_T64RqbOl8X6eo8ucUxs/edit?usp=sharing&ouid=104074875044099012246&rtpof=true&sd=true"
}

const goodAcct = () => {
  window.location.href = "https://docs.google.com/document/d/1yS90W4UsFc9O-tcxPwuFwJ5TzAKIH-nN/edit?usp=sharing&ouid=104074875044099012246&rtpof=true&sd=true"
}
const Footer: React.FC = () => {
  return (
    <div className='mt-5'>
      <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
              <div className="footer-section">
                  <div className="footer-logo">
                      <img src={ Logo } alt="" className='mb-4'/>
                      <p>
                        Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Enim.
                      </p>
                      <div className="footer-social">
                          <img src={ Ins } alt="" className='mr-3'/>
                          <img src={ Face } alt="" className='mr-3'/>
                          <img src={ Twitter } alt="" className='mr-3'/>
                          <img src={ In } alt="" />
                      </div>
                  </div>
                  <div className="footer-project">
                      <h5>Projects</h5>
                      <p onClick={ getPartnership }>partnership</p>
                      <p onClick={ getAchieve }>achievements</p>
                  </div>
                  <div className="footer-questionaire">
                      <h5>Questionaire</h5>
                      <p>students attitude</p>
                      <p>information questionaire</p>
                  </div>
                  <div className="footer-teacher-guide">
                      <h5>Guide</h5>
                      <p onClick={ lessonPlan }>lesson plan</p>
                      <p onClick={ goodAcct}>goodwill account</p>
                  </div>
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </div>
  )
}

export default Footer
