import React from 'react';
import Cards from '../Data/cards.json';

function Card() {
    
    var idCard1 = Math.floor(Math.random() * 22);
    var card1 = Cards[idCard1];
    var idCard2 = Math.floor(Math.random() * 21);
    if (idCard2 === idCard1) {
        idCard2 = Math.floor(Math.random() * 21);
    }
    var card2 = Cards[idCard2];
    var idCard3 = Math.floor(Math.random() * 20);
    if (idCard3 === idCard2 || idCard3 === idCard1) {
        idCard3 = Math.floor(Math.random() * 20);
    }
    var card3 = Cards[idCard3];
    

    return (
    <div className='container card-container justify-content-around'>
            <div className='aCard col-xl-3 col-md-12 col-sm-12'>
                <h4>Pasado</h4>
                <img src={card1.url} className="cardImage" alt="card" />
                <div className='cardtextWrapper'>
                <p className='cardName'><b>Nombre</b>: {card1.name}</p>
                <p className='cardText'><b>Aspecto Negativo</b>: {card1.negative}</p>
                <p className='cardText'><b>Claves</b>: {card1.key}</p>
                <p className='cardText'><b>Consejo</b>: {card1.advice}</p>
                </div>
            </div>
            <div className='aCard col-xl-3 col-md-12 col-sm-12'>
                <h4>Presente</h4>
                <img src={card2.url} className="cardImage" alt="card" />
                <div className='cardtextWrapper'>
                    <p className='cardName'><b>Nombre</b>: {card2.name}</p>
                    <p className='cardText'><b>Aspecto Negativo</b>: {card1.negative}</p>
                    <p className='cardText'><b>Claves</b>: {card2.key}</p>
                    <p className='cardText'><b>Consejo</b>: {card2.advice}</p>
                </div>
            </div>
            <div className='aCard col-xl-3 col-md-12 col-sm-12'>
                <h4>Futuro</h4>
                <img src={card3.url} className="cardImage" alt="card" />
                <div className='cardtextWrapper'>
                <p className='cardName'><b>Nombre</b>: {card3.name}</p>
                <p className='cardText'><b>Aspecto Negativo</b>: {card1.negative}</p>
                <p className='cardText'><b>Claves</b>: {card3.key}</p>
                <p className='cardText'><b>Consejo</b>: {card3.advice}</p>
                </div>
            </div>
    </div>
    );
    
  }
  
  export default Card;