import React from 'react'
import './styles.css'
import { useTranslation } from 'react-i18next'

function Tags(props) {

  const { t, i18n } = useTranslation();
  const currentNamespace =
      i18n.language === 'en' ? 'transResumEN' : 'transResumFR';
  
  return (
    <div className='tags'>
        {t(`${currentNamespace}:resume.skill.lists.${props.texte}`)}
    </div>
  )
}

export default Tags;
