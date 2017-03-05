import React from 'react';
import './Cobain.css';

export default function Key(props) {
	const colorCss = props.active ? props.color : "";

	return (
		<div className={`box ${colorCss}`}>
		</div>
	)
}