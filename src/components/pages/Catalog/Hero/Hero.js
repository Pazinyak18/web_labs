import React, {useState,useEffect} from "react";
import { HeroContainer,Select,Search,Wrapper,AboutContainer,LoadingWrraper} from './Hero.styles';
import About from '../About/About';
import ItemTemplate from '../../../itemTemplate/ItemTemplate.js';
import Loading from '../../../loading/Loading.js'
import ItemApi from '../../../util/Api/Api'

const Hero = () => {
	const[items,setItems] = useState(null);
	const[itemRender, setItemRender] = useState(items);
	
    useEffect(()=>{
        ItemApi.getAll()
        .then((result) => {setItems(result.data);setItemRender(result.data);} );
    },[]);


	return (
		<Wrapper>
			<HeroContainer>
				<Select>
					<FilterItem text="Filter: ">
						<DropdownMenu />
					</FilterItem>
				</Select>

				<Search>
		            <Input />
		            <ClearButton />
		            <SearchButton />
		    	</Search>
			</HeroContainer>

			<AboutContainer>
				{items ? <About items={itemRender}/>:<LoadingWrraper><Loading /></ LoadingWrraper>}
			</AboutContainer>

		</Wrapper>
	);


	function Input() {
		return (
			<input id="input" className="header__search__input" type="text" placeholder="Type something..."></input>
		);
	}

	function ClearButton() {
		return (
			<button id="clear__button" className="header__clear" type="button" onClick={()=>handleReset()}>Clear</button>
		);
	}

	function SearchButton() {
		return (
			<button id="search__button" className="header__search" type="button" onClick={()=>SearchImpl()}>Search</button>
		);
	}

	function handleReset() {
		setItemRender(items);
	  	Array.from(document.querySelectorAll("input")).forEach(
	    	input => (input.value = "")
	  	);
	  
	};

	function SearchImpl(){	
		const title = document.getElementById('input').value
		let temp = ItemApi.getSearch(title).then((result) => {setItemRender(result.data)});
	}

	function FilterItem(props) {
		const [open, setOpen] = useState(false);
		return(
			<li className="filter-item">
				<a href="#" className="filter-item__button" onClick={() => setOpen(!open)}>
					{props.text}
				</a>
				{open && props.children}
			</li>
		);
	}

	function DropdownMenu() {
		return (
			<div className="dropdown">
				<div className="menu-item">
					<button className="button_filter" onClick={()=>filterByPriceAsc()}>Sort by Price Descending</button>
					<button className="button_filter" onClick={()=>filterByPrice()}>Sort by Price Ascending</button>
				</div>
			</div>
		);
	}

	function filterByPriceAsc(){
		let sortedItems = Array.from(items);
	    let temp = ItemApi.getSortPrice().then((result) => {setItemRender(result.data.reverse())});
	}

	function filterByPrice(){
		let sortedItems = Array.from(items);
	    let temp = ItemApi.getSortPrice().then((result) => {setItemRender(result.data)});
	}

	
}

export default Hero;