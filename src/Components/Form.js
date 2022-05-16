import ball from '../images/ball.png';
import React,{ useState } from 'react';
import Card from './Card';
import * as htmlToImage from 'html-to-image';



function Form() {
    const [isCompleted, setIsCompleted] = useState(false);
    const [title, setIsTittle] = useState('Consulta de Tarot');
    const [name, setName ] = useState('');
    const [age, setAge ] = useState('');
    const [gender, setGender ] = useState('');
    const [date, setDate ] = useState('');
    const [sign, setSign ] = useState('');
    

    const findSign = (date) => {
      const days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
      const signs = ["Acuario", "Piscis", "Aries", "Tauro", "Géminis", "Cancer", "Leo",  "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio"];
      let month = date.getMonth();
      let day = date.getDate();
      if(month == 0 && day <= 20){
         month = 11;
      }else if(day < days[month]){
         month--;
      };
      return signs[month];
   };
    
  
   function downloadImage(){
    htmlToImage.toJpeg(document.getElementById('printMe'), { quality: 0.95 })
    .then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'my-image-name.jpeg';
      link.href = dataUrl;
      link.click();
    });
  }

    function handleSubmit(){
      if (isCompleted === false){
        setIsCompleted(true);
        setIsTittle('Resultado');
        const aDate = new Date(date);
        setSign(findSign(aDate));
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
            <img src={ball} className="App-logo ball mb-2" alt="ball" />
            <h5>Déjanos conocerte un poco más:</h5>
            
            <form className='myForm' onSubmit={handleSubmit}>
            <div className='form-container'>
              <div className="m-3 text-start col-4">
                <label htmlFor="name" className="form-label">Nombre:</label>
                <input type="text" 
                className="form-control ml-3" 
                id="name" 
                onChange={(e)=>{setName(e.target.value)}}
                required
                />
              </div>
              <div className="m-3 col-1 text-start">
                <label htmlFor="edad" className="form-label">Edad:</label>
                <input type="number" 
                className="form-control ml-3" 
                id="edad" 
                min="1"
                onChange={(e)=>{setAge(e.target.value)}}
                required/>
              </div>
              <div className="m-3 col-2 text-start">
                <label htmlFor="date" className="form-label">Genero:</label>
                <select className="form-control ml-3" 
                id='gender' 
                onChange={(e)=>{setGender(e.target.value)}}
                required>
                    <option value="" disabled selected>Elegir...</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                </select>
              </div>
              <div className="m-3 col-2 text-start">
                <label htmlFor="date" className="form-label">Fecha Nacimiento:</label>
                <input type="date" 
                className="form-control ml-3" 
                id="date" 
                onChange={(e)=>{
                  setDate(e.target.value)
                }}
                required/>
              </div>
            </div>
            <div className="m-3 text-center">
              <button type="submit" className="btn btn-success text-light">Consultar</button>
            </div>
          </form>       
        </main>
      );
    } else {
      return (
        <section>
          <div id='printMe'>
              <div className="d-flex justify-content-center">
              <div className="card">
                <div className="card-body">
                    <h5 className="card-title"><b>Nombre:</b> {name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted"><span className="subtitle">Edad:</span> {age}</h6>
                    <h6 className="card-subtitle mb-2 text-muted"><span className="subtitle">Género:</span> {gender}</h6>
                    <h6 className="card-subtitle mb-2 text-muted"><span className="subtitle">Fecha Nacimiento:</span> {date}</h6>
                    <h6 className="card-subtitle mb-2 text-muted"><span className="subtitle">Signo:</span> {sign}</h6>     
                </div>
              </div>
              </div>
              <p className='resultado'>{title}</p>
              <Card />
            </div>
            <div className="m-3 text-center">
                <button type="button" className="btn btn-success text-light" onClick={handleSubmit}>Volver</button>
            </div>
            <div className="m-3 text-center">
                <button type="button" id="print" className="btn btn-success text-light" onClick={downloadImage}>Descargar Resultado</button>
            </div>
          
        </section>
        
      );
    }

   
  }
  
  export default Form;