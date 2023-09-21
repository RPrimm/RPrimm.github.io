import $ from 'jquery';
import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {

  const { t } = useTranslation()

  useEffect(() => {
    function onHover(ele, colour) {
      $(`.${ele}`)
        .on('mouseenter', () => {
          $(`#${ele}-info`).show(); 
          $('.skills-info').css('background-color', `${colour}`); 
          $('.skills-info-placeholder').hide();
        })
        .on('mouseleave', () => {
          $(`#${ele}-info`).hide(); 
          $('.skills-info').css('background-color', '#ededed'); 
          $('.skills-info-placeholder').show()
        })
    }
    onHover('html', '#E34F26')
    onHover('css', '#1572B6')
    onHover('javascript', '#F7DF1E')
    onHover('java', '#3a75b0')
    onHover('python', '#fee362')
    onHover('node', '#339933')
    onHover('react', '#61DAFB') 
  })
  
  function scrollTo(element) {
    $('html, body').animate({
      scrollTop: $(element).offset().top  - $('.header').height()
    }, 1000)
  }

  return ( 
    <div className='App'>
      <Header scrollTo={scrollTo} />
      <Home />
      <About />
      <Skills t={t}/>
      <Portfolio />
      <Footer scrollTo={scrollTo} t={t}/>
    </div>
  );
}

export default App;
