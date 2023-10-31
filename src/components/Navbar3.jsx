import React, { useEffect, useState } from 'react'
import {AiFillDropboxSquare} from "react-icons/ai"

let links = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "About",
    url: "/",
  },
  {
    id: 3,
    text: "Cart",
    url: "/",
  },
  {
    id: 4,
    text: "logOut",
    url: "/",
  },
  
]


function Navbar3() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  const toogleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const updateWidth = () =>{
    window.addEventListener("resize", e =>{
      setWidth(window.innerWidth)
    })
  }

  useEffect(()=>{
    updateWidth()
  },[width])




  return (


    <div className={`w-full text-white bg-slate-600 flex px-5 py-2 ${isMenuOpen ? "fixed top-0 h-full flex-col place-content-around items-center" : "place-content-between items-center"}`} >
      <i className='text-3xl fas fa-bolt' ></i>
      
      {
      links.map(ele =>(
        <a href="" className={`${width < 700 && !isMenuOpen ? "hidden":""}`} key={ele.id} >{ele.text}</a>
      ))
      }
      
      <i onClick={toogleMenu} className={`fas text-3xl cursor-pointer ${isMenuOpen ? "fa-times" : "fa-bars"} ${width > 700 ? "hidden" : ""}`} ></i>

    </div>
  )
}

export default Navbar3