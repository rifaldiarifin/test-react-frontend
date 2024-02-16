import Card from '../Fragments/Card'
import CoinStack from '../../assets/vecteezy_coin-stack.svg'
import CompanyLogo from '../Elements/CompanyLogo'
import logoWhite from '../../assets/react-white.svg'

export default function CardVisa({ styles }) {
  return (
    <Card className={styles.credit_card}>
      <span className={styles.credit_card__circle1}>
        <span className={styles.credit_card__circle1__span}></span>
      </span>
      <span className={styles.credit_card__circle2}>
        <span className={styles.credit_card__circle1__span}></span>
      </span>
      <img src={CoinStack} alt="Coin stack" width={200} height={100} className={styles.coinstack_creditcard} />
      <Card.Header className="align-itms-center">
        <CompanyLogo src={logoWhite} alt={'white logo'} />
        <span className="font-size-24 font-weg-700 font-italic">VISA</span>
      </Card.Header>
      <Card.Panel className="mrgn-t-auto">
        <div className="dsp-flex align-itms-end justify-between gap-10">
          <div>
            <span className="dsp-block mrgn-b-6 font-size-15 space-1">**** 9838</span>
            <p className="font-size-15">Jhon Demon</p>
          </div>
          <span className="dsp-block font-size-15 space-1">08/12</span>
        </div>
      </Card.Panel>
    </Card>
  )
}
