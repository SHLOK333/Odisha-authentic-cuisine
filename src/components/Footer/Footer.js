import React from 'react'

import { SiGithub, SiLinkedin,SiInstagram } from "react-icons/si";
import './Footer.css'
const Footer = () => {

  return (
    <footer class = "Footer">
      <div class = "FooterContainer">
          <div class = "Row">
              <div class = "Footer-Column">
                  <h4>Odisha Cuisine Hub</h4>
                  <ul>
                      <li><a href = "https://github.com/2003khu" target="_blank" rel="noreferrer">Our Services</a></li>
                      <li><a href = "https://odishatourism.gov.in/content/tourism/en.html#immersiveOdisha" target="_blank" rel="noreferrer">Affiliate Partners</a></li>
                      <li><a href = "https://github.com/2003khu" target="_blank" rel="noreferrer">Feedback</a></li>
                  </ul>
              </div>

              <div class = "Footer-Column">
                  <h4>Get Help</h4>
                  <ul>
                      <li><a href = "https://github.com/2003khu" target="_blank" rel="noreferrer">FAQ</a></li>
                      <li><a href = "https://github.com/2003khu" target="_blank" rel="noreferrer">Contact Us</a></li>
                  </ul>
              </div>

              <div class = "Footer-Column">
                  <h4>Community</h4>
                  <ul>
                      <li><a href = "https://www.goya.in/blog/odia-cuisine-is-rooted-in-a-philosophy-of-minimalism" target="_blank" rel="noreferrer">Whatsapp Group</a></li>
                      <li><a href = "https://www.goya.in/blog/odia-cuisine-is-rooted-in-a-philosophy-of-minimalism" target="_blank" rel="noreferrer">Blogs</a></li>
                      <li><a href = "https://www.goya.in/blog/odia-cuisine-is-rooted-in-a-philosophy-of-minimalism" target="_blank" rel="noreferrer">Telegram Group</a></li>
                  </ul>
              </div>

              <div class = "Footer-Column">
                  <h4>Follow Us</h4>
                  <div class = "Social-Links">
                      <a href = "https://github.com/2003khu" target="_blank" rel="noreferrer"><SiGithub/></a>
                      <a href = "https://www.linkedin.com/in/a-sanjana-senapati-5756782a4/" target="_blank" rel="noreferrer"><SiLinkedin/></a>
                      <a href = "https://www.linkedin.com/in/a-sanjana-senapati-5756782a4/" target="_blank" rel="noreferrer"><SiInstagram/></a>
                  </div>
              </div>
          </div>
      </div>
  </footer>
  )
}

export default Footer