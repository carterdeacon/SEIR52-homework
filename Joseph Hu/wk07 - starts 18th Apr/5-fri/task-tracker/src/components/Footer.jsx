import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <p>Copyright &copy; 2022</p>
        {/* <a href="/about">About</a> */}
        <Link to='/about'>About</Link>
    </footer>
  )
}

export default Footer