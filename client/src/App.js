//import Header from './components/Header';
import { SiNodedotjs, SiReact, SiJavascript, SiHtml5, SiCss3, SiPython, SiGithub } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import $ from 'jquery';


function App() {
  //Display html info on html icon hover
  $('.html')
    .on('mouseenter', () => {$('#html-info').show(); $('.skills-info').css('background-color', '#E34F26'); $('.skills-info-placeholder').hide();})
    .on('mouseleave', () => {$('#html-info').hide(); $('.skills-info').css('background-color', '#ededed'); $('.skills-info-placeholder').show()})
  //Display css info on css icon hover
  $('.css')
    .on('mouseenter', () => {$('#css-info').show(); $('.skills-info').css('background-color', '#1572B6'); $('.skills-info-placeholder').hide();})
    .on('mouseleave', () => {$('#css-info').hide(); $('.skills-info').css('background-color', '#ededed'); $('.skills-info-placeholder').show()})
  //Display javascript info on javascript icon hover
  $('.javascript')
    .on('mouseenter', () => {$('#javascript-info').show(); $('.skills-info').css('background-color', '#F7DF1E'); $('.skills-info-placeholder').hide();})
    .on('mouseleave', () => {$('#javascript-info').hide(); $('.skills-info').css('background-color', '#ededed'); $('.skills-info-placeholder').show()})
  //Display react info on react icon hover
  $('.java')
    .on('mouseenter', () => {$('#java-info').show(); $('.skills-info').css('background-color', '#3a75b0'); $('.skills-info-placeholder').hide();})
    .on('mouseleave', () => {$('#java-info').hide(); $('.skills-info').css('background-color', '#ededed'); $('.skills-info-placeholder').show()})
  //Display react info on react icon hover
  $('.python')
  .on('mouseenter', () => {$('#python-info').show(); $('.skills-info').css('background-color', '#fee362'); $('.skills-info-placeholder').hide();})
  .on('mouseleave', () => {$('#python-info').hide(); $('.skills-info').css('background-color', '#ededed'); $('.skills-info-placeholder').show()})  
  //Display node info on node icon hover
  $('.node')
    .on('mouseenter', () => {$('#node-info').show(); $('.skills-info').css('background-color', '#339933'); $('.skills-info-placeholder').hide();})
    .on('mouseleave', () => {$('#node-info').hide(); $('.skills-info').css('background-color', '#ededed'); $('.skills-info-placeholder').show()})
  //Display react info on react icon hover
  $('.react')
    .on('mouseenter', () => {$('#react-info').show(); $('.skills-info').css('background-color', '#61DAFB'); $('.skills-info-placeholder').hide();})
    .on('mouseleave', () => {$('#react-info').hide(); $('.skills-info').css('background-color', '#ededed'); $('.skills-info-placeholder').show()})

  return ( 
    <div className='App'>
      <div className='header'>
        <div className='header-content align'>
          <h1>Rocky Primm</h1>
          <div className='header-buttons'>
            <button>Home</button>
            <button>About</button>
            <button>Skills</button>
            <button>Portfolio</button>
            <button>Contact</button>
          </div>
        </div>
      </div>

      <div className='container' id='home'>
        <div className='home-content align'>
          <div className='message'>
            <h1>Hallo</h1>
          </div>
          <div className='art'>
            <h1>placeholder</h1>
          </div>
        </div>
      </div>

      <div style={{backgroundColor: '#ededed'}} className='container' id='about'>
        <div className='about-content align'>
          <div className='title'>
            <h1>About</h1>
          </div>
          <div className='about-main'>
            <div className='about-main-art'>
              Placeholder
            </div>
            <div className='about-main-text'>
              <h2>Rocky Primm</h2>
              <p style={{margin: 0}}>
                College senior majoring in computer science with a concentration in
                security. While my concentration is in security I have taken more interest
                in software development and full stack development. Looking to begin my
                career after my graduation in May 2024.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='skills-content align'>
          <div className='title'>
              <h1>Skills</h1>
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
                  I started learning basic web development languages early. Since then I have learned more dynamic and object
                  oriented languages like Python and Java. As I have gotten more interested
                  in full stack development I learned React and Node.js  
                </h3>
              </div>
              <div className='skill-info' id='html-info'>
                <h2>HTML</h2>
                <h3>I have been making websites since I was a kid and am well versed in HTML</h3>
                <p>Years of experience: 5+</p>
              </div>
              <div className='skill-info' id='css-info'>
                <h2>CSS</h2>
                <h3>I can comfortably create reactive websites using pure CSS</h3>
                <p>Years of experience: 5+</p>
              </div>
              <div className='skill-info' id='javascript-info' style={{'color': '#000'}}>
                <h2>Javascript</h2>
                <h3>I have used Javascript for many years to make websites and games</h3>
                <p>Years of experience: 5+</p>
              </div>
              <div className='skill-info' id='java-info'>
                <h2>Java</h2>
                <h3>React is my new main frontend framework and have built several sites with it</h3>
                <p>Years of experience: 5</p>
              </div>
              <div className='skill-info' id='python-info' style={{'color': '#000'}}>
                <h2>Python</h2>
                <h3>React is my new main frontend framework and have built several sites with it</h3>
                <p>Years of experience: 4</p>
              </div>
              <div className='skill-info' id='node-info'>
                <h2>Node.js</h2> 
                <h3>I have built several backends from to-do lists to stores using Node.js</h3>
                <p>Years of experience: 1</p>
              </div>
              <div className='skill-info' id='react-info' style={{'color': '#000'}}>
                <h2>React</h2>
                <h3>React is my new main frontend framework and have built several sites with it</h3>
                <p>Years of experience: 1</p>
              </div>
            </div>
          </div> 
        </div>
      </div>

      <div className='container' id='portfolio' style={{backgroundColor: '#ededed'}}>
        <div className='portfolio-content align'>
          <div className='title'>
            <h1>Portfolio</h1>
          </div>
          <div className='portfolio-main'>

            <div className='project'>
              <img src={process.env.PUBLIC_URL + '/dogs-in-the-forest.webp'} alt='ex'/>
              <div className='project-info'>
                <div className='project-top'>
                  <h3 className='font-m' style={{margin: 0}}>Fake Store</h3>
                  <div className='project-top-buttons'>
                    <button><SiGithub /></button>
                    <button>Check it out</button>
                  </div>     
                </div>
                <div className='project-footer'>
                  <div className='project-footer-languages font-s'>
                    <div className='p-react font-s'>React</div>
                    <div className='p-node'>Node.js</div>
                  </div>
                </div>
              </div> 
            </div>

          </div>
        </div>
      </div>




    </div>
  );
}

export default App;
