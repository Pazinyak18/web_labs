import React from "react";
import {AboutContainer} from './About.styles';
import ItemTemplate from '../../../itemTemplate/ItemTemplate.js';

const About = (props) =>  (
	<AboutContainer>
		<ItemContainer items={props.items}/>
	</AboutContainer>
);

function ItemContainer(props) {
	let items = props.items;
	
	if(items == undefined){
		return(<div></div>);
	}else{
		return(
			<ul className="aside_item">
				{
	                items.map(((item,keyid) => (
	                    <li key={keyid}>
	                    	<ItemTemplate
	                    	id={keyid}
		                    name={item.name}
		                    location={item.location}
		                    price={item.price}
		                    />
	                    </li>)))
	            }
			</ul>
		);
	}
}



export default About;