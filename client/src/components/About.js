import React from 'react'
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { useTranslation } from 'react-i18next';


function About() {
  const { t } = useTranslation()
  return (
    <div style={{backgroundColor: '#ededed'}} className='container' id='about'>
        <div className='about-content align'>
          <div className='title'>
            <h1>{t('about.title')}</h1>
          </div>
          <div className='about-main'>
            <div className='about-main-art'>
              <img src='assets/programmer.png'></img>
            </div>
            <div className='about-main-text'>
              <h2>Rocky Primm</h2>
              <p style={{margin: 0}}>
                {t('about.description')}
              </p>
              <div className='about-icons'>
                <SiGithub className='about-icon' onClick={() => {window.location.href='https://github.com/RPrimm'}}/>
                <SiLinkedin className='about-icon' onClick={() => {window.location.href='https://www.linkedin.com/in/rocketprimm/'}} />
              </div>
             </div>
          </div>
        </div>
      </div>
  )
}

export default About