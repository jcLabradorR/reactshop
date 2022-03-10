import React, { useState } from 'react';
import '../styles/ProductItem.scss';
import btAddToCard from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
	const[cart, setCard] = useState('');

	const handleClick = () => {
		setCard([]);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={handleClick}>
					<img src={btAddToCard} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;