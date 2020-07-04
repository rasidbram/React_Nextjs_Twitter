import React from 'react'
import cn from 'classnames'
import styles from './photo.module.css'

function Photo({ src = "https://i.pinimg.com/originals/17/56/8f/17568fcd478e0699067ca7b9a34c702f.png", alt }) {
    return <div className={cn([styles.photo])} >
        <img className={styles.img} src={src} alt={alt} />
    </div>
}

export default Photo;
