import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import "../style/HomePage.scss"
const QrCode = ({ }) => {
  const [countryData, setCountryData] = useState({ key: "value" })
  const [scannerResult, setScannerResult] = useState()
  console.log("countryData", countryData)
  return (

    <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {
        countryData.hasOwnProperty('key') ?
          <QRCode
            style={{ width: "210px", bgColor: "green" }}
            size={256}
            value={"abc"}
            viewBox={`0 0 256 256`}
            fgColor="#032c42"
            bgColor="transparent"
          />
          :
          <></>
      }

    </div>

  )
}

export default QrCode