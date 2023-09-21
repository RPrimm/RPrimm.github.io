import React from 'react'
import { SiGithub, SiLinkedin } from 'react-icons/si';


function Footer({ scrollTo, t }) {
  return (
    <div className='footer'>
      <div className='footer-content align'>
          <div className='footer-name'>
            <strong>Rocket Primm</strong>
            <div>Portfolio website</div>
          </div>
          <div className='footer-navigate'>
            <strong>{t('footer.explore')}</strong>
            <div className='footer-navigate-pages'>
              <div className='footer-link' onClick={() => {scrollTo('#home')}}>{t('header.home')}</div>
              <div className='footer-link' onClick={() => {scrollTo('#about')}}>{t('header.about')}</div>
              <div className='footer-link' onClick={() => {scrollTo('#skills')}}>{t('header.skills')}</div>
              <div className='footer-link' onClick={() => {scrollTo('#portfolio')}}>{t('header.portfolio')}</div>
            </div>
          </div>
          <div className='footer-connect'>
            <strong>{t('footer.find')}</strong>
            <div className='footer-connect-icons'>
              <SiGithub className='footer-link' onClick={() => {window.location.href='https://github.com/RPrimm'}}/>
              <SiLinkedin className='footer-link' onClick={() => {window.location.href='https://www.linkedin.com/in/rocketprimm/'}} />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer