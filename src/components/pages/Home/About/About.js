import React,{useState,useEffect} from "react";
import {AboutContainer, ViewMore,LoadingWrraper} from './About.styles';
import ItemTemplate from '../../../itemTemplate/ItemTemplate.js';
import Loading from '../../../loading/Loading.js';
import ItemApi from '../../../util/Api/Api'

const About = () => {
    const[items,setItems] = useState([]);
    const[count, setCount] = useState(3);

    useEffect(()=>{
        ItemApi.getAll().then((result) => {
            setItems(result.data)
        });
    },[]);

    return (
        <AboutContainer>
            {items.length != 0 ? <ItemContainer items={items} count={count}/>:<LoadingWrraper><Loading /></ LoadingWrraper>}
            <ViewMore>
              {count < items.length ? <button className="view_more" onClick={() => setCount(count + 3)}>Show More</button> : <div></div>}
            </ ViewMore>
        </AboutContainer>
    );
}

function ItemContainer(props) {
  return(
        <ul className="aside_item">
            {
                props.items.slice(0, props.count).map(((item,keyId) => (
                    <li key={keyId}>
                        <ItemTemplate
                        id={keyId}  
                        name={item.name}
                        location={item.location}
                        amountOfLivestock={item.amountOfLivestock}
                        powerOfVents={item.powerOfVents}
                        price={item.price}
                        />
                    </li>)))
            }
        </ul>
    );
}

export default About;