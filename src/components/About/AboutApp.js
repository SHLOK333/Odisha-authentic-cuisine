import React, { useEffect } from 'react'
import './About.css'
import About from './About'
import Parallax from './Parallax'
import AboutData from '../../utility/AboutData'
import ChefData from '../../utility/ChefData'
const AboutApp = () => {
  useEffect(()=>{
    window.scroll({
      top : 0,
      behavior: "smooth"
    }
      
    )
  },[])
  return (
    <>
    <Parallax AboutData={AboutData[0]}/>
    <section class = "section section-light">
        <h2>History Of Odisha Cuisine 🤌</h2>
        <br/>
        <p>
             Odisha cuisine, rich and diverse, reflects the state's cultural heritage and geography. Influenced by ancient tribal communities and coastal resources, rice, lentils, and vegetables are staples. The Jagannath Temple in Puri significantly shapes traditional recipes, with its Mahaprasad offerings being central to Odia food culture. Mughal and British eras introduced new spices, meat dishes, and baking techniques, further diversifying the cuisine. Regional variations abound, with coastal areas favoring seafood and inland areas focusing on vegetarian dishes. Today, Odia cuisine blends traditional recipes with modern influences, preserving its rich heritage while appealing to a broader audience.
        </p>
    </section>
    <Parallax AboutData={AboutData[1]}/>
    <About ChefData={ChefData} />
    <Parallax AboutData={AboutData[2]}/>
    <section class = "section section-light">
        <h2>Cultural Heritage of Odisha</h2>
        <br/>
        <p>Odisha's cultural heritage is a rich tapestry woven from its ancient temples, vibrant festivals, and classical dance forms like Odissi. The state is known for its traditional arts and crafts, including Pattachitra paintings, silver filigree work, and intricate handloom textiles. The tribal communities of Odisha contribute to its cultural diversity with their unique customs, rituals, and dances. The cuisine of Odisha, with signature dishes like Dalma, Pakhala, and Chhena Poda, reflects the region's agricultural abundance and culinary creativity. Natural beauty adds to the allure, from the serene beaches of Puri to the lush forests of Simlipal, making Odisha a treasure trove of cultural and ecological richness.</p>
        <br/>
    
        
    </section>

    </>
  )
}

export default AboutApp