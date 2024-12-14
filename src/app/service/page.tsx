import classNames from "classnames"
import Footer from "../Components/footer"
import Header from "../Components/header"
import { HiArrowDownRight } from "react-icons/hi2";
// Css
import  Style  from "./page.module.css";

import { JetBrains_Mono } from "next/font/google"


const jetbrians_mono = JetBrains_Mono ({
  subsets : ["latin"],
  weight : ["300", "400", "500"]
})


function Page() {
  return (
    <div className= { `${jetbrians_mono.className}, ${Style.body} `} >
      <Header />
     
     <div className={`${Style.mainserviceBox} `} >
         <div className=" my-2 group " >
              <div className={`${Style.servicebox} `}>
                  <p className={` ${Style.headingnumber} `} >1</p>
                  <p className="px-[25px] py-[25px] rounded-full group-hover:bg-yellow-300 bg-white  text-black " ><HiArrowDownRight /></p>
              </div>
              <h2 className={` ${Style.h2} group-hover:text-yellow-300 `} >Web Devlopment</h2>
              <p className="text-[16px]  " >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates alias voluptas iste eius neque numquam consequuntur quaerat officia
                 veritatis vel, aspernatur dicta soluta autem nulla fugit suscipit incidunt ipsam reprehenderit</p>
                <div className={`${Style.line}`}></div>
         </div>


         <div  className=" my-2 group ">
              <div className={`${Style.servicebox} `}>
                  <p  className={` ${Style.headingnumber} `}>2</p>
                  <p  className={`${Style.icons}  group-hover:bg-yellow-300 `} ><HiArrowDownRight /></p>
              </div>
              <h2 className={` ${Style.h2}  group-hover:text-yellow-300  `}>UI & UX Design</h2>
              <p className="text-[16px]" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates alias voluptas iste eius neque numquam consequuntur quaerat officia
                 veritatis vel, aspernatur dicta soluta autem nulla fugit suscipit incidunt ipsam reprehenderit</p>
                 <div className={`${Style.line}`}></div>
         </div>

         
         
         <div  className=" my-2 group " >        
              <div className={`${Style.servicebox} `}>
                  <p  className={` ${Style.headingnumber} `}>3</p>
                  <p  className={`${Style.icons} group-hover:bg-yellow-300 `}><HiArrowDownRight /></p>
              </div>
              <h2 className={` ${Style.h2} group-hover:text-yellow-300  `}>Logo Design</h2>
              <p className="text-[16px]" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates alias voluptas iste eius neque numquam consequuntur quaerat officia
                 veritatis vel, aspernatur dicta soluta autem nulla fugit suscipit incidunt ipsam reprehenderit</p>
                 <div className={`${Style.line}`}></div>
        </div>

         <div  className=" my-2 group ">
               <div className={`${Style.servicebox} `} > 
                  <p  className={` ${Style.headingnumber} `}>4</p>
                  <p className={`${Style.icons}  group-hover:bg-yellow-300`} ><HiArrowDownRight   /></p>
              </div>
              <h2 className={` ${Style.h2} group-hover:text-yellow-300 `}>SEO</h2>
              <p className="text-[16px]" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates alias voluptas iste eius neque numquam consequuntur quaerat officia
                 veritatis vel, aspernatur dicta soluta autem nulla fugit suscipit incidunt ipsam reprehenderit</p>
                 <div className={`${Style.line}`}></div>
         </div>
    </div>

    </div>
  )}
export default Page
