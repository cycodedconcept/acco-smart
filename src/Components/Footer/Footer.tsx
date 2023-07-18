import React, { useState } from 'react'
import './footer.css'
import { Logo, Face, Twitter, In, Ins } from '../../assets/';

import Modal from "react-modal"
Modal.setAppElement("#root");




const Footer: React.FC = () => {
const [isOpen, setIsOpen] = useState(false)

function toggleModal() {
  setIsOpen(!isOpen);
}

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
                      <p onClick={toggleModal}>partnership</p>
                      <p>achievements</p>
                  </div>
                  <div className="footer-questionaire">
                      <h5>Questionaire</h5>
                      <p>students attitude</p>
                      <p>information questionaire</p>
                  </div>
                  <div className="footer-teacher-guide">
                      <h5>Guide</h5>
                      <p>lesson plan</p>
                      <p>goodwill account</p>
                  </div>
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="my modal"
      >
        <div></div>
        <button onClick={toggleModal}>close modal</button>
      </Modal>
    </div>
  )
}

export default Footer
