import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout(){

	const [{basket}] = useStateValue();
	return (
			<div className="checkout">
				{ basket?.length === 0 ? (
					<h2>Your Amazon Basket is empty</h2>
				) : (
					<div className="checkout__items__left">
						<h2>Your Shoping basket</h2>
						<div>
							{ basket.map(item =>(
								<CheckoutProduct 
									key={item.id}
									id={item.id}
									title={item.title}
									image={item.image}
									price={item.price}
									rating={item.rating}
								/>
							))}
						</div>
					</div>	
				)}
				{basket.length > 0 && (
					<div className="checkout__items__right">
						<Subtotal />
					</div>
				)}
				
			</div>
		)
}

export default Checkout;