import React from 'react';

import data from './component_data'
import './productPrev.css'


export default function productPrev(props){

	var time = `${new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours()}:${new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes()}`;

	return(
		<div className='productPreview image_display_section'>
			<img src={data.colorOptions[0].imageUrl} alt="" />

			<div className='time_feature'>
				<p>{time}</p>
			</div>

			<div className='heartbeat_feature'>
				<i className='fas fa-heartbeat'></i>
				<p>78</p>
			</div>
		</div>
	);
}
