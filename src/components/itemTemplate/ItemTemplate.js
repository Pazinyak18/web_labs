import React from 'react';
import {ItemTemplateStyle} from './ItemTemplate.styles';
import ItemImage from '../../assets/item.png'
import { BrowserRouter as Router, Switch, Route, NavLink,Redirect,Link } from "react-router-dom";
import Details from '../pages/Details/Details.js'

const ItemTemplate = (props) => {
    let id = props.id+1;
    return (
        <ItemTemplateStyle>
            <img className="item__photo" src={ItemImage} alt="Item"></img>
            <div className="item">
                <h3 className="item__name">Name: {props.name}</h3>
                <h5 className="item__location">Location: {props.location}</h5>
                <h5 className="item__price">Price: {props.price}</h5>
                <button className="button__viewmore" >
                    <Link className="viewmore_link" to={"/details/"+id}>View</Link>
                </button>
            </div>
        </ItemTemplateStyle>
    );
}

export default ItemTemplate;