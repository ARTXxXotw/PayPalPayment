import React, { useRef, useEffect, useState } from "react";

export default function Paypal() {
  const paypal = useRef();
  const [state,setstate]=useState("salom")

  useEffect(() => {
    window.paypal.Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: `abbas${state}`,
                amount: {
                  currency_code: "CAD",
                  value: 65.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      }).render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}