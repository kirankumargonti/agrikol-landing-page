import React, {useRef} from 'react'
import {Image} from 'react-bootstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import OneImage from '../Assets/slide_v1_1.jpg'
import TwoImage from '../Assets/slide_v1_2.jpg'
import ThreeImage from '../Assets/slide_v1_3.jpg'

import {BiChevronRight, BiChevronLeft} from 'react-icons/bi'

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  }

  const sliderRef = useRef()
  const next = () => sliderRef.current.slickNext()
  const previous = () => sliderRef.current.slickPrev()

  return (
    <div className='banner'>
      <Slider ref={sliderRef} {...settings}>
        <div className='slider__wrapper'>
          <Image src={OneImage} alt='' />
          <div className='content'>
            <p>The best Agriculture products</p>
            <h1>
              Welcome to <br /> agriculture Form
            </h1>
            <button>Discover More</button>
          </div>
        </div>
        <div className='slider__wrapper'>
          <Image src={TwoImage} alt='' />
          <div className='content'>
            <p>The best Agriculture products</p>
            <h1>
              Welcome to <br /> agriculture Form
            </h1>
            <button>Discover More</button>
          </div>
        </div>
        <div className='slider__wrapper'>
          <Image src={ThreeImage} alt='' />
          <div className='content'>
            <p>The best Agriculture products</p>
            <h1>
              Welcome to <br /> agriculture Form
            </h1>
            <button>Discover More</button>
          </div>
        </div>
      </Slider>
      <div className='banner__buttons'>
        <button className=' btn1' onClick={previous}>
          <BiChevronLeft />
          PREV
        </button>
        <button className=' btn2' onClick={next}>
          NEXT
          <BiChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Banner
