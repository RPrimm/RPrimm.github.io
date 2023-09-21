import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

function Header({ scrollTo }) {
  const { t, i18n } = useTranslation()

  const changeLanguage = () => {
    if(buttonName === "English") {
      setButtonName("Deutsch")
      i18n.changeLanguage('en')
    } else {
      setButtonName("English")
      i18n.changeLanguage('de')
    }
  }

  const [buttonName, setButtonName] = useState(i18n.language === "en-US"?"Englsih":"Deutsch")

  return (
    <div className='header'>
      <div className='space'></div>
      <div className='header-content align'>
        <h1>Rocket Primm</h1>
        <div className='header-buttons'>
          <button onClick={() => {scrollTo('#home')}}>{t('header.home')}</button>
          <button onClick={() => {scrollTo('#about')}}>{t('header.about')}</button>
          <button onClick={() => {scrollTo('#skills')}}>{t('header.skills')}</button>
          <button onClick={() => {scrollTo('#portfolio')}}>{t('header.portfolio')}</button>
        </div>
      </div>
      <div className='extra'>
        <button className='language' type='submit' key={'en'} onClick={() => {changeLanguage()}}>{buttonName}
        </button>
      </div>
    </div>
  )
}

export default Header