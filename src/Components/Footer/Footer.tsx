import React, { useState, useEffect } from 'react'
import './footer.css'
import { Logo, Face, Twitter, In, Ins } from '../../assets/';
import { Partnership, Goodwill, Lesson } from '../../pdf'
import { Document, Page, pdfjs } from 'react-pdf';
import { url } from 'inspector';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


interface Ifooter {
  id: number,
  name: string,
  doc: any
}

const footerList: Ifooter[] = [
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
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [getUrl, setGetUrl] = useState('');

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }
  

  const changePdf = (e: any) => {
    console.log(e.target.value)
    let url =  `${e.target.value}`;
    setGetUrl(url)
  }



  const footerItem = footerList.map(item => 
    <button key={item.id} value={item.doc} className="spar" onClick={changePdf}>{item.name}</button>
  )

  

  useEffect(() => {
    const rex: any = document.querySelectorAll(".nex");
    for (let i = 0; i < rex.length; i++) {
      rex[i].addEventListener("click", () => {
        if (rex[i].innerHTML === "partnership") {
          window.open("https://docs.google.com/document/d/1jyN5SrQpAeTOWu6D89f-xIV8t4GRmbKA/edit?usp=drive_link", '_blank')
        }
        else if (rex[i].innerHTML === "Achievements") {
          window.open("https://docs.google.com/document/d/1kc9D-7aQkaDSDB7kxKoozPP2SLzOexQ4/edit?usp=drive_link", '_blank')
        }

        else if (rex[i].innerHTML === "lesson plan") {
          window.open("https://docs.google.com/document/d/1Qdcp8WBTPW_O_T64RqbOl8X6eo8ucUxs/edit?usp=drive_link", '_blank')
        }

        else if (rex[i].innerHTML === "goodwill account") {
          window.open("https://docs.google.com/document/d/1yS90W4UsFc9O-tcxPwuFwJ5TzAKIH-nN/edit?usp=drive_link", '_blank')
        }
        else if (rex[i].innerHTML === "students attitude") {
          window.open("https://forms.gle/UZCw89YjrtYqeNVJ8", '_blank')
        }
        else if (rex[i].innerHTML === "information questionaire") {
          window.open("https://forms.gle/kuhgrP6Z8AC7tgpq5", '_blank')
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
                      { footerItem }
                  </div>
                  <div className="footer-questionaire">
                      <h5>Questionaire</h5>
                      <p className='nex'>students attitude</p>
                      <p className='nex'>information questionaire</p>
                  </div>
                  <div className="footer-teacher-guide">
                      <h5>Guide</h5>
                      <p className='nex'>Achievements</p>
                  </div>
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
      <div id="id" className="mymodal">
        
      </div>
      <Document
        file={getUrl}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      {/* <p>Page {pageNumber} of {numPages}</p>
      <button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber <= 1}>
        Previous Page
      </button>
      <button onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber >= numPages}>
        Next Page
      </button> */}
    </div>
  )
}

export default Footer
