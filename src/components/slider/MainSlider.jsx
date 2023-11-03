import React, { useState } from 'react';
import './Slider.css';
import db from '../../data/db.json';

const MainSlider = () => {
  const [currentGameIndex, setCurrentGameIndex] = useState(0);

  // Lấy URL hình ảnh nền từ trò chơi đang hiển thị
  const backgroundImageUrl = `url("${db.game[currentGameIndex].images[0].url}")`;

  // Hàm để thay đổi trò chơi đang hiển thị
  const changeFeaturedGame = (index) => {
    setCurrentGameIndex(index);
  };

  return (
    <div className="sliderWrapper">
      <div className="featured" style={{ backgroundImage: backgroundImageUrl }}>
        <div className="itemText">
          <h3 className="title">{db.game[currentGameIndex].game_title}</h3>
          <p>Last change for Pre-purchase</p>
          <div className="buttons">
            <a href="#!" className="btn btnDownload">
              DOWNLOAD NOW
            </a>
            <a href="#!" className="btn btnWishlist">
              ADD TO WISHLIST
            </a>
          </div>
        </div>
      </div>
      <div className="gamelist">
        <li>
          {db.game.slice(0, 6).map((game, index) => (
            <div
              className={`game ${index === currentGameIndex ? 'current' : ''}`}
              key={game.game_id}
              onClick={() => changeFeaturedGame(index)}
            >
              <img
                src={game.images[0].url}
                alt={game.game_title}
              />
              <h4>{game.game_title}</h4>
            </div>
          ))}
        </li>
      </div>
    </div>
  );
};

export default MainSlider;