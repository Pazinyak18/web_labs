import React, {useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart,updateItemUnits} from "../../../redux/actions/CartActions";
import CartTemplate from "./Template/CartTemplate";
import { CartList, CartListli, TotalStyle } from "./ContainerCheckList.styles";

const ContainerCheckList = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart);
    const [totalPrice, setTotalPrice] = useState(0);

    console.log(cartItems);

    function HandleDeleteFromCart(id) {
        dispatch(deleteFromCart({id}));
    }

    function HandleDeductUnit(id) {
        let units = -1;
        dispatch(updateItemUnits({id, units}));
    }

    function HandleAddUnit(id) {
        let units = 1;
        dispatch(updateItemUnits({id, units}));
    }

    function Total(){
        return cartItems.reduce((total, item) => {
            total += item.price * item.units;
            return total;
        }, 0);

    }
    
    function ItemContainer(props) {
        let items = props.items;
        
        if(items.length == 0){
            return(<TotalStyle>Cart is empty</TotalStyle>);
        }else{
            return(
                <CartList>
                    {
                        items.map(((item,keyid) => (
                            <CartListli key={keyid}>
                               <CartTemplate
                                item={item}
                                onAdd={HandleAddUnit.bind(item.id)}
                                onDeduct={HandleDeductUnit.bind(item.id)}
                                onDel={HandleDeleteFromCart.bind(item.id)}
                                />
                            </CartListli>)))
                    }
                </CartList>

            );
        }
    }

    return (
        <React.Fragment>
            <ItemContainer items={cartItems}/>
            <TotalStyle>Total: <Total/>$</TotalStyle>
        </React.Fragment>
    );
};





export default ContainerCheckList;