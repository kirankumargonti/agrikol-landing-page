import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {CgArrowLongLeft} from 'react-icons/cg'
import {Container} from 'react-bootstrap'

const NotFound = () => {
  useEffect(() => {
    document.title = 'Error(404 Notfound)'
  }, [])
  return (
    <div className='notfound'>
      <Container>
        <div className='notfound_content'>
          <h1>404 Notfound</h1>
          <h5>Holy Crap! It Looks like you lost in space come back to earth</h5>
          <Link to='/' className='btn back'>
            <CgArrowLongLeft className='icon' /> Back To Earth
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default NotFound
