import { Link } from 'react-router-dom'
import styles from './button.module.css'
import { predictClass } from '../../../utils/predictClass'

const Button = ({
  children,
  type = 'button',
  to = '/',
  id = null,
  onClick = () => {},
  style = 'fill',
  color = 'default',
  disabled = false,
  icon = null,
  iconOnly = false,
  after = null,
  width = null,
  height = null,
  ariaLabel = 'Button',
  padding = null,
  className = null
}) => {
  const styleSwitch = (style) => {
    switch (style) {
      case 'fill':
        return styles.btn_fill
      case 'regular':
        return styles.btn_regular

      default:
        return styles.btn_fill
    }
  }

  const colorSwitch = (color) => {
    switch (color) {
      case 'classic':
        return styles.btn_classic
      case 'default':
        return styles.btn_default
      case 'second':
        return styles.btn_second
      case 'success':
        return styles.btn_success
      case 'danger':
        return styles.btn_danger
      case 'warning':
        return styles.btn_warning
      case 'info':
        return styles.btn_info
      case 'transparent':
        return styles.btn_transparent

      default:
        return styles.btn_default
    }
  }

  const buttonClassName = () => {
    return `${styles.btn} ${styleSwitch(style)} ${colorSwitch(color)}${predictClass(() => iconOnly, styles.btn_icon)}${predictClass(() => disabled, styles.btn_disabled)}${predictClass(() => className, className)}`
  }

  switch (type) {
    case 'hyperlink':
      return (
        <Link
          to={to}
          className={buttonClassName()}
          id={id}
          onClick={(e) => onClick(e)}
          style={{ '--btn-height': height, '--btn-padding': padding, width, minWidth: width }}
          aria-label={ariaLabel}
        >
          {icon}
          <span>{children}</span>
          {after}
        </Link>
      )
    case 'link':
      return (
        <a
          href={to}
          className={buttonClassName()}
          id={id}
          onClick={(e) => onClick(e)}
          style={{ '--btn-height': height, '--btn-padding': padding, width, minWidth: width }}
          aria-label={ariaLabel}
        >
          {icon}
          <span>{children}</span>
          {after}
        </a>
      )

    default:
      return (
        <button
          type={type}
          className={buttonClassName()}
          id={id}
          onClick={(e) => onClick(e)}
          style={{ '--btn-height': height, '--btn-padding': padding, width, minWidth: width }}
          aria-label={ariaLabel}
          disabled={disabled}
        >
          {icon}
          <span>{children}</span>
          {after}
        </button>
      )
  }
}

const IconClass = styles.btn__icon

Button.IconClass = IconClass

export default Button
