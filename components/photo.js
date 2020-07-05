import React from 'react'
import cn from 'classnames'
import styles from './photo.module.css'

function Photo({
  src = 'https://i.pinimg.com/originals/17/56/8f/17568fcd478e0699067ca7b9a34c702f.png',
  alt,
  size = 47
}) {
  return (
    <div className={cn([styles.photo])} style={{ width: size, height: size }}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  )
}

export default Photo
