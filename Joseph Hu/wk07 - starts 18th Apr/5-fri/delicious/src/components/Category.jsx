//CHECK REACT ICONS
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
//CHECK GITHUB ICONS
import {GiNoodles, GiChopsticks} from "react-icons/gi";
import styled from "styled-components";
//This lets us create a react link tag without using an a tag because an a tag navigates away from a client side dom.
//The navlinks don't work UNLESS WE DO ROUTING. NavLink gives you a class of active that lets you add specific styling
import {NavLink} from 'react-router-dom'
import React from 'react'


function Category() {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <div>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </div>
        </SLink> 
        <SLink to={'/cuisine/American'}>
            <div>
                <FaHamburger/>
                <h4>American</h4>
            </div>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <div>
                <GiNoodles/>
                <h4>Thai</h4>
            </div>
        </SLink>
        <SLink to={'/cuisine/Japanese'}> 
            <div>
                <GiChopsticks/>
                <h4>Japanese</h4>
            </div>
        </SLink>
    </List>
  )
}
const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;
const SLink = styled(NavLink)`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right:2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131 );
    width: 6rem;
    height: 6rem;
    cursor: pointer; 
    transform: scale(0.8);

    h4{
        color: white;
        font-size: 0.8rem;
    }
    svg{
        color: white;
        font-size: 1.5rem;
    } 
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);

        svg{
            color: white;
        }
        h4{
            color: white;
        }
    }
`;

export default Category