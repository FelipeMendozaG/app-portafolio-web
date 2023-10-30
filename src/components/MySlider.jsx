import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Número de tarjetas a mostrar a la vez
    slidesToScroll: 1,
  };

  const programmingLanguages = [
    { name: 'JavaScript', description: 'A versatile programming language.' },
    { name: 'Python', description: 'Known for its simplicity and readability.' },
    { name: 'Java', description: 'A widely used, object-oriented language.' },
    { name: 'Ruby', description: 'Valued for its elegant syntax.' },
  ];

  return (
    <div className='w-auto'>
      <h2>Skills</h2>
      <Slider {...settings}>
        {programmingLanguages.map((language, index) => (
          <div key={index} className="card">
            <h3>{language.name}</h3>
            <p>{language.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MySlider;
