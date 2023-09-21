import React from 'react'

import Project from './Project'

function Portfolio() {
  return (
    <div className='container' id='portfolio' style={{backgroundColor: '#ededed'}}>
        <div className='portfolio-content align'>
          <div className='title'>
            <h1>Portfolio</h1>
          </div>
          <div className='portfolio-main'>
            <Project img={process.env.PUBLIC_URL + '/assets/dogs-in-the-forest.webp'} title={'Fake Store'} languages={['React', 'Node.js']} />
            <Project img={process.env.PUBLIC_URL + '/assets/dogs-in-the-forest.webp'} title={'Fake Store'} languages={['React', 'Node.js']} />
            <Project img={process.env.PUBLIC_URL + '/assets/dogs-in-the-forest.webp'} title={'Fake Store'} languages={['React', 'Node.js']} />
            <Project img={process.env.PUBLIC_URL + '/assets/dogs-in-the-forest.webp'} title={'Fake Store'} languages={['React', 'Node.js']} />
          </div>
        </div>
      </div>
  )
}

export default Portfolio