import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home(){
	return(

		<div className="home">
			<img className="home__banner" 
			src="banner1.jpg" 
			alt="" 
			/>
			<div className="home__row">
				<Product 
					id="00000001"
					title="This is a first product"
					price={100.23}
					rating={5}
					image="p1.jpg"
				/>
				<Product 
					id="00000001"
					title="This is a first product"
					price={100.23}
					rating={5}
					image="p1.jpg"
				/>
			</div>	
			<div className="home__row">
				<Product 
					id="00000001"
					title="This is a first product"
					price={100.23}
					rating={5}
					image="p1.jpg"
				/>
				<Product 
					id="00000001"
					title="This is a first product"
					price={100.23}
					rating={5}
					image="p1.jpg"
				/>
				<Product 
					id="00000001"
					title="This is a first product"
					price={100.23}
					rating={5}
					image="p1.jpg"
				/>
			</div>
			<div className="home__row">
				<Product 
					id="00000001"
					title="This is a first product"
					price={100.23}
					rating={5}
					image="p1.jpg"
				/>
			</div>	
		</div>
		
		);
}

export default Home;