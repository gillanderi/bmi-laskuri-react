
import './App.css';

import {useState, useEffect} from 'react';


function App() {

  const [pituus, setPituus]=useState();
  const [paino, setPaino]=useState();
  const [bmi, setBmi]=useState();
  const [tila, setTila]= useState();
  const [vari, setVari]= useState();
  
  useEffect(() =>{
    laske_tila();
    laske_bmi();
    maaraa_vari();
    },[bmi])

  const laske_bmi = () => {

    let bmiTulos = Number(paino / (pituus / 100) **2).toFixed(2);
   
    
    setBmi(bmiTulos);

    let bmiTila = laske_tila(bmi);

    setTila(bmiTila);

    let bmiVari = maaraa_vari(bmi);

    setVari(bmiVari);
   
  } 
  
  function laske_tila  () {

    if ( bmi <18.5 ) return "alipaino";
    else if (bmi >= 18.5 && bmi <25 ) return "normaalipaino";
    else if (bmi >= 25 && bmi <=29) return "Lievä lihavuus";
    else if (bmi >=30 && bmi <=34) return "merkittävä lihavuus";
    else if (bmi >=35 && bmi <=39) return "vaikea lihavuus";
    else if (bmi >= 40) return "sairaalloinen lihavuus";
    else return "täytä arvot";
    
  }
  function maaraa_vari  ()  {
    if ( bmi <18.5 ) return "";
    else if (bmi >= 18.5 && bmi <25 ) return "tulos1";
    else if (bmi >= 25 && bmi <=29.9) return "tulos2";
    else if (bmi >=30 && bmi <=34.9) return "tulos3";
    else if (bmi >=35 && bmi <=39.9) return "tulos4";
    else if (bmi >= 40) return "tulos5";
    else return "";
  }


  return (
    <div className="App">
      <h1>Painoindeksilaskuri</h1>

    <div className="laatikot">
      <p>Anna paino kilogrammoina</p>
      <input className="paino" type="number" placeholder="Paino"  onChange={(e) => setPaino(e.target.value) } />
      <p>Anna pituus senttimetreinä</p>
      <input className="pituus" type="number" placeholder="Pituus"  onChange={(e) => setPituus(e.target.value)}/>

    </div>
    <div>
      <button onClick={laske_bmi}>Laske painoindeksi</button>
    </div>
    
    <div className={vari}>
      <h2>Painoindeksi on:</h2>
    {bmi}
      <h3>Tulos:</h3>
    {tila}
    </div>
    </div>
    
    
  );
}


export default App;

