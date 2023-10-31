import React from 'react'
import { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiFillAmazonCircle} from 'react-icons/ai'
import {AiFillDollarCircle} from 'react-icons/ai'


function Navbar2() {
  const [ismenuopen, setmenuopen] = useState(false)

  const tooglemenu = () =>{
    setmenuopen(!ismenuopen)
  }


  return (
    <div className={`w-full f-full ${ismenuopen ? "" : ""}`} >      
      <ul className={`w-full px-3 text-white bg-cyan-700 ${ismenuopen ? "flex flex-col h-full place-content-around items-center fixed" : "flex place-content-between"}`} >        
        <li >
          <AiFillAmazonCircle className='text-3xl' />
        </li>
        <li className={`${ismenuopen ? "" : "hidden"}`} >
          <a href="#">Home</a>
        </li>
        <li className={`${ismenuopen ? "" : "hidden"}`} >
          <a href="#">About</a>
        </li>
        <li className={`${ismenuopen ? "" : "hidden"}`} >
          <a href="#">{ismenuopen ? " ----open-----" :"false"}</a>
        </li>
        <li className={`${ismenuopen ? "" : "hidden"}`} >
          <a href="#">About</a>
        </li>
        <li onClick={tooglemenu}  className={`${ismenuopen ? "hidden" : ""}`} >
          <AiOutlineMenu className='text-3xl cursor-pointer' onClick={()=>{}} />      
        </li>
        <li onClick={tooglemenu} className={`${ismenuopen ? "" : "hidden"}`} >
          <AiOutlineClose className='text-3xl cursor-pointer' />
        </li>
      </ul>
      
    </div>
  )
}

export default Navbar2