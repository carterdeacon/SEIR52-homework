import React from 'react'
import Home from './Home'
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe"
//this lets us handle routes. BrowserRouter lets us use Routes in the Browser. Routes is like an intelligent Componenet that looks at the paths and decides which routes to render out.
import {Route, Routes, useLocation} from 'react-router-dom'
//we need to detect when the animation should fade in and fade out so we need to use animate presence. That way the page can fade out not just fade in.
import{AnimatePresence} from 'framer-motion'

//we are rendering home in Pages.
//Pages will contain all the Pages like Home, Search Items etc.
function Pages() {
  //this allows AnimatePresence exitBforeEnter to work!
  const location = useLocation();
  return (
    // We make a page, then add it to the routes of the Pages Component
    //exitBeforeEnter lets us fade out the current page we are on before the next page loads in
    <AnimatePresence exitBeforeEnter>
      {/* we pass in a location from above and key of location.pathname to let routes know where we are for exitBeforeEnter to work */}
      <Routes location={location} key={location.pathname}>
          {/* Home contains components Veggie and Popular */}
          {/* we can definte multiple Route Components here */}
          {/* I have a Route Component where if the route matches the '/' aka the HomePage, then render the element Home Compoenent*/}
          <Route path="/" element={<Home/>} />
          {/* we could just write the actual route and element but we want to make it dynamic so we add :type so it will always render the specific cuisine */}
          <Route path="/cuisine/:type" element={<Cuisine />} />
          {/* When we search for something take us to whatever we :search and render the Searched component */}
          <Route path="/searched/:search" element={<Searched />} />
          {/* this is actually going to be an id not really a :name because the api needs an id unique to the recipe */}
          <Route path="/recipe/:name" element={<Recipe/>} />
      </Routes>
    </AnimatePresence>
  )
}

export default Pages