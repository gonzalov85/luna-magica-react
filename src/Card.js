import Cards from './cards.json';

function Card() {
    var anId = Math.floor(Math.random() * 3);
    var aCard = Cards[anId];
    
    return (
    <div>
        <img src={aCard.url} className="" alt="logo" />
    </div>
    );
    
  }
  
  export default Card;