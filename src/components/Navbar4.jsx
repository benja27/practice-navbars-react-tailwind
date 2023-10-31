import React, { useEffect, useState } from 'react'

const links = [
  {
    text : "Home",
    url : "/",
    id : 1,
  },
  {
    text : "About",
    url : "/about",
    id : 2,
  },
  {
    text : "Info",
    url : "/info",
    id : 3,
  },
]

function Navbar4() {
  const [isMenuOpen, setmenuOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(()=>{
    addEventListener("resize",e=>{
      setWidth(window.innerWidth)
    })
  },[])


  const toogleMenu = () => {
    setmenuOpen(!isMenuOpen)
  }
  
  return (
    <div className={`text-white flex px-5 justify-between bg-slate-600 ${width < 700 && isMenuOpen ? "flex-col fixed top-0 h-full w-full items-center":""}`} >

      <i className='fas cursor-pointer fa-bolt text-3xl' ></i>

      { isMenuOpen && width > 700 || isMenuOpen && width < 700  ? (  
        links.map(l =>(
          <a href={l.url} key={l.id} >{l.text}</a>
        ))
        ) : (
          links.map(l =>(
            <a className={`${width < 700 && !isMenuOpen ? "hidden":"" }`} href={l.url} key={l.id} >{l.text}</a>
          ))
        )
      }

      <i onClick={toogleMenu} className={`cursor-pointer fas text-3xl ${isMenuOpen ? "fa-times" : "fa-bars"}  ${width > 700 && "hidden"}      `} ></i>
    </div>
  )
}

export default Navbar4