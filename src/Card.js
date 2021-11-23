import React from "react";
import {Component} from 'react';
import "./Card.css";
import  MiniCard from './Minicard';


class Card extends Component{

	render()  {

		return (

			<div className="container">
				<div className="general-card">
					<div className="second-container">
						<MiniCard
							title="Work"
							pp={"../src/images/icon-work.svg"}/>
						<MiniCard
							title="Study"
							pp={"../images/icon-study.svg"}/>
						<MiniCard
							title="Play"/>
						<MiniCard title="Exercise"/>
						<MiniCard title="Social"/>
						<MiniCard title="Self-Care"/>
					</div>

					<div className="card">
							<img src="./images/image-jeremy.png" alt="Jeremy Robson"/>
							<div className="report-card">
								<p> Report for </p>
								<div className="name"> Jeremy Robson</div>
							</div>
					</div>

					<div className="user-card">



					</div>
				</div>
			</div>

		);
	}
}

export default Card;



