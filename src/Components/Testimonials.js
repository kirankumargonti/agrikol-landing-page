import React from 'react'
import {Col, Container, Image, Row} from 'react-bootstrap'
import Leaf from '../Assets/leaf.png'

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <Container>
        <Row>
          <Col xl={6} lg={6} md={12} sm={12}>
            <div className='testimonials__left'>
              <p className='green'>testimonials</p>
              <h1>What our customers are talking about</h1>
              <Image src={Leaf} alt='' />
              <p className='infpoo'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
            </div>
            <div className='testimonials__bottom__counter'>
              <div className='circles'></div>
              <div>
                <h1>4,850,000</h1>
                <p>Agriculture projects are completed</p>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6} md={12} sm={12}>
            <div className='testimonials__right'>
              <p>
                This is due to their excellent service, and augue homero
                consectetuer in nam. Eu quo laoreet propriae, malis exerci
                habemus has vocent persius eum ea.
              </p>
              <div className='test_bottom'>
                <div className='circle'></div>
                <div>
                  <h1>4,850,000</h1>
                  <p>Agriculture projects are completed</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <div className='testimonials__bottom'>
        <Container>
          <div className='testimonials__bottom__counter'>
            <div className='circles'></div>
            <div>
              <h1>4,850,000</h1>
              <p>Agriculture projects are completed</p>
            </div>
          </div>
        </Container>
      </div> */}
    </div>
  )
}

export default Testimonials
