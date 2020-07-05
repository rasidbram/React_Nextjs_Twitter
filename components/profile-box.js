import React from 'react'
import cn from 'classnames'
import styles from './profile-box.module.css'
import Photo from './photo'
import { ArrowBottom } from './icons'
import Button from './button'
import TextBody from './text-body'

function ProfileBox({ flat = false, name = 'Jack Fire', slug = 'jack12' }) {
  return (
    <Button className={cn([styles.box])}>
      <Photo size={39} />
      {!flat && (
        <>
          <div className={styles.body}>
            <TextBody bold={true}>{name}</TextBody>
            <TextBody className={styles.slug}>@{slug}</TextBody>
          </div>
          <ArrowBottom className={styles.icon} />
        </>
      )}
    </Button>
  )
}

export default ProfileBox
