import React from "react";
import { useStateValue } from "./StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({id, title, image, price, rating}){

	const [{basket}, dispatch ] = useStateValue();

	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id
		})
	}

	return (

			<div className="checkoutproduct">
				<img src={image} alt="" className="checkoutproduct__image"/>
				<div className="checkoutproduct__info">
					<p className="checkoutproduct__title">{title}</p>
					<p className="checkoutproduct__price">
						<small>INR</small>
						<strong>{price}</strong>
					</p>
					<button className="checkoutproduct__button" onClick={removeFromBasket}>Remove from basket</button>
				</div>

			</div>

		)

}

export default CheckoutProduct;