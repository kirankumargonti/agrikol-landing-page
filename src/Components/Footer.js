import React from 'react'
import {v4 as uuid} from 'uuid'
import {
  FaFacebookSquare,
  FaTwitter,
  FaDribbble,
  FaInstagram,
} from 'react-icons/fa'
import {BiCheck} from 'react-icons/bi'
import {Col, Container, Image, Row} from 'react-bootstrap'
import imgOne from '../Assets/footer-1-img-1.jpg'
import imgTwo from '../Assets/footer-1-img-2.jpg'

const Footer = () => {
  const menu = [
    {
      id: uuid(),
      title: 'about',
      info: 'Lorem ipsum dolor sit amet, adipiscing elit. Nulla placerat posuere dui. Pellentesque venenatis sem non lacus ac auctor.',
    },
    {
      id: uuid(),
      title: 'explore',
      options: [
        {
          id: uuid(),
          optionName: 'about us',
        },
        {
          id: uuid(),
          optionName: 'services',
        },
        {
          id: uuid(),
          optionName: 'our Projects',
        },
        {
          id: uuid(),
          optionName: 'Meet the farmers',
        },

        {
          id: uuid(),
          optionName: 'latest news',
        },

        {
          id: uuid(),
          optionName: 'contact',
        },
      ],
    },
    {
      id: uuid(),
      title: 'news',
      options: [
        {
          id: uuid(),
          image: imgOne,
          info: 'Learn 10 Best Tips for New Formers',
          date: '30 Oct, 2019',
        },
        {
          id: uuid(),
          image: imgTwo,
          info: 'Farmer Sentiment Darkens Hopes Fade',
          date: '30 Oct, 2019',
        },
      ],
    },
    {
      id: uuid(),
      title: 'contact',
      info: `66 Broklyn Street, New Town
      DC 5752, New Yrok`,
      number: '666 888 0000',
      email: 'needhelp@agrikol.com',
      socialLinks: [
        {
          id: uuid(),
          icon: <FaFacebookSquare />,
        },
        {
          id: uuid(),
          icon: <FaTwitter />,
        },
        {
          id: uuid(),
          icon: <FaInstagram />,
        },
        {
          id: uuid(),
          icon: <FaDribbble />,
        },
      ],
    },
  ]
  return (
    <footer>
      <div className='footer__wrapper'>
        <div className='footer__wrapper__top'>
          <Container>
            <Row>
              <Col xl={3} lg={3} md={6} sm={12} className='mb-5'>
                <h2 className='title'>{menu[0].title}</h2>
                <p>{menu[0].info}</p>
                <div className='input__wrapper'>
                  <input type='email' placeholder='Email Address' />
                  <BiCheck />
                </div>
              </Col>
              <Col xl={3} lg={3} md={6} sm={12} className=' mb-5 cc'>
                <div className='explore'>
                  <h2 className='title'>{menu[1].title}</h2>
                  {menu[1].options?.map((x) => (
                    <p key={x.id}>{x.optionName}</p>
                  ))}
                </div>
              </Col>
              <Col xl={3} lg={3} md={6} sm={12} className='mb-5'>
                <h2 className='title'>{menu[2].title}</h2>
                {menu[2].options?.map((x) => (
                  <div className='f__wrapper' key={x.id}>
                    <Image src={x.image} alt='' />
                    <div>
                      <p>{x.info}</p>
                      <p className='yellow__brand'>{x.date}</p>
                    </div>
                  </div>
                ))}
              </Col>
              <Col xl={3} lg={3} md={6} sm={12} className='mb-5'>
                <h2 className='title'>{menu[3].title}</h2>
                <p>{menu[3].info}</p>
                <p className='yellow__brand'>{menu[3].email}</p>
                <p className='yellow__brand'>{menu[3].number}</p>
                <div className='icons__footer'>
                  {menu[3].socialLinks?.map((y) => (
                    <div className='icon_wra'>{y.icon}</div>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='footer__wrapper__bottom'>
          <Container>
            <h5>@ All copyright 2020, Layerdrops.com</h5>
            <div>
              <h5>Privacy Policy</h5>
              <h5>Terms of Use</h5>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  )
}

export default Footer
