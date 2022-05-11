import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import {motion} from "framer-motion"
import React from 'react'

function Recipe() {
   
  let params = useParams();
  //we are passing an object this time into useState not an object because we want to access the data in object form.
  const[details, setDetails] = useState({});
  const[activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () =>{
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
    const detailData = await data.json();
    //detailData is an object not an array
    setDetails(detailData);
  };

  useEffect(()=>{
    fetchDetails();
  },[params.name]);


  return (
    <DetailWrapper
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
      >
        {/* When we click on this button, set the state of activeTab to be instructions . We also attach a class, if activeTab is equal to ingredients, add a class of 'active' to it */}
        <Button className={activeTab === 'instructions'? 'active' : ''} onClick={()=>setActiveTab("instructions")}>Instructions</Button>
        {/* this applies the css class and lets us have a toggle effect */}
        <Button className={activeTab === 'ingredients'? 'active' : ''} onClick={()=>setActiveTab("ingredients")}>Ingredients</Button>
        {/* this is saying if the activeTab state is instructions, render everything in here: */}
        {activeTab === 'instructions' && (
            <div>
            {/* this basically allows us to get rid of any embedded html in the api string */}
            <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
            <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
          </div>
        )}
        {/* this is saying if activeTab has the state of ingredients, render everything under here (the ingredients) */}
        {activeTab === 'ingredients' &&(
            <ul>
            {/* map over the extendedIngredients array in the recipe object and list out the ingredients */}
            {details.extendedIngredients.map((ingredient)=>(
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled(motion.div)`
  margin-top: 10em;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2{
    margin-bottom: 2rem;
  }
  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul{
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;
const Info = styled(motion.div)`
  margin-left: 10rem;
`;

export default Recipe