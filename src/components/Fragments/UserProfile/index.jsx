import * as Feather from 'react-feather'
import styles from './userProfile.module.css'

export default function UserProfile({ src, alt = 'User profile', onClickLogOut = () => {} }) {
  return (
    <div className={styles.user_profile}>
      <img src={src} alt={alt} className={styles.user_profile__img} />
      <button className={styles.user_profile__btn_logout} aria-label="Log Out" onClick={onClickLogOut}>
        <Feather.LogOut className={styles.user_profile__btn_logout__icon} />
      </button>
    </div>
  )
}
