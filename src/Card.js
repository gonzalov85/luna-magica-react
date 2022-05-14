import Cards from './cards.json';

function Card() {
    var aCard = Cards[1];
    return (
    <div>
        <img src={aCard.url} className="" alt="logo" />
    </div>
    );
    
  }
  
  export default Card;