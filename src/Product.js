import React from 'react';
import "./Product.css";
import StarIcon from '@material-ui/icons/Star';

function Product({id, title, image, price, rating}){
	return(

		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>INR</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{
						Array(rating)
						.fill()
						.map((_) => (
							<StarIcon />
						))
					}
				</div>				
			</div>
			<img src={image} alt="" className="product__image"/>
			<button className="product__addToBasket">Add to basket</button>
		</div>

		);
}

export default Product;