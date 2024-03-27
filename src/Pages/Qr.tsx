import React from 'react'
import QRCode from 'qrcode.react';
import { Fav } from '../assets'
import './style.css'

const Qr = () => {
  return (
    <React.Fragment>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4"></div>
            <div className="col-sm-12 col-md-12 col-lg-4">
                <QRCode value="https://accosmart.com.ng/" size={256} fgColor="#6ba36b" />
                <img src={ Fav } alt="Brand Logo" className="logo" />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4"></div>
        </div>
    </React.Fragment>
  )
}

export default Qr

