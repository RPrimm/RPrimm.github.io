import React from 'react'
import { SiGithub } from 'react-icons/si';
import { BsArrowRightSquareFill } from 'react-icons/bs'

function Project({ img, title, languages }) {
  return (
    <div className='project'>
        <img src={img} alt='ex'/>
        <div className='project-info'>
            <div className='project-top'>
                <h3 className='font-m' style={{margin: 0}}>Fake Store</h3>
                <div className='project-top-buttons'>
                <button><SiGithub /></button>
                <button><BsArrowRightSquareFill /></button>
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
  )
}

export default Project