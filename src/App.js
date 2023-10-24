import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Divisa({ moneda, tipoCambio }) {
  const equivalente = moneda / tipoCambio
  return equivalente
}

function App() {
  const [moneda, setMoneda] = useState(0);
  const [moneda2, setMoneda2] = useState(0);
  const [tipoCambio, setTipoCambio] = useState(18.31);

  const conversion = () => {
    const equivalente2 = Divisa({ moneda, tipoCambio });
    setMoneda2(equivalente2)
  }


  const actualizarConversion = (event) => {
    const seleccion = event.target.value;
    if (seleccion === 'usd') {
      setTipoCambio(18.31)
    } else if (seleccion === 'eur') {
      setTipoCambio(19.35)
    } else if (seleccion === 'btc') {
      setTipoCambio(614357.13)
    } else if (seleccion === 'eth') {
      setTipoCambio(32189.68)
    } else if (seleccion === 'doge') {
      setTipoCambio(1.19)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Calculadora de divisa MXN a demás moneditas</p>
      </header>

      <p>
        <b>Pesos a:</b>
        <select onChange={actualizarConversion}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="btc">BTC</option>
          <option value="eth">ETH</option>
          <option value="doge">DOGE</option>
        </select>
      </p>

      <input type="number" value={moneda} onChange={(e) => setMoneda(e.target.value)} />
      <button onClick={conversion}>Equivalencia</button>
      <p>{moneda2}</p>
      
    </div>
  );
}

export default App