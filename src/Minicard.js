import React from 'react';
import "./Card.css";

const MiniCard = ({title},{pp}) => {
		return (

			<div className="mini-card">
				<div className="mini-card-header">
					{pp}
				</div>
				<div className="mini-card-title">
					{title}
					<img src="images/icon-ellipsis.svg" alt="uçnokta"/>
				</div>
			</div>



		);
}

export default MiniCard;

