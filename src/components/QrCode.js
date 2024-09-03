import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import "../style/HomePage.scss"
import ScannerResult from './ScannerResult';
const QrCode = ({ dataForQr}) => {
 
  const [scannerResult, setScannerResult] = useState({})

  useEffect(()=>{
    setScannerResult(dataForQr)
   
   },[dataForQr])
   
   
   useEffect(()=>{
    console.log("scannerResult",JSON.stringify(scannerResult) == "{}")
   },[scannerResult])

   const serializedValue = JSON.stringify(scannerResult);


  

  return (

    <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center",transition:"0.5s" }}>
      {
        
          <QRCode
            style={{ width: "210px"}}
            size={256}
            value={serializedValue}
          //  {scannerResult ?JSON.stringify(scannerResult) : ""}
            viewBox={`0 0 256 256`}
            fgColor="#032c42"
            bgColor="white"
          />
      }

    </div>

  )
}

export default QrCode