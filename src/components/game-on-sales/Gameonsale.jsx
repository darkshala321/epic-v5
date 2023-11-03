import React from 'react';
import './gameonsale.css';
import data from '../../data/db.json';

const Gameonsale = () => {
  const games = data.game.slice(0, 5); // chỉnh số lượng game on sale

  return (
    <section className="sales">
      <h3 style={{ color: 'white' }}>Games On Sale - </h3>

      <ul className="saleslist">
        {games.map((game) => (
          <li key={game.game_id} className="card">
            <a href={`https://www.epicgames.com/store/en-US${game.url}`}>
              <img src={game.images[0].url} alt={game.game_title} />

              <div className="cardText">
                <p>{game.game_title}<br /><span className="author">{game.developer ? game.developer : 'Game Developer'}</span></p>
                <span className="pricetag">-25%</span><span className="oldprice">$50</span> $37
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Gameonsale;