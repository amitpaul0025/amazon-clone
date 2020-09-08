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
					title="Lenovo Ideapad Slim 3 AMD Athlon Silver 3050U 15.6 HD Thin and Light Laptop (4GB/1TB HDD/Windows/Office/Platinum Grey/1.85Kg), 81W100HKIN"
					price={40000.23}
					rating={5}
					image="p5.jpg"
				/>
				<Product 
					id="00000002"
					title="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 1 lb (Double Rich Chocolate)"
					price={2000.23}
					rating={5}
					image="p2.jpg"
				/>
			</div>	
			<div className="home__row">
				<Product 
					id="00000003"
					title="Spike Protein Shaker Blender Bottle for Whey Protein Mix, Cycling, Gym Water Bottle with Stainless Steel Blender Ball(700ml,Clear)"
					price={400.23}
					rating={5}
					image="p3.jpg"
				/>
				<Product 
					id="00000004"
					title="Strauss Spider Shaker Bottle 500ml, (Purple)"
					price={300.23}
					rating={5}
					image="p4.jpg"
				/>
				<Product 
					id="00000005"
					title="Samsung Galaxy S10 (Black, 8GB RAM, 128GB Storage)"
					price={20000.23}
					rating={5}
					image="p1.jpg"
				/>
			</div>
			<div className="home__row">
				<Product 
					id="00000006"
					title="Bosch 12 Place Settings Dishwasher (SMS66GW01I, White)"
					price={15000.23}
					rating={5}
					image="p6.jpg"
				/>
			</div>	
		</div>
		
		);
}

export default Home;