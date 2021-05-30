import React from 'react'
import {Container, Image} from 'react-bootstrap'
import {v4 as uuid} from 'uuid'
import Leaf from '../Assets/leaf.png'
import One from '../Assets/service-1-img-1.jpg'
import Two from '../Assets/service-1-img-2.jpg'
import Three from '../Assets/service-1-img-3.jpg'
import Four from '../Assets/service-1-img-4.jpg'

const Services = () => {
  const boxes = [
    {
      id: uuid(),
      title: 'Fresh vegetables',
      info: 'Lorem ipsum is simply are many variations of pass of majority.',
      image: One,
    },
    {
      id: uuid(),
      title: 'Fresh vegetables',
      info: 'Lorem ipsum is simply are many variations of pass of majority.',
      image: Two,
    },

    {
      id: uuid(),
      title: 'Fresh vegetables',
      info: 'Lorem ipsum is simply are many variations of pass of majority.',
      image: Three,
    },
    {
      id: uuid(),
      title: 'Fresh vegetables',
      info: 'Lorem ipsum is simply are many variations of pass of majority.',
      image: Four,
    },
  ]
  return (
    <div className='services'>
      <Container>
        <div className='services__up'>
          <p>What we do</p>
          <h1>Services We Offer</h1>
          <Image src={Leaf} alt='' />
        </div>
        <div className='services__down'>
          {boxes?.map((box) => (
            <div className='box' key={box.id}>
              <div className='top'>
                <h2>{box.title}</h2>
                <p>{box.info}</p>
              </div>
              <div className='bottom'>
                <Image src={box.image} alt='' />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Services
