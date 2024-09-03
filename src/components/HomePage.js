import React, { useEffect, useState } from 'react'
import "../style/HomePage.scss"
import { Button, Card, Col, Label, Row } from 'reactstrap';
import trails from "../assets/trails.png";
import qrCode from "../assets/qr-code.png"
import { Html5Qrcode } from 'html5-qrcode';
import { motion } from 'framer-motion';
import QrCode from './QrCode';
import { getAllCountries as onGetAllCountries } from '../apiCall';
import submit from "../assets/submit.jpeg"
const HomePage = ({CountriesStore}) => {

  const [showModal, setShowModal] = useState(false)
  const [dataForQr, setDataForQr] = useState(null)
  const [dropDownValues, setDropDownValues] = useState([])
  const [option, setOption] =useState("")
  
  useEffect(() => {
    let fetchData = async () => {
      let countries = await CountriesStore.addCountries()
      console.log("CountriesStore.addCountries()",countries)
      setDropDownValues(countries || null )
    }
    return fetchData;
  },[])

  const handleChange = (e) => {
    console.log("e.target.value",e.target.value)
    setOption(e.target.value)
  }

const handleGetAllCountries = async() => {
  console.log("$$$")
  let qrDetails=await CountriesStore.getCountryDetails(option)
  console.log("qrDetails",qrDetails)
  setDataForQr(qrDetails);
}


  return (
    <>
      {
        showModal ?
          <div className="homePage-Row2">
            <Card className="main-modal">
              <Row className="p-0 m-0 card-row1">
                <span className="card-title">
                  <span className="nirvanaspan">निर्वाण</span>
                  <span><img src={trails} className="img-trails" /></span>
                  <span className="trailsspan"> Trails</span>
                </span>
              </Row>

              <Row className="p-0 m-0 card-row2">
                <Col className="p-0 m-0 card-row2-col">
                 <div className="p-0 m-0 card-row2-col-div">
                 <Label className="dropdown-title">Select Country:</Label>
                  <select className="dropdown-select" onChange={(e)=>handleChange(e)}>
                  <option value={" "} className="options" disabled>Please Choose Country</option>
                  {
                     dropDownValues.map((dropDownValue,index) => {
                        return (
                          <option value={dropDownValue} className="options" key={index}>{dropDownValue}</option>
                        )
                    })
                  }
                   
                  </select>
                 </div >
                 <div className="button-div">
                 <Button className="submit-button " 
                 onClick={() => handleGetAllCountries()}
                  >Submit</Button>
                 </div>
                  
                </Col>
              </Row>
              <Row className="p-0 m-0 card-row3">
                <Col className="p-2 m-0 card-col4">
                {
                  dataForQr ?
                  <QrCode className="QRCODE" dataForQr={dataForQr} ></QrCode> :
                  <img src={submit} className="submit-img"></img>
                }
                 
                </Col>
              </Row>
            </Card>

            <Row className="button-div pb-2">
              <Button className="close-button" onClick={() => {setShowModal(!showModal);setDataForQr()}}>
                Close
              </Button>
            </Row>
          </div>
          :
          <div className="homePage-Row1">
            <Button className="start-button" onClick={() => setShowModal(!showModal)}>
              Start
            </Button>
          </div>
      }
    </>
  )
}

export default HomePage