import React, { useState } from 'react'
import "../style/HomePage.scss"
import { Button, Card, Col, Dropdown, DropdownToggle, Input, Label, Modal, Row } from 'reactstrap';
import trails from "../assets/trails.png";
import qrCode from "../assets/qr-code.png"
import { Html5Qrcode } from 'html5-qrcode';
import { motion } from 'framer-motion';
import QrCode from './QrCode';
const HomePage = () => {

  const [showModal, setShowModal] = useState(false)
  return (
    <>
      {
        showModal ?
          <div className="homePage-Row2">
            <Card className="main-modal"
            
            >
              <Row className="p-0 m-0  card-row1">

                <span className="card-title">
                  <span className="nirvanaspan">निर्वाण</span>
                  <span><img src={trails} className="img-trails"></img></span>
                  <span className="trailsspan"> Trails</span>
                </span>

              </Row>
              <Row className="p-0 m-0 card-row2">
                <Col className="p-0 m-0 card-col2">
                  <Label className="dropdown-title">Select Country </Label>
                  <select className="dropdown-select">
                    <option value="fruit">Fruit</option>
                    <option value="vegetable">Vegetable</option>
                    <option value="meat">Meat</option>
                  </select>
                </Col>
                <Col className="p-0 m-0 card-col3">
                  Selected Value:
                  <Button className="submit-button">Submit</Button>
                </Col>
              </Row>

              <Row className="p-0 m-0 card-row3">
                <Col className="p-2 m-0 card-col4 ">
                  <QrCode className="QRCODE"></QrCode>
                </Col>
                
                
              </Row>
            </Card>
            <Row className="p-0 m-0 button-div pb-2">
                <Button className="close-button" onClick={() => setShowModal(!showModal)}>Close</Button>
                </Row >
          </div>
          :
          <div className="homePage-Row1">
            <Button className="start-button" onClick={() => setShowModal(!showModal)}>Start</Button>
          </div>
      }


    </>


  )
}

export default HomePage