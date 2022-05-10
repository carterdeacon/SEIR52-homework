import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
//useParams lets us pull out keywords from the URL in the Browser like in rails when we use params
import {Link, useParams} from 'react-router-dom';



function Cuisine() {

    //this is a state
    const[cuisine, setCuisine] = useState([]);
    //we define params as useParams from the browser
    let params = useParams();


    const getCuisine = async (name) => {
        //we are passing into the API the type of cuisine name
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    //we need this to run every time we render a componenet. But because it's the same component this dosen't work when we click on a different link
    useEffect(() => {
        //when we pass in the type of cuisine, it goes to getCuisine and updates the API with the cuisine.
       //the state of Cuisine will have all the cuisines
        getCuisine(params.type)

        //params is the type: of cuisine which is an object with a key type and value cuisine
        console.log(params)
        //this is saying every time the params changes, the type changes too
    },[params.type]);

  return (
    <Grid
        // When we enter the page the opacity will transition from 0 to 1
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
    >
        {/* loop through the cuisines array */}
        {cuisine.map((item)=>{
            return(
                <Card key={item.id}>
                    <Link to={'/recipe/'+item.id}>
                        <img src={item.image} alt=""/>
                        <h4>{item.title}</h4>
                     </Link>
                </Card>
            )
        })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3em;
`;
//since we display grid and don't actually have any divs, we can put motion divs straight in to the Component
const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }

`

export default Cuisine