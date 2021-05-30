import React from 'react'
import {Col, Container, Image, Row} from 'react-bootstrap'
import Leaf from '../Assets/leaf.png'
import {DiCoda, DiCodeigniter, DiCssTricks, DiNancy} from 'react-icons/di'
import {v4 as uuid} from 'uuid'

const Farming = () => {
  const farmingBoxes = [
    {
      id: uuid(),
      icon: <DiCoda />,
      name: 'We Use New technology',
    },
    {
      id: uuid(),
      icon: <DiCodeigniter />,
      name: 'professional farmers',
    },
    {
      id: uuid(),
      icon: <DiCssTricks />,
      name: 'We’re certified company',
    },
    {
      id: uuid(),
      icon: <DiNancy />,
      name: 'We deliver everywhere',
    },
  ]
  return (
    <div className='farming'>
      <Container>
        <Row>
          <Col xl={4} lg={4} md={12} sm={12}>
            <p className='header__caption'>Our benefits</p>
            <h1 className='section__title'>Agriculture & Eco Farming</h1>
            <Image src={Leaf} alt='' />
          </Col>
          <Col xl={8} lg={8} md={12} sm={12}>
            <p className='right__p'>
              There are many variations of passages of available but the
              majority have suffered alteration in some form, by injected humou
              or randomised words which don't look even slightly believable.
              There are many variations of passages of available but the
              majority have suffered alteration in some form, by injected humou
              or randomised words which don't look even slightly believable.
            </p>
          </Col>
        </Row>
        <Row style={{marginTop: "80px"}}>
          {farmingBoxes?.map((f) => (
            <Col xl={3} lg={3} md={6} sm={12}>
              <div className='farming__box mb-5'>
                {f.icon}
                <h4>{f.name}</h4>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Farming
