import Header from "./Components/header"
import Footer from "./Components/footer"
import Image from "next/image"
import  Style  from "./page.module.css"

import { JetBrains_Mono } from "next/font/google"
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const jetbrians_mono = JetBrains_Mono ({
   subsets : ["latin"],
   weight : ["400", "500", "600"]
})

function Page() {
  return (
    <div className="  bg-backgroundcolor  " >
      {/* Header */}
       <Header />

     {/* Hero section */}
       <div className={` ${jetbrians_mono.className} ${Style.hero}  `}>
          {/* left section */}
           <div className={`${Style.left} `} >
             <Image className={`${Style.img}`}
              src="/images/dp2.webp" alt="Profile-pic" width={200} height={150} />
           </div>

        {/* Right section */}
           <div className={`${Style.right} `} > 
               <p className=" " >front-end developer</p>
               <h2 >Hello I am</h2>
               <h1 > Kabir Iqbal</h1>
               <p >I’m a passionate frontend developer specializing in Next.js,
                 React, and Tailwind CSS. With a strong focus on UI/UX Design, I build responsive, 
                user-friendly web applications that offer seamless experiences across devices. </p>
                <div className={`${Style.btnbox} `} >
                <button className={`${Style.btn} `} > Download Resume <MdOutlineFileDownload /> </button>
                <a href="https://github.com/Kabir-Iqbal" target="blank" > <button className={`${Style.icon} `} ><FaGithub  /></button> </a>
                <a href="https://www.linkedin.com/in/kabir-iqbal-8705722ba/" target="blank" > <button className={`${Style.icon} `} ><FaLinkedin /></button> </a>
                <a href="https://web.facebook.com/profile.php?id=100073063770870" target="blank" > <button className={`${Style.icon} `} > <FaFacebook /> </button> </a>
                <a href="" target="blank"> <button className={`${Style.icon} `} > <FaInstagram /></button> </a>
                </div>
           </div>

       </div>
       {/* Footer */}
           <Footer />
    </div>
  )
}

export default Page
