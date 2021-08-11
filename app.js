const restaurants = [
	{
		name: 'Subway',
		id: 123,
		location: 'Hitesh city',
		rating: 4.1,
		ETA: 25,
		Tags: ['American' ,  'Healthy', 'FastFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
	{
		name: 'A2B',
		id: 124,
		location: 'Metro city',
		rating: 4.5,
		ETA: 20,
		Tags: ['Healthy', 'SouthIndianFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
	{
		name: 'KFC',
		id: 125,
		location: 'MG Road ',
		rating: 3.5,
		ETA: 21,
		Tags: ['NorthFood', 'Indian', 'FastFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
		
	},
	{
		name: 'New Restaurant',
		id: 126,
		location: 'HighWay Road',
		rating: 3.1,
		ETA: 20,
		Tags: ['American', 'FastFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
	{
		name: 'Lassi Shop',
		id: 127,
		location: 'Majestic city',
		rating: 3.3,
		ETA: 19,
		Tags: ['American', 'FastFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
	{
		name: 'Thalappakatti Biriyani',
		id: 128,
		location: 'Nungabakkam',
		rating: 3.1,
		ETA: 22,
		Tags: ['FastFood', 'SouthIndianFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
	{
		name: 'Hot Chips',
		id: 129,
		location: 'Sholiganallur',
		rating: 2.9,
		ETA: 21,
		Tags: ['American', 'Healthy', 'FastFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
	{
		name: 'Sangeetha Hotel',
		id: 130,
		location: 'Hitech city',
		rating: 3.6,
		ETA: 22,
		Tags: ['American', 'FastFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
	{
		name: 'Vasantha Bhavan',
		id: 131,
		location: 'new city',
		rating: 3.9,
		ETA: 25,
		Tags: ['Healthy', 'Veg', 'FastFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
		
	},
	{
		name: 'Sea Shell',
		id: 132,
		location: 'Anna Nagar',
		rating: 3.5,
		ETA: 19,
		Tags: ['American', 'FastFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
	{
		name: 'Saravana Bhavan',
		id: 133,
		location: 'Anna Nagar',
		rating: 1.5,
		ETA: 17,
		Tags: ['Healthy', 'Veg', 'FastFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
	{
		name: 'BBQ Nation',
		id: 134,
		location: 'T Nagar',
		rating: 4.2,
		ETA: 30,
		Tags: ['NorthFood', 'American', 'FastFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
	{
		name: 'McDonalds',
		id: 135,
		location: 'Roundtana',
		rating: 3.5,
		ETA: 18,
		Tags: ['American', 'FastFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
	{
		name: 'Akshayam',
		id: 136,
		location: 'Shanthi Colony',
		rating: 4.0,
		ETA: 18,
		Tags: ['Healthy', 'SouthIndianFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
	{
		name: "Domino's",
		id: 136,
		location: 'Shanthi Colony',
		rating: 4.2,
		ETA: 20,
		Tags: ['American', 'FastFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
]




const cards =  document.getElementById('cards')
const search =  document.getElementById('search-bar')
const sort =  document.getElementById('sort')
const type =  document.getElementById('type')

//Render the Cards

function renderingCards (filteredValue) {

	const restMap =  filteredValue.map((item)=>{
		
		 return `
					 
				 <div class="card">
						<div class="card-image card-1"></div>
						<h3> ${item.name}</h3>
						<p> Rating:  ${item.rating}</p>
						<p> ETA :  ${item.ETA}</p>
						<p>  ${item.Tags}</p>
						<input type='submit' value='Add to ❤' onclick = "addToFav(${item.id}); 
						this.disabled = true;" class = "click" />
				 </div>
 			 `     
	})
		cards.innerHTML=restMap;
 }

//Adding the Functionality to Search

	let target = [];
	search.addEventListener('input' , (e)=>{
	target = e.target.value;
	const filteredValue =  restaurants.filter((restaurant)=>{
			return restaurant.name.toLowerCase().includes(target.toLowerCase())
	})
	console.log(filteredValue);
	renderingCards(filteredValue)
	})
		

//Sorting restaurants based on Rating , ETA

  sort.addEventListener('input' , sortValue)

   function sortValue (event){
		if (event.target.value === "Rating"){
			const sorting = restaurants.sort((a ,b)=>{
			return b.rating -  a.rating
			})
			renderingCards(sorting)	
			console.log(sorting);
			}else if (event.target.value === 'ETA')
			{
			const sortVal =  restaurants.sort((a,b)=>{
			return a.ETA - b.ETA
			})
			renderingCards(sortVal)
			console.log(sortVal);
			}}



    //Sorting restaurants via Food Type Tag
   
	type.addEventListener('input' , tagsValue)
   function tagsValue (event){
     
		let val = event.target.value;
		const filter =  restaurants.filter((fil)=>{
			return fil.Tags.join('|').toLowerCase().split('|').includes(val.toLowerCase())
		})

		console.log(filter);
	    renderingCards(filter)
   }

//Adding Functionality to Favorite Button
	let add = [];
	function addToFav(id){

		const value =  restaurants.filter((item)=>{
		return item.id === id
			
		})
		add = add.concat(value);
		console.log(value);
		
		localStorage.setItem('cart', JSON.stringify(add))
		this.disabled = true;

}


//Adding Functionality to Show Favorites Button

 function showFavorite (){
	
	let retrievedObject = localStorage.getItem('cart');
	let parse = JSON.parse(retrievedObject);
	if (parse === null){
		alert ('No Favorites Restaurants Yet')
	} else  {
		renderingCards(parse)        
	}}

	//RenderCall

	renderingCards(restaurants)

	
 
 