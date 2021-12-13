import React from 'react';
import itemImage from '../../../../../assets/item.png';
import {CartTemplateStyles,Text,Button} from './CartTemplate.styles';

const CartTemplate = (props) => {
    return (
        <CartTemplateStyles>
            <img className="item__photo" src={itemImage} alt="item"></img>
            <Text>Name: {props.item.name}</Text>
            <Text>Price: {props.item.price}</Text>
            <Button onClick={() => props.onDeduct(props.item.id)}>-</Button>
            <label>{props.item.units}</label>
            <Button onClick={() => props.onAdd(props.item.id)}>+</Button>
            <label>{props.item.units*props.item.price}$</label>
            <Button onClick={() => props.onDel(props.item.id)}>Delete</Button>
        </CartTemplateStyles>
    );
}

export default CartTemplate;