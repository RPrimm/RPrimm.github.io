import React from 'react'
import { SiNodedotjs, SiReact, SiJavascript, SiHtml5, SiCss3, SiPython } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

function Skills({ t }) {
  return (
    <div className='container' id='skills'>
        <div className='skills-content align'>
          <div className='title'>
              <h1>{t('skills.title')}</h1>
          </div>
          <div className='skills-main'>
            <div className='icons'>
              <div className='html'><SiHtml5 /></div>
              <div className='css'><SiCss3 /></div>
              <div className='javascript'><SiJavascript /></div>
              <div className='java'><FaJava /></div>
              <div className='python'><SiPython /></div>
              <div className='node'><SiNodedotjs /></div>
              <div className='react'><SiReact /></div>
            </div>
            <div className='skills-info'>
              <div className='skills-info-placeholder' style={{color: '#000'}}>
                <h3>
                  {t('skills.description')}
                </h3>
              </div>
              <div className='skill-info' id='html-info'>
                <h2>HTML</h2>
                <h3>{t('skills.html')}</h3>
                <p>{t('skills.year')} 5+</p>
              </div>
              <div className='skill-info' id='css-info'>
                <h2>CSS</h2>
                <h3>{t('skills.css')}</h3>
                <p>{t('skills.year')} 5+</p>
              </div>
              <div className='skill-info' id='javascript-info' style={{'color': '#000'}}>
                <h2>Javascript</h2>
                <h3>{t('skills.javascript')}</h3>
                <p>{t('skills.year')} 5+</p>
              </div>
              <div className='skill-info' id='java-info'>
                <h2>Java</h2>
                <h3>{t('skills.java')}</h3>
                <p>{t('skills.year')} 5</p>
              </div>
              <div className='skill-info' id='python-info' style={{'color': '#000'}}>
                <h2>Python</h2>
                <h3>{t('skills.python')}</h3>
                <p>{t('skills.year')} 4</p>
              </div>
              <div className='skill-info' id='node-info'>
                <h2>Node.js</h2> 
                <h3>{t('skills.node')}</h3>
                <p>{t('skills.year')} 1</p>
              </div>
              <div className='skill-info' id='react-info' style={{'color': '#000'}}>
                <h2>React</h2>
                <h3>{t('skills.react')}</h3>
                <p>{t('skills.year')} 1</p>
              </div>
            </div>
          </div> 
        </div>
      </div>
  )
}

export default Skills