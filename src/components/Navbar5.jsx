import React, { useEffect, useState } from 'react'

let Links = [
  {
    text: "Home",
    url: '/',
    id: 1
  },
  {
    text: "About",
    url: '/about',
    id: 2
  },
  {
    text: "Info",
    url: '/info',
    id: 3
  }
]



function Navbar5() {
  const [isOpen, setIsOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  const toogleMenu = () =>{
    setIsOpen(!isOpen)
  }

  useEffect(()=>{
    window.addEventListener('resize',e=>{
      setWidth(window.innerWidth)
    })
    
  },[])


  return (
    <div className={` bg-yellow-400 px-7 flex place-content-between w-full items-center ${isOpen && width < 700 ? "flex-col h-full fixed top-0  py-4":""}`} >

      <i className='fas fa-bolt text-3xl' ></i>

      {Links.map(l=>(
        <a href="" key={l.id} className={`${!isOpen && width < 700 ? "hidden":""}`}  >{l.text}</a>
      ))
      }


      <i onClick={toogleMenu} className={`fas ${width > 700 && "hidden"} cursor-pointer text-3xl ${isOpen ? "fa-times" :"fa-bars"}`} ></i>

    </div>
  )
}

export default Navbar5

