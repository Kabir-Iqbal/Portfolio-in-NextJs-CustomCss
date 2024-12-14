import  Style  from "./page.module.css";
import Image from "next/image";
import Header from "../Components/header"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { JetBrains_Mono } from "next/font/google";
const jetbrians_mono = JetBrains_Mono ({
  subsets : ["latin"],
  weight : ["400", "500", "600"]
})

function Page() {
    return (
      <div className="bg-backgroundcolor " >
        <Header />
         
        
   <div className={` ${jetbrians_mono.className} ${Style.body} `}>
        <h2 className={`${Style.mainheading} `}>PROJECTS</h2>
        <div className={`${Style.projectbox} `} >

          <div className={`${Style.card}`} >
          <Image className={`${Style.img}`} 
           src="/images/todo.jpeg"
            width={200} 
            height={200}
             alt="Todo-pic" /> 

            <h2>TO DO</h2>
            <div className={`${Style.iconbox} `}>
            <a href="https://github.com/Kabir-Iqbal" target="blank" > <button className={`${Style.icon} `} ><FaGithub  /></button> </a>
            <a href="https://www.linkedin.com/in/kabir-iqbal-8705722ba/" target="blank" > <button className={`${Style.icon} `} ><FaLinkedin /></button> </a> 
            </div>
             </div>

         <div className={`${Style.card}`}  > 
         <Image className={`${Style.img}`}  src="/images/clacu.jpg" width={200} height={200} alt="claculator pic" /> 
            <h2 >CALCULATOR</h2>
            <div className="flex gap-4 absolute bottom-2 left-1 ">
            <a href="https://github.com/Kabir-Iqbal" target="blank" > <button className={`${Style.icon} `} ><FaGithub  /></button> </a>
            <a href="https://www.linkedin.com/in/kabir-iqbal-8705722ba/" target="blank" > <button className={`${Style.icon} `}><FaLinkedin /></button> </a> 
          </div>
             </div>


             <div className={`${Style.card}`} > 
             <Image className={`${Style.img}`} src="/images/timer.webp" width={200} height={200} alt="Timer pic" />
            <h2>TIMER</h2>
            <div className={`${Style.iconbox} `}>
            <a href="https://github.com/Kabir-Iqbal" target="blank" > <button className={`${Style.icon} `} ><FaGithub  /></button> </a>
            <a href="https://www.linkedin.com/in/kabir-iqbal-8705722ba/" target="blank" > <button className={`${Style.icon} `}><FaLinkedin /></button> </a> 
            </div>
             </div>


             <div className={`${Style.card}`}  > 
             <Image className={`${Style.img}`}  src="/images/portfolioimg.jpeg" width={200} height={200} alt="portfolio-pic" />  
            <h2>PORTFOLIO</h2>
            <div className={`${Style.iconbox} `}>
            <a href="https://github.com/Kabir-Iqbal" target="blank" > <button className={`${Style.icon} `} ><FaGithub  /></button> </a>
            <a href="https://www.linkedin.com/in/kabir-iqbal-8705722ba/" target="blank" > <button className={`${Style.icon} `}><FaLinkedin /></button> </a> 
            </div>
             </div>


        </div>



          </div>
          </div>
    )
  }
  
  export default Page