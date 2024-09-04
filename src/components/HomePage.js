import React, { useEffect, useState } from 'react'
import "../style/HomePage.scss"
import { Button, Card, Col, Label, Row } from 'reactstrap';
import trails from "../assets/trails.png";
import QrCode from './QrCode';
import submit from "../assets/scangif.gif";
import country from "../assets/country.png"
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
                <div className="motto-div">
                <span className="motto">देश का ज्ञान, एक क्यूआर में समाल</span>
                </div>
                
              </Row>

              <Row className="p-0 m-0 card-row2">
                <Col className="p-0 m-0 card-row2-col">
                 <div className="p-0 m-0 card-row2-col-div">
                  <div className="country-div">
                  <Label className="dropdown-title"><img src={country} className="country-img"/>Select Country:</Label>
                  </div>
                 
                  <select className="dropdown-select" onChange={(e)=>handleChange(e)} placeholder="Please Choose Country">
                  <option value={"dropDownValue"} className="default-options" >{"Please Select Country"}</option>
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
                 
                   {
                     option.length ? 
                     <Button className="submit-button" 
                     onClick={() => handleGetAllCountries()}
                      >{ "Submit"}
                      </Button> : 
                      <Button className="selectcountry-buttonsubmit-button" 
                        disabled
                       >{ "Select Country"}
                       </Button>
                   } 
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
              <Button className="close-button" onClick={() => {setShowModal(!showModal);setDataForQr(); setOption("")}}>
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