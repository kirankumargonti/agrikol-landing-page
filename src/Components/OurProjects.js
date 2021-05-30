import React from 'react'
import {Col, Container, Image, Row} from 'react-bootstrap'
import Leaf from '../Assets/leaf.png'
import {v4 as uuid} from 'uuid'

import ImgOne from '../Assets/recent-pro-img-1.jpg'
import ImgTwo from '../Assets/recent-pro-img-2.jpg'
import ImgThree from '../Assets/recent-pro-img-3.jpg'

const OurProjects = () => {
  const productImages = [
    {
      id: uuid(),
      image: ImgOne,
      title: 'organic solutions',
    },
    {
      id: uuid(),
      image: ImgTwo,
      title: 'Harvest Innovations',
    },
    {
      id: uuid(),
      image: ImgThree,
      title: 'Agriculture farming',
    },
  ]
  return (
    <div className='projects'>
      <Container>
        <p className='header__caption'>explore projects</p>
        <h1 className='section__title'>our Recent projects</h1>
        <Image className='leaf' src={Leaf} alt='' />
        <Row className='mt-5'>
          {productImages?.map((p) => (
            <Col
              xl={4}
              lg={4}
              md={4}
              sm={12}
              key={p.id}
              className='projects_container'
            >
              <div className='product__box mb-5'>
                <Image src={p.image} alt='' />
                <h2 className='section__title'>{p.title}</h2>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default OurProjects
