import React from 'react'
import {Container, Image, Nav, Navbar} from 'react-bootstrap'
import {GoMailRead} from 'react-icons/go'
import {BiPhoneCall} from 'react-icons/bi'

import {
  FaFacebookSquare,
  FaTwitter,
  FaDribbble,
  FaInstagram,
} from 'react-icons/fa'

// Assets
import Logo from '../Assets/logo.png'
import {LinkContainer} from 'react-router-bootstrap'
import {BsSearch} from 'react-icons/bs'
import {BiCart} from 'react-icons/bi'

const Header = () => {
  return (
    <div className='header'>
      <Container>
        <div className='header__up'>
          <div className='header__up__up'>
            <p>
              <GoMailRead /> <span>needhelp@tripo.com</span>
            </p>
            <p>
              <BiPhoneCall /> <span>666 888 0000</span>
            </p>
          </div>
          <div className='header__up__middle'>
            <LinkContainer to='/'>
              <Image src={Logo} />
            </LinkContainer>
          </div>

          <div className='header__up__down'>
            <div className='icon_wrapper'>
              <FaFacebookSquare />
            </div>
            <div className='icon_wrapper'>
              <FaTwitter />
            </div>
            <div className='icon_wrapper'>
              <FaInstagram />
            </div>
            <div className='icon_wrapper'>
              <FaDribbble />
            </div>
          </div>
        </div>
        <div className='header__down'>
          <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
            <Container>
              <BsSearch className='search__icon nav__icon' />
              <Navbar.Toggle aria-controls='responsive-navbar-nav' />
              <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='m-auto gggg mx-auto'>
                  <LinkContainer to='/'>
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/services'>
                    <Nav.Link>Services</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/ourprojects'>
                    <Nav.Link>Our Projects</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/shop'>
                    <Nav.Link>Shop</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/pages'>
                    <Nav.Link>Pages</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/news'>
                    <Nav.Link>News</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/contact'>
                    <Nav.Link>Contact</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
              <Nav>
                <LinkContainer to='/'>
                  <Nav.Link>
                    <BiCart className='cart_icon nav__icon' />
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Container>
          </Navbar>
        </div>
      </Container>
    </div>
  )
}

export default Header
