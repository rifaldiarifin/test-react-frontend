import styles from './itemInfo.module.css'

const ItemInfo = ({ children }) => {
  return <div className={styles.item_info}>{children}</div>
}

const Item = ({ src, alt, title = 'Hello World', description = '15 February 2024' }) => {
  return (
    <div className={styles.item_info__info}>
      <div className={styles.item_info__info__div}>
        <img src={src} alt={alt} className={styles.item_info__info__div__img} />
        <div>
          <p className={styles.item_info__info__div__title}>{title}</p>
          <p className={styles.item_info__info__div__description}>{description}</p>
        </div>
      </div>
    </div>
  )
}

ItemInfo.Item = Item
export default ItemInfo
