import * as Feather from 'react-feather'
import styles from './pageNotFound.module.css'
import Button from '../../components/Elements/Button'

export default function PageNotFound() {
  return (
    <div className={styles.page_not_found}>
      <div className={styles.page_not_found__layout}>
        <div className={styles.page_not_found__layout__404}>
          4
          <Feather.Frown className={styles.page_not_found__layout__404__icon} />4
        </div>
        <p className={styles.page_not_found__layout__title}>Oops, Page not found!</p>
        <p className={styles.page_not_found__layout__p}>Sorry, the page you were looking for doesn&apos;t exist.</p>
        <Button
          type="link"
          to="/"
          color="info"
          ariaLabel="Go back"
          height="50px"
          padding="40px"
          className="font-size-16"
          icon={<Feather.ArrowLeft />}
        >
          Go back
        </Button>
      </div>
    </div>
  )
}
