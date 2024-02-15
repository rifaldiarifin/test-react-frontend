import styles from './companyLogo.module.css'

export default function CompanyLogo({ src, alt, className = null }) {
  return <img src={src} alt={alt} className={[styles.company_logo, className].join(' ')} />
}
