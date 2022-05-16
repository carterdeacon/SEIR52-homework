import styled from 'styled-components';
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

function Search() {
    //we want the useState in this case to be a string because we are taking a input
    const[input, setInput] = useState("");
    //to allow us to navigate to the Searched Component when we hit enter without using a link, we use this function.
    const navigate = useNavigate();

    // on enter we want to load another page

    const submitHandler = (e) => {
        //by default, when we type in the input in the form below and hit enter to search,
        //the browser will automatically refresh by default. We don't want this we'd like to stay on the current page.
        //this will allow us to keep all our current information on the page, so we prefvent it with preventDefault.
        e.preventDefault();
        //this redirects us when we submit the form to the search path + the input from onChange
        navigate('/searched/'+input)
    };

  return (
      //When we submit the form, call this function
    <FormStyle onSubmit={submitHandler}>
        <div>
            {/* this gives us a icon */}
            <FaSearch></FaSearch>
            {/* We set the value as the string from useState */}
            {/* we add an event handler onChange that when we start typing,a function sets the input to e.target.value */}
            <input onChange={(e)=>setInput(e.target.value)} type="text" value={input} />
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0rem 20rem;
    position: relative;
    div{
        width: 100%;
        position: relative;
    }
    input{
        border:none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`

export default Search