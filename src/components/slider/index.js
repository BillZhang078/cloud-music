import React, {useState, useEffect} from 'react';
import Swiper from 'swiper';
import {Slidercontainer} from './style';
import 'swiper/css/swiper.css';
const Slider = (props) => {
  const [sliderSwiper, setSliderSwiper] = useState(null);
  const {bannerList} = props;

  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      let newSwiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      setSliderSwiper(newSwiper);
    }
  }, [bannerList.length, sliderSwiper]);

  return (
    <Slidercontainer>
      <div className='before'>
        <div className='swiper-container'>
          <div className='swiper-wrapper'>
            {bannerList.map((photo) => {
              return (
                <div className='swiper-slide' key={photo.imageUrl}>
                  <div className='slider-nav'>
                    <img
                      src={photo.imageUrl}
                      alt='recommend'
                      width='100%'
                      height='100%'
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div class='swiper-pagination'></div>
        </div>
      </div>
    </Slidercontainer>
  );
};

export default React.memo(Slider);
