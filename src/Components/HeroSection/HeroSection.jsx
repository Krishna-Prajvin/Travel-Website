import React from 'react';
import './HeroSection.css';
import Carousel from 'react-bootstrap/carousel';
import GreenBtn from '../GreenBtn/GreenBtn';

function HeroSection() {
  return (
    <div className='hero-section'>
        <Carousel>
            <Carousel.Item className='carousel-item1 vh-100'>
                <Carousel.Caption className='h-100 d-flex flex-column align-items-center justify-content-top'>
                    <div className="row h-100">
                        <div className='col-lg-6 d-flex flex-column align-items-start justify-content-center'>
                            <h1 className='text-capitalize text-start'>Find your perfect holiday</h1>
                            <p className='text-start'>By choosing KP Travels as your travel partner, experience the service of finding a hassle-free and memorable holidays. Browse the top-picks from our travel experts! </p>
                            <GreenBtn btnTitle='Check our holidays' btnLink='/holidays' />
                        </div>
                        <div className='col-lg-6 d-none d-lg-block'></div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item2 vh-100'>
                <Carousel.Caption className='h-100'>
                    <div className="row h-100">
                        <div className='col-lg-6 d-flex flex-column align-items-start justify-content-center'>
                            <h1 className='text-capitalize text-start'>Check out our popular tours</h1>
                            <p className='text-start'>Browse from our featured and most popular tour packages.</p>
                            <GreenBtn btnTitle='Popular Tours' btnLink='/city-breaks' />
                        </div>
                        <div className='col-lg-6 d-none d-lg-block'></div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item3 vh-100'>
                <Carousel.Caption className='h-100'>
                    <div className="row h-100">
                        <div className='col-lg-6 d-none d-lg-block'></div>
                        <div className='col-lg-6 d-flex flex-column align-items-end justify-content-center'>
                            <h1 className='text-capitalize text-start'>Travel anywhere</h1>
                            <p className='text-start'>KP Travels is the best place to plan your holiday destination! Check out our featured Tours and Travels. </p>
                            <GreenBtn btnTitle='Check all destinations' btnLink='/destinations' />
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default HeroSection;