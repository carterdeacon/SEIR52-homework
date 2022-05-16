import { useEffect, useState } from "react"
//lets me create components specific for styling from installed styled-components
//it sort of lets you create functions are styled components that you attach to divs and stuff
import styled from "styled-components";
//This lets us use the carosel for images
import {Splide, SplideSlide} from '@splidejs/react-splide';
//this is some custom styling required for splide to work
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from 'react-router-dom'

function Veggie() {

  const[veggie, setVeggie] = useState([])

  useEffect(() => {
      getVeggie();
  },[]);


  const getVeggie = async () => {

      const check = localStorage.getItem('veggie');

      if(check){

        setVeggie(JSON.parse(check))
      }
      else{
      //we modify the api url from Popular.jsx to have a vegetarian tag according to the spoonacular docs
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
     
      const data = await api.json()
    
      localStorage.setItem('veggie',JSON.stringify(data.recipes))
      console.log(data)

      setVeggie(data.recipes)
      }
  };
  return (
<div>
      {/* //we need to provide a key because React is a bit picky and wants a unique identifier for each item in case they get removed from the DOM
      //every time we loop over we need to add a key prop to the recipe. The id is in the object of recipe */}
      <Wrapper>
        <h3>Our Vegetarian Picks</h3>
      {/* this is where our caorasel is */}
        <Splide
        // we can set how many images in the courasel we want to see per slide.
        //arrows gets ride of the arrows on either side, pagination means no bottom dots, drag lets us free drag and gap is gap between images
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: "5rem",
          }}
        >
          {/*we are maping over the 'popular' array in useState which contains the 9 recipe objects  */}
          {/*this is like writting popular.map(function(recipe){return recipie.title }) */}
          {veggie.map((recipe)=>{
            return(
              // each card is a splide slide in the carosel
              <SplideSlide key={recipe.id}>
                <Card>
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

export default Veggie