import React from 'react'
import {Container} from 'react-bootstrap'
import {BsPlayFill} from 'react-icons/bs'

const AgricultureTypes = () => {
  return (
    <div className='agriculture__types'>
      <Container className="agriculture__container">
        
        <div className='video__tag'>
          <div className='video__tag__container'>
            <BsPlayFill />
          </div>
        </div>
        <div className='content'>
          <p>Modern agriculture types</p>
          <h1>Agriculture matters to the future of development</h1>
        </div>
      </Container>
    </div>
  )
}

export default AgricultureTypes
