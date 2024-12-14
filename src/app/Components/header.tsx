"use client"
import  Style  from "./header.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { JetBrains_Mono } from "next/font/google"
import { useState } from "react"
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const jetbrians_mono = JetBrains_Mono ({
    subsets : ["latin"],
    weight : ["400", "500", "800"]
 })

function Header() {

 const pathname = usePathname()   /// Current path leny k leye 

 const isactive = (path :string)=> pathname === path;

 const [isdropdown , setisdropdown] = useState(false);

 const togglebutn =()=>{
   setisdropdown(!isdropdown)
 }

 


  return (
    <div>
      <nav className={` ${jetbrians_mono.className} ${Style.Nav}   `} >
           <h2 className="text-2xl" >Portfolio  <span className="text-yellow-400 text-3xl ml-2  "> . </span> </h2>
           <div className={` ${Style.btnbox} `} >
           <ul className={`   ${isdropdown? `${Style.navopens}` : " "}  ${Style.rightbuttonbox}   `} >
            <li  className={` btn   ${isactive ("/") ? "active"  : "" } `} > <Link href="/"> Home  </Link>  </li>
            <li   className={` btn  ${isactive ("/resume") ? "active"  : "" } `}> <Link  href="/resume" > Resume </Link>  </li>
            <li className={` btn  ${isactive ("/service") ? "active"  : "" } `}> <Link href="/service" > Service </Link>   </li>
            <li className= {`btn  ${isactive ("/projects") ? "active"  : "" } `} > <Link href="/projects"  > Projects </Link> </li>
            <li className= {` btn  ${isactive ("/contact") ? "active" : "" } `}  > <Link href="/contact" > Contact </Link> </li>
           </ul>
           <p className= {`${Style.submitbox}`}>
                <Link href="/contact" > <button  className={` ${Style.submitbutn} `} type="button"> hire me </button> </Link> 
            </p>
            <div className={`${Style.menuicons} `} >
              {!isdropdown? 
            <button className="" onClick={togglebutn} > <FaBarsStaggered /> </button>
            :
            <button className="z-10" onClick={togglebutn} > <IoMdClose /> </button>
              }
            </div>
           </div>
      </nav>
    </div>
  )
}

export default Header
