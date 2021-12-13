import React, {useState,useEffect} from "react";
import { HeroContainer,Text,HeroInner,LoadingWrraper} from './Hero.styles';
import ItemImage from '../../../../assets/item.png';
import Loading from '../../../loading/Loading';
import ItemApi from '../../../util/Api/Api';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../../../redux/actions/CartActions";

const Hero = (props) => {

    const { cartItems } = useSelector(state => state);
	const[item,setItems] = useState(null);
	useEffect(()=>{
        ItemApi.getOne(props.id).then((result) => {
            setItems(result.data)
        });
    },[]);
	return(
		<div>
			{item ? <Show item={item}/>:<LoadingWrraper><Loading /></ LoadingWrraper>}
		</div>
	);
	
}

function Show (props){
	
	return(
		<HeroContainer>
			<HeroInner>
				<img className="item__photo" src={ItemImage} alt="item"></img>
	            <Text>
	                <h3 className="item__name">Name: {props.item.name}</h3>
	                <h5 className="item__location">Location: {props.item.location}</h5>
	                <h5 className="item__price">Price: {props.item.price}</h5>
	            </Text>
	            <AddPurc item={props.item}/>
	        </HeroInner>
        </HeroContainer>
	);
}

function AddPurc(props){
	const dispatch = useDispatch()
	return <button id="add" className="add" type="button" onClick={()=>dispatch(addToCart(props.item))}>Add to cart</button>
}


export default Hero;