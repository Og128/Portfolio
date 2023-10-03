import React from 'react'
import './styles.css'
import data from '../../locales/fr/resume.json'

function Tags(props) {

  const resumeData = data.resume.skill.lists[props.texte]
  
  return (
    <div className='tags'>
        {resumeData}
    </div>
  )
}

export default Tags;
