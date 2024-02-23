import React from 'react'
import logo from '../images/logo.svg'
import { socialLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'

export const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <img src={logo} class="nav-logo" alt="backroads" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        
        <PageLinks parentClass='nav-links' itemClass='nav-link' />

        <ul class="nav-icons">
            {socialLinks.map((link) =>{
                
                return(
                    <SocialLink key={link.id} {...link} itemClass='nav-icon' />
                )   
            })}
          
        </ul>
      </div>
    </nav>
  )
}
