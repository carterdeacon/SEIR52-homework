import React from 'react'
//imports an <a> tag 
import { Link } from 'react-router-dom';
export default function header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      {/* this is just an a tag. This turns the Header into a link either to the home page or the about page */}
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}