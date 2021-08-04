import React from 'react';

import './productPrev.css'


export default function productPrev(props){

	var time = `${new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours()}:${new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes()}`;

	return(
		<div className='productPreview image_display_section'>
			<img src={props.img} alt="" />

			

			<div className='heartbeat_feature'>
				{
					props.selectedFeature ?
						<>
							<i className='fas fa-heartbeat'></i>
							<p>78</p>
						</>
					:
						<div className='time_feature'>
							<div>{time}</div>
						</div>
				}
				
			</div>
		</div>
	);
}
