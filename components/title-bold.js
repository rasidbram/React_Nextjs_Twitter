import React from 'react'

import styles from './title-bold.module.css'

function TitleBold({ Children }) {
    return <h2 className={styles.titleBold}>
        {Children}
    </h2>
}

export default TitleBold;
