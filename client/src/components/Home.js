import React from 'react'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()
  return (
    <div className='container' id='home'>
        <div className='home-content align'>
          <div className='message'>
            <h1>{t('home.hello')}</h1>
          </div>
          <div className='art'>
            <h1>placeholder</h1>
          </div>
        </div>
      </div>
  )
}

export default Home