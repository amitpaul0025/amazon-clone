import React from "react";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

function Subtotal(){

	const [{basket}] = useStateValue();
	const total = basket.reduce(
	    (prevValue, currentValue) => prevValue + currentValue.price,
	    0
	  );

	return (

		<div>
			<h2>Subtotal</h2>
			<strong>Price:{total}</strong>
		</div>
	)

}

export default Subtotal;