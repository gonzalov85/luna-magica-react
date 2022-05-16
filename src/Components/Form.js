import ball from '../images/ball.png';
import React,{useState} from 'react';
import Card from './Card';

function Form() {
    const [isCompleted, setIsCompleted] = useState(false);
    const [title, setIsTittle] = useState('Consulta de Tarot');
    function handleSubmit(){

    }
    function complete(){
      if (isCompleted === false){
        setIsCompleted(true);
        setIsTittle('Resultado');
      } else {
        setIsCompleted(false);
        setIsTittle('Consulta de Tarot');
      }
      
    }
    
    if(isCompleted === false){
      return (
        <main className='container'>
            <p>
                {title}
            </p>
            <img src={ball} className="App-logo ball m-4" alt="ball" />
            <h5>Déjanos conocerte un poco más:</h5>
            
            <form className='myForm' onSubmit={handleSubmit}>
            <div className='form-container'>
              <div className="m-3 text-start col-4">
                <label htmlFor="name" className="form-label">Nombre:</label>
                <input type="text" className="form-control ml-3" id="name"/>
              </div>
              <div className="m-3 col-1 text-start">
                <label htmlFor="edad" className="form-label">Edad:</label>
                <input type="text" className="form-control ml-3" id="edad"/>
              </div>
              <div className="m-3 col-2 text-start">
                <label htmlFor="date" className="form-label">Genero:</label>
                <select className="form-control ml-3" id='gender' placeholder='Elegir...'>
                    <option value="" disabled selected>Elegir...</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                </select>
              </div>
              <div className="m-3 col-2 text-start">
                <label htmlFor="date" className="form-label">Fecha Nacimiento:</label>
                <input type="date" className="form-control ml-3" id="edad"/>
              </div>
            </div>
            <div className="m-3 text-center">
              <button type="button" className="btn btn-success text-light" onClick={complete}>Consultar</button>
            </div>
            
          </form>
            
        </main>
      );
    } else {
      return (
        <section>
          <p>
                {title}
          </p>
          <Card />
          <div className="m-3 text-center">
              <button type="button" className="btn btn-success text-light" onClick={complete}>Volver</button>
          </div>
          
        </section>
        
      );
    }

   
  }
  
  export default Form;