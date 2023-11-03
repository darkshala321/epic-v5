import React, { useState, useEffect } from 'react'
import './singleproduct.css'
import { StarOutlined, PlusCircleOutlined, QuestionCircleOutlined, WindowsFilled, ArrowRightOutlined, WarningOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SingleProduct = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {

    setNav1(slider1);
    setNav2(slider2);

  });


  {/* dùng array các tấm hình */ }
  const images = [
    'https://cdn1.epicgames.com/spt-assets/2ae760629a384d5199cbefc612db7ac8/the-lord-of-the-rings-return-to-moria-rxsxh.jpg',
    'https://www.cnet.com/a/img/resize/db50ad93b64d1d2ef64078f0d1d20831f04a810e/hub/2022/06/10/8c60d40a-2d25-46c7-bdf5-5bf7c1fdd29c/lotr-rtm-cheers.jpg?auto=webp&fit=crop&height=900&width=1200',
    'https://static.wixstatic.com/media/987247_ffb593fe0a5842d8ae21207e27b12cf3~mv2.jpg/v1/fill/w_1920,h_1080,al_c/987247_ffb593fe0a5842d8ae21207e27b12cf3~mv2.jpg',
  ];

  const thumbnails = [
    'https://cdn1.epicgames.com/spt-assets/2ae760629a384d5199cbefc612db7ac8/the-lord-of-the-rings-return-to-moria-rxsxh.jpg',
    'https://www.cnet.com/a/img/resize/db50ad93b64d1d2ef64078f0d1d20831f04a810e/hub/2022/06/10/8c60d40a-2d25-46c7-bdf5-5bf7c1fdd29c/lotr-rtm-cheers.jpg?auto=webp&fit=crop&height=900&width=1200',
    'https://static.wixstatic.com/media/987247_ffb593fe0a5842d8ae21207e27b12cf3~mv2.jpg/v1/fill/w_1920,h_1080,al_c/987247_ffb593fe0a5842d8ae21207e27b12cf3~mv2.jpg',
    'https://static.wixstatic.com/media/987247_ffb593fe0a5842d8ae21207e27b12cf3~mv2.jpg/v1/fill/w_1920,h_1080,al_c/987247_ffb593fe0a5842d8ae21207e27b12cf3~mv2.jpg',
  ];

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px'
  };

  const handleBuyNowClick = () => {
    history.push('/checkout');
  };

  return (

    <div className='single-product-container'>
      <div className='single-game-title'>
        <h1> GAME TITLE </h1>
        <StarOutlined start={{ color: 'white' }} />
      </div>
      <div className='info'>
        <div className='game-info'>

          <div className="main-slider">
            <Slider
              {...settingsMain}
              asNavFor={nav2}
              ref={slider => (setSlider1(slider))}
            >
              {images.map((image, index) => (
                <div key={index}><img src={image} alt={`Image ${index + 1}`} /></div>
              ))}
            </Slider>
          </div>

          <div className="thumbnail-slider">
            <Slider
              {...settingsThumbs}
              asNavFor={nav1}
              ref={slider => (setSlider2(slider))}>
              {thumbnails.map((thumbnail, index) => (
                <div key={index}><img src={thumbnail} alt={`Thumbnail ${index + 1}`} /></div>
              ))}
            </Slider>
          </div>
          <div className='game-container'>
            <div className='game-sapo'>
              <h4>The only survival crafting game set in the Fourth Age of Middle-earth™, the iconic fantasy world created by J.R.R. Tolkien.</h4>
            </div>
            <div className='game-description'>
            <p>
              The Lord of the Rings: Return to Moria follows the Dwarves as they embark on a new adventure to reclaim their legendary home of Moria beneath the Misty Mountains. Players will join forces to survive, craft, build and explore the iconic, sprawling mines. Courageous expeditioners will need to be vigilant as mysterious dangers await.
              Reclaim the Dwarven homeland of Moria
              Summoned to the Misty Mountains by Lord Gimli Lockbearer, players take control of a company of Dwarves tasked to reclaim the lost spoils from the Dwarven homeland of Moria—known as Khazad-dûm or Dwarrowdelf—in the depths below their very feet. Their quest will require fortitude, delving deep into the Mines of Moria to recover its treasures.
              Set in a procedurally generated Dwarven realm of Moria, no two adventures will be alike, and every expedition is traversable either solo or online with companions. Players can mine to craft greater gear and resources, but beware mining makes noise, and noise created in the quiet deep threatens to awaken the dangers below: where there’s clatter, there’s combat. Excavate the mysteries of three legendary mountains, extract precious metals, scrape to survive, and battle unspeakable forces to learn the secret of the Shadow that lurks within.
            </p>
            </div>
          </div>
        </div>
        <div className='side-bar'>
          <div className='game-name'>
            <img src='https://cdn1.epicgames.com/spt-assets/2ae760629a384d5199cbefc612db7ac8/the-lord-of-the-rings-return-to-moria-logo-1qshc.png?h=270&quality=medium&resize=1&w=480' />
          </div>
          <div className='game-price'>
            <h3> $ 400</h3>
          </div>
          <div className='buttons'>
            <Button type="primary" size='large'>BUY NOW</Button>
            <Button ghost size='large'>ADD TO CART</Button>
            <Button ghost size='large'>
              <span>
                <PlusCircleOutlined /> ADD TO WISHLIST
              </span>
            </Button>
          </div>
          <div className='additional-info'>
            <div className='info-line'>
              <span>Epic Rewards</span>
              <div className='btn-info'>
                <Button className='button-with-icon'>
                  <span>Earn 5% back</span>
                  <span className='svg-container'><svg xmlns="http://www.w3.org/2000/svg" className="svg-epic" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10.3827 3.07523C10.2512 2.71987 9.74862 2.71987 9.61712 3.07523L8.69694 5.562C8.1595 7.01439 7.01439 8.1595 5.562 8.69694L3.07523 9.61712C2.71987 9.74862 2.71987 10.2512 3.07523 10.3827L5.562 11.3029C7.01439 11.8403 8.1595 12.9855 8.69694 14.4378L9.61712 16.9246C9.74862 17.28 10.2512 17.28 10.3827 16.9246L11.3029 14.4378C11.8403 12.9855 12.9855 11.8403 14.4378 11.3029L16.9246 10.3827C17.28 10.2512 17.28 9.74862 16.9246 9.61712L14.4378 8.69694C12.9855 8.1595 11.8403 7.01439 11.3029 5.562L10.3827 3.07523Z" fill="currentColor"></path></svg>
                  </span>
                </Button>
              </div>
            </div>

            <div className='info-line'>
              <span>Refund Type</span>
              <div className='btn-info'>
                <Button className='button-with-icon'>
                  <span>Self-Refundable</span>
                  <QuestionCircleOutlined style={{ fontSize: '18px', marginLeft: '0px' }} />
                </Button>
              </div>
            </div>

            <div className='info-line'>
              <span>Developer</span>
              <span>Free Range Games</span>
            </div>

            <div className='info-line'>
              <span>Publisher</span>
              <span>North Beach Games</span>
            </div>

            <div className='info-line'>
              <span>Release Date</span>
              <span>North Beach Games</span>
            </div>


            <div className='info-line'>
              <span>Platform</span>
              <div className='btn-info'>
                <Button className='button-with-icon'>
                  <WindowsFilled style={{ fontSize: '18px', marginLeft: '0px' }} />
                </Button>
              </div>
            </div>

            <div className='report-btn'>
              <Button ghost size='large' style={{ width: '100%' }}>
                <span>
                  <ArrowRightOutlined /> SHARE
                </span>
              </Button>
              <Button ghost size='large' style={{ width: '100%' }}>
                <span>
                  <WarningOutlined /> REPORT
                </span>
              </Button>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default SingleProduct