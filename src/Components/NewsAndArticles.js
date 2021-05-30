import React from 'react'
import {Col, Container, Image, Row} from 'react-bootstrap'
import {v4 as uuid} from 'uuid'
import Leaf from '../Assets/leaf.png'
import One from '../Assets/blog-1-img-1.jpg'
import Two from '../Assets/blog-1-img-2.jpg'
import Three from '../Assets/blog-1-img-3.jpg'

import {FaRegUserCircle, FaChevronCircleRight} from 'react-icons/fa'
import {AiOutlineComment} from 'react-icons/ai'

const NewsAndArticles = () => {
  const boxes = [
    {
      id: uuid(),
      image: One,
      title: `Agriculture Miracle you
      Don't Know About`,
      info: 'There are lorem ipsum is simply free many variations of ipsum the majority suffered.',
    },
    {
      id: uuid(),
      image: Two,
      title: `Amount of Freak Bread
      or Other Fruits`,
      info: 'There are lorem ipsum is simply free many variations of ipsum the majority suffered.',
    },
    {
      id: uuid(),
      image: Three,
      title: `Winter Wheat Harvest
      Gathering Momentum`,
      info: 'There are lorem ipsum is simply free many variations of ipsum the majority suffered.',
    },
  ]
  return (
    <div className='news'>
      <Container>
        <div className='news__content'>
          <p>from the blog</p>
          <h1>News & Articles</h1>
          <Image src={Leaf} alt='' />
          <Row>
            {boxes?.map((box) => (
              <Col key={box.id} xl={4} lg={4} md={4} sm={12} className='mb-5'>
                <div className='blog__Card'>
                  <div className='img__wrapp'>
                    <Image src={box.image} alt='' />
                    <div className='date__badge'>30 Oct, 2019</div>
                  </div>
                  <div className='blog__Card__body'>
                    <div className='blog__content'>
                      <div className='blog__up'>
                        <div className='blog__'>
                          <FaRegUserCircle />
                          <div>Admin</div>
                        </div>
                        <div className='blog__'>
                          <AiOutlineComment />
                          <div>2 Comments</div>
                        </div>
                      </div>
                      <h3>{box.title}</h3>
                      <p>{box.info}</p>
                      <p className='button'>
                        <span>
                          <FaChevronCircleRight />
                        </span>
                        Read More
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default NewsAndArticles
