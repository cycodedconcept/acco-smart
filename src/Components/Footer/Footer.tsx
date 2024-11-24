import React, { useState, useEffect } from 'react'
import './footer.css'
import { Logo, Face, Twitter, Ins, Te } from '../../assets/';
import { Partnership, Goodwill, Lesson } from '../../pdf'
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


interface footer {
  id: number,
  name: string,
  doc: any
}

const footerList: footer[] = [
  {
    id: 0,
    name: "Partnership",
    doc: Partnership
  },

  {
    id: 1,
    name: "Goodwill",
    doc: Goodwill
  },

  {
    id: 2,
    name: "Lesson Plan",
    doc: Lesson
  },
]


const Footer: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [getUrl, setGetUrl] = useState('');
  const [showModal, setShowModal] = useState(false)
  const [width, setWidth] = useState<number>(window.innerWidth * 0.8);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }
  

  const changePdf = (e: any) => {
    console.log(e.target.value)
    let url =  `${e.target.value}`;
    setGetUrl(url)
    setShowModal(!showModal)
  }

  const hideMyModal = () => {
    setShowModal(!showModal)
  }

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth * 0.8); // Update width on window resize
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const footerItem = footerList.map(item => 
    <button key={item.id} value={item.doc} className="spar" onClick={changePdf}>{item.name}</button>
  )

  


  useEffect(() => {
    const rex: any = document.querySelectorAll(".nex");
    for (let i = 0; i < rex.length; i++) {
      rex[i].addEventListener("click", () => {
        if (rex[i].innerHTML === "ARS questionaire") {
          window.open("https://forms.gle/ssaV2qcVWmcrYdEw9",  "width = 200, height = 200")
        }
        else if (rex[i].innerHTML === "Achievements") {
          window.open("https://forms.gle/JTU9X7Fse14xzzik7", '_blank')
        }

        else if (rex[i].innerHTML === "students attitude questionaire") {
          window.open("https://forms.gle/561Jx7UH5tu4fKgF6", '_blank')
        }
        else if (rex[i].innerHTML === "student information questionaire") {
          window.open("https://forms.gle/2rigpufyPoFH4uW39", '_blank')
        }
      })
    }
  }, [])

  return (
    <div className='mt-5 footer-sec py-5'>
      <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
          
              <div className="footer-section">
                  <div className="footer-logo">
                      <img src={ Logo } alt="" className='mb-4'/>
                      <p>
                         Increased brand visibility or credibility<br></br> through association.
                      </p>
                      <div className="footer-social">
                          <a href='https://t.me/accosmart'><img src={ Te } alt="" className='mr-3'/></a>
                          <a href='https://web.facebook.com/accosmartt'><img src={ Face } alt="" className='mr-3'/></a>
                          <a href='https://twitter.com/AbanumisCollins'><img src={ Twitter } alt="" className='mr-3'/></a>
                          <a href='https://www.instagram.com/accosmartt/'><img src={ Ins } alt="" /></a>

                      </div>
                  </div>
                  <div className="footer-project">
                      <h5>Projects</h5>
                      { footerItem }
                  </div>
                  <div className="footer-questionaire">
                      <h5>Questionaire</h5>
                      <p className='nex'>accounting student technology proficiency</p>
                      <p className='nex'>student information questionaire</p>
                      <p className='nex'>ARS questionaire</p>
                  </div>
                  <div className="footer-teacher-guide">
                      <h5>Test</h5>
                      <p className='nex'>Achievements</p>
                  </div>
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
      {
        showModal && (
          <div id="doc-modal" className="mymodal" >
            <div className="modal-content">
              <div className="modal-header">
                <span className="close" onClick={hideMyModal}>&times;</span>
              </div>
              <div className="modal-body">
              <Document
                    file={getUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                  >
                    {Array.from(
                      new Array(numPages),
                      (el, index) => (
                        <Page
                          key={`page_${index + 1}`}
                          pageNumber={index + 1}
                          width={width}
                        />
                      ),
                    )}
                  </Document>
              </div>
            </div>
          </div>
        )
      }
      
    </div>
  )
}

export default Footer
