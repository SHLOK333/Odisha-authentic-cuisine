import React, { useEffect, useState } from 'react';
import './Menu.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = () => {
  // Use URLs directly
  const slidesData = [
    { imgurl: 'https://i0.wp.com/thestrongtraveller.com/wp-content/uploads/2021/01/odisha-thali.jpg?fit=640%2C469&ssl=1' },
    { imgurl: 'https://www.holidify.com/blog/wp-content/uploads/2016/09/Pakhala-Bhat.jpg' },
    { imgurl: 'https://example.com/path/to/Slider3.jpeg' },
    { imgurl: 'https://example.com/path/to/Slider4.jpeg' },
    { imgurl: 'https://example.com/path/to/Slider5.jpeg' },
    { imgurl: 'https://example.com/path/to/Slider6.jpeg' }, // add the images url here
    { imgurl: 'https://example.com/path/to/Slider7.jpeg' },
    { imgurl: 'https://example.com/path/to/Slider8.jpeg' }
  ];

  const [curr, setCurr] = useState(0);
  const len = slidesData.length - 1;

  const prevSlide = () => {
    setCurr(curr === 0 ? len : curr - 1);
  };

  const nextSlide = () => {
    setCurr(curr === len ? 0 : curr + 1);
  };

  useEffect(() => {
    const slider = setInterval(() => {
      setCurr(curr === len ? 0 : curr + 1);
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [curr, len]);
  return (
    <div
      className='Slider-container'
      style={{ backgroundImage: `url(${slidesData[curr].imgurl})` }}
    >
      <div className='SlideContent'>
        <FaArrowAltCircleLeft className='btn' onClick={prevSlide} />
        <h3>Our Speciality</h3>
        <FaArrowAltCircleRight className='btn' onClick={nextSlide} />
      </div>
    </div>
  );
};

export default ImageSlider;