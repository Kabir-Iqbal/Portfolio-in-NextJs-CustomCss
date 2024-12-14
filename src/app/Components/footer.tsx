import  Style  from "./footer.module.css"
import { JetBrains_Mono } from "next/font/google"

const jetbrians_mono = JetBrains_Mono ({
    subsets : ["latin"],
    weight : ["400", "500", "800"]
 })

function Footer() {
  return (
    <div className={` ${Style.footerbox}`} >
         <div>
            <h2 className={` ${jetbrians_mono.className}  ${Style.footer} `} >© 2024 My Website. All rights reserved.</h2>
         </div>
    </div>
  )
}

export default Footer
