import React from 'react'
import {Col, Container, Image, Row} from 'react-bootstrap'
import {v4 as uuid} from 'uuid'
import Leaf from '../Assets/leaf.png'
import One from '../Assets/brand-1-1.png'
import Two from '../Assets/brand-1-2.png'
import Three from '../Assets/brand-1-3.png'
import Four from '../Assets/brand-1-4.png'
import Five from '../Assets/brand-1-5.png'

const Sponsors = () => {
  const images = [
    {
      id: uuid(),
      image: One,
    },
    {
      id: uuid(),

      image: Two,
    },
    {
      id: uuid(),
      image: Three,
    },
    {
      id: uuid(),
      image: Four,
    },
  ]
  return (
    <div className='sponsors'>
      <Container>
        <Row>
          <div className='sponsors__top'>
            <Row>
              {images?.map((img) => (
                <Col key={img.id} xl={3} lg={3} md={6} sm={12} className='mb-5'>
                  <Image src={img.image} alt='' />
                </Col>
              ))}
            </Row>
          </div>
          <div className='sponsors__bottom'>
            <Row>
              <Col xl={6} lg={6} md={12} sm={12} className='mb-5'>
                <div className='box'>
                  <Image src={Leaf} alt='' />
                  <h1>We Sale Best Agriculture Products</h1>
                  <Image src={Leaf} alt='' />
                </div>
              </Col>
              <Col xl={6} lg={6} md={12} sm={12} className='mb-5'>
                <div className='box'>
                  <Image src={Leaf} alt='' />
                  <h1>We Sale Best Agriculture Products</h1>
                  <Image src={Leaf} alt='' />
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Sponsors
