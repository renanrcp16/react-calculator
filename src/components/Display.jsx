import React from 'react'
import './Display.css'

const component = props =>{
	return(
		<div className="display">{props.value}</div>
	)
}

export default component;