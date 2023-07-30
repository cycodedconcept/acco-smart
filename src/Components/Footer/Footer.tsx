import React, { useEffect } from 'react'
import './footer.css'


import { Logo, Face, Twitter, In, Ins } from '../../assets/';


const Footer: React.FC = () => {
  useEffect(() => {
    const rex: any = document.querySelectorAll(".nex");
    for (let i = 0; i < rex.length; i++) {
      rex[i].addEventListener("click", () => {
        if (rex[i].innerHTML === "partnership") {
          window.location.href = "https://docs.google.com/document/d/1jyN5SrQpAeTOWu6D89f-xIV8t4GRmbKA/edit?usp=drive_link"
        }
        else if (rex[i].innerHTML === "achievements") {
          window.location.href = "https://docs.google.com/document/d/1kc9D-7aQkaDSDB7kxKoozPP2SLzOexQ4/edit?usp=drive_link"
        }

        else if (rex[i].innerHTML === "lesson plan") {
          window.location.href = "https://docs.google.com/document/d/1Qdcp8WBTPW_O_T64RqbOl8X6eo8ucUxs/edit?usp=drive_link"
        }

        else if (rex[i].innerHTML === "goodwill account") {
          window.location.href = "https://docs.google.com/document/d/1yS90W4UsFc9O-tcxPwuFwJ5TzAKIH-nN/edit?usp=drive_link"
        }
      })
    }
  }, [])

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
                      <p className='nex'>partnership</p>
                      <p className='nex'>achievements</p>
                  </div>
                  <div className="footer-questionaire">
                      <h5>Questionaire</h5>
                      <p>students attitude</p>
                      <p>information questionaire</p>
                  </div>
                  <div className="footer-teacher-guide">
                      <h5>Guide</h5>
                      <p className='nex'>lesson plan</p>
                      <p className='nex'>goodwill account</p>
                  </div>
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </div>
  )
}

export default Footer
