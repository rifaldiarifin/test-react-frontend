import { useEffect, useRef, useState } from 'react'
import styles from './inputCheckbox.module.css'
import * as Feather from 'react-feather'
import { predictClass } from '../../../utils/predictClass'

const InputCheckbox = ({ label = null, id, name, isChecked = false, value, callbackState = false, className }) => {
  const [check, setCheck] = useState(isChecked)
  const ref = useRef(false)
  const switchCheck = async () => {
    if (callbackState) {
      return await callbackState(check, setCheck)
    }
    setCheck(check ? false : true)
  }
  useEffect(() => {
    if (!ref.current) {
      setCheck(isChecked)
      return () => (ref.current = false)
    }
    return () => (ref.current = true)
  }, [isChecked])
  return (
    <label
      htmlFor={id}
      // className={`${styles.inputcheckbox} ${check === true ?  : check === 2 ? ' both' : ''}${className ? ' ' + className : ''}`}
      className={`${styles.inputcheckbox}${predictClass(() => check === true, styles.inputcheckbox_active)}${predictClass(() => className, className)}`}
    >
      <input
        type="checkbox"
        name={name}
        id={id}
        defaultValue={value}
        checked={check}
        onChange={switchCheck}
        aria-label={label}
        className={styles.inputcheckbox__input}
      />
      <span className={styles.inputcheckbox__checkbox}></span>
      <span
        className={`${styles.inputcheckbox__checkicon_1}${predictClass(() => check === true, styles.checkicon1_active)}`}
      >
        <Feather.Check className={styles.inputcheckbox__checkicon_1__icon} />
      </span>
      <span
        className={`${styles.inputcheckbox__checkicon_2}${predictClass(() => check === 2, styles.checkicon2_active)}`}
      >
        <Feather.Minus className={styles.inputcheckbox__checkicon_2__icon} />
      </span>
    </label>
  )
}

export default InputCheckbox
