import * as Feather from 'react-feather'
import Button from '../../Elements/Button'
import styles from './itemList.module.css'

const ItemLists = ({ children }) => {
  return <div className={styles.item_lists}>{children}</div>
}

const List = ({
  src,
  alt,
  title = 'Hello World',
  description = '15 February 2024',
  priceStatus = '',
  price = 1000
}) => {
  return (
    <div className={styles.item_lists__list}>
      <div className={styles.item_lists__list__div}>
        <img src={src} alt={alt} className={styles.item_lists__list__div__img} />
        <div>
          <p className={styles.item_lists__list__div__title}>{title}</p>
          <p className={styles.item_lists__list__div__description}>{description}</p>
        </div>
      </div>
      <div className={styles.item_lists__list__div}>
        <span className={styles.item_lists__list__div__price}>
          {priceStatus === 'in' ? '+' : priceStatus === 'out' ? '-' : ''}$
          {price.toLocaleString('en-US', { currency: 'USD' })}
        </span>
        <Button
          color="transparent"
          height="36px"
          icon={<Feather.MoreVertical className={Button.IconClass} />}
          iconOnly
        />
      </div>
    </div>
  )
}

ItemLists.List = List

export default ItemLists
