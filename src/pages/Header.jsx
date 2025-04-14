import  {  useState } from 'react'

import {  FaBars, FaTimes} from 'react-icons/fa'

import SearchBar from '../components/SearchBar'
import Nav from '../components/NavLinks'
import { Link } from "react-router-dom";
function Header() {
 
  const [menuOpen,setMenuOpen]=useState(false)

  return (
    <header className='flex  justify-between items-center w-full p-2'>
      <div className='flex gap-3 items-center flex-1'>
      <Link to="/">
        <div className=' sm:text-2xl  font-bold text-green-400'>
          FOOD
        </div>
        </Link>
       <SearchBar/>
      </div>
      <div className="block lg:hidden ">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-green-400  text-xl mt-2"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    </header>
  )
}

export default Header
