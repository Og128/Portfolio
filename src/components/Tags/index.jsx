import React from 'react'
import './styles.css'
import { useTranslation } from 'react-i18next'

function Tags(props) {

  const {t} = useTranslation(['transResumEN', 'transResumFR'])
  
  return (
    <div className='tags'>
        {t(`resume.skill.lists.${props.texte}`)}
    </div>
  )
}

export default Tags;
