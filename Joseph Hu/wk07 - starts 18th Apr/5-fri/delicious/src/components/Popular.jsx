//type rfce and hit tab
//we don't need import react.

import { useEffect, useState } from "react"
//lets me create components specific for styling from installed styled-components
//it sort of lets you create functions are styled components that you attach to divs and stuff
import styled from "styled-components";
//This lets us use the carosel for images
import {Splide, SplideSlide} from '@splidejs/react-splide';
//this is some custom styling required for splide to work
import '@splidejs/splide/dist/css/splide.min.css';
//this lets us use links
import {Link} from 'react-router-dom'

//this is just a function that returns a dive and exports it
function Popular() {
  //think of popular as a variable and setPopular as the function that allows us to modify popular.
  //useState allows us to define what kind of data we have. In this case we have an array.
  const[popular, setPopular] = useState([])
  //to call the getPopular function when the component is rendered, run getPopular. The empty array says only run it when the componenet is rendered.
  //the array lets us pass in other information like a value when our app is updated.
  //eg: if we search for something and our search changes we can run getPopular again.
  useEffect(() => {
      getPopular();
  },[]);

  //this is like saying const getPopular = function(){return}
  //data is asynchronous, we need to make sure we wait until we have the data first before we render it
  const getPopular = async () => {
      //we can store our search into local storage. Check if there is anything in local storage in console.
      //if there is not anything in local storage then set the local storage
      const check = localStorage.getItem('popular');
      //THIS MEANS when we refresh the page it dosen't just go and fetch data from the API each time. It will use the data from local storage first.
      //if there is an item in local storage, then set it.
      if(check){
        //when we get the item back from local storage we need to parse it from a string to an array.
        setPopular(JSON.parse(check))
      }
      else{
      //else fetch the data
      // we fetch data from the api and add the API key from our .env file at the end. We also want 9 recipes (see spoonacular docs)
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
      //this converts the api data into a json format so we can actually access the information.
      //data is an object with a key recipes and an array of objects containing 9 rßecipes.
      const data = await api.json()
      //in local storage we can only save strings so if we need to take the array data.recipes, convert it into a string and saving it
      localStorage.setItem('popular',JSON.stringify(data.recipes))
      console.log(data)
      //we are using setPopular because in React we can't mutate variables. we CANNOT do popular = data
      //this is accessing the object from the api and 'recipies' which contains our array of 9 recipes
      setPopular(data.recipes)
      }
  }

  return (
    <div>
      {/* //we need to provide a key because React is a bit picky and wants a unique identifier for each item in case they get removed from the DOM
      //every time we loop over we need to add a key prop to the recipe. The id is in the object of recipe */}
      <Wrapper>
        <h3>Popular Picks</h3>
      {/* this is where our caorasel is */}
        <Splide
        // we can set how many images in the courasel we want to see per slide.
        //arrows gets ride of the arrows on either side, pagination means no bottom dots, drag lets us free drag and gap is gap between images
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: "5rem",
          }}
        >
          {/*we are maping over the 'popular' array in useState which contains the 9 recipe objects  */}
          {/*this is like writting popular.map(function(recipe){return recipie.title }) */}
          {popular.map((recipe)=>{
            return(
              // each card is a splide slide in the carosel. 
              <SplideSlide key={recipe.id}>
                <Card>
                  {/* turn each card into a link and add the recipe.id to each recipe path */}
                  <Link to={"/recipe/"+recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient/>
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
  </div>
  )
}
//THESE ARE MY STYLED COMPONENTS THAT I CAN USE AS CUSTOM STYLED DIVS
const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom:0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));

`
export default Popular