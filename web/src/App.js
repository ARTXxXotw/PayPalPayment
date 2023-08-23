import React, { useState } from "react"
import PayPal from "./components/PayPal"
import './App.css';

function App() {


  const [Checkout, setCheckout] = useState(false)

  return (
    <div className="App">

      {Checkout ? (
        <PayPal />
      ) : (
        <button onClick={()=>{setCheckout(true)}}>Checkout</button>
      )}
    </div>
  );
}

export default App;
