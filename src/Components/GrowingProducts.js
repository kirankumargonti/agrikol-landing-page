import React from 'react'
import {Col, Container, Image, ProgressBar, Row} from 'react-bootstrap'

import Img from '../Assets/product-1-img-1.jpg'
import Leaf from '../Assets/leaf.png'

const GrowingProducts = () => {
  return (
    <div className='growing'>
      <Container>
        <Row>
          <Col xl={6} lg={6} md={12} sm={12}>
            <div className='image_container'>
              <Image src={Img} alt='' />
              <div className='fit'>
                <h2>40 Year</h2>
                <p>Of Experience</p>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6} md={12} sm={12} className='mb-5'>
            <div className='products'>
              <p>fresh products</p>
              <h3>Growing products</h3>
              <Image src={Leaf} alt='' />
              <p className='para'>
                Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse
                suscipit sagittis leo sit met entum estibu dignissim posuere
                cubilia durae. Leo sit met entum cubilia crae onec.
              </p>
              <div className='progress__bars'>
                <div>
                  <h5>Agriculture</h5>
                  <h5>60%</h5>
                </div>
                <ProgressBar now={60} />
              </div>
              <div className='progress__bars'>
                <div>
                  <h5>Organic</h5>
                  <h5>98%</h5>
                </div>
                <ProgressBar now={98} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default GrowingProducts
