import styles from './circleLoader.module.css'

export default function CircleLoader({ size = 'medium' }) {
  const switchSize = () => {
    switch (size) {
      case 'small':
        return styles.circle_small
      case 'medium':
        return styles.circle_medium
      case 'large':
        return styles.circle_large
      default:
        return styles.circle_medium
    }
  }
  return <span className={`${styles.circle_loader} ${switchSize(size)}`}></span>
}
