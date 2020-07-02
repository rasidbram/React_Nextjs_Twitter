import React from 'react'

import styles from './button.module.css'

function Button({ children, ...props }) {
  return (
    <button type="button" className={styles.Button} {...props}>
      {children}
    </button>
  )
}

export default Button
