import Footer from "../Components/footer"
import Header from "../Components/header"
import  Style  from "./page.module.css"
import { JetBrains_Mono } from "next/font/google"
const jetbrians_mono = JetBrains_Mono({
    subsets : ["latin"],
    weight : ["400", "500", "600"]
})


function Page() {
    return (
      <div className="bg-backgroundcolor" >
        <Header />
      <div className={` ${jetbrians_mono.className} w-[90%] md:w-[70%] mx-auto  my-14 `} >
          

        <div  className={`${Style.formbox}`} >
         <form action="post" className={`${Style.form} `} >
          <p >Name:</p>
          <input type="text" id="name" name="name" placeholder="name"  required />
          <p >Email :</p>
          <input  type="email" id="email" name="email" placeholder="email" required />
          <p > Message : </p>
          <textarea  name="message" id="message" placeholder="message"  rows={3} cols={23} required />

          <a href=" kabirhussain0343837@gmail.com"  ><button type="submit" className={`${Style.btn} `}  >Submit</button> </a>
         </form>
        </div> 

      </div>
        <Footer />
      </div>
    )
  }
  
  export default Page