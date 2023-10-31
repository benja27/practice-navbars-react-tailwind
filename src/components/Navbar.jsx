import { useEffect, useState } from 'react'
import {AiOutlineMenu } from 'react-icons/ai'
import {AiOutlineClose  } from 'react-icons/ai'
import {GiBrandyBottle} from 'react-icons/gi'

const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'projects',
    url: '/projects',
  },
  {
    id: 4,
    text: 'contact',
    url: '/contact',
  }
]


function Navbar() { 
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  const checkwidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkwidth)
    return () => {
      window.removeEventListener('resize', checkwidth)
    }
  }, [width])


  return (
    <div className={`${!isMenuOpen ? "bg-slate-500 flex justify-around" : "bg-slate-500 flex justify-around fixed w-full h-full items-center flex-col"}`} >

      <GiBrandyBottle className='text-3xl' />

      { !isMenuOpen && width > 768 ? (
        links.map(link => (
          <a href="" key={link.id} > {link.text} </a>
        ))
       ) : isMenuOpen && (
        links.map(link => (
           <a href="" className='text-white' key={link.id} > {link.text} </a>
        ))        
      )}

      {!isMenuOpen && width < 769 ? (
        <AiOutlineMenu className='text-3xl' onClick={() => setIsMenuOpen(true)} />
        ): isMenuOpen && (
          <AiOutlineClose className='text-3xl' onClick={() => setIsMenuOpen(false)} />
        )}      
    </div>
  )
}

export default Navbar