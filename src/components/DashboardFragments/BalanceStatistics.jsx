import Card from '../Fragments/Card'
import MiniLineChart from '../Fragments/MiniLineChart'
import CoinStack from '../../assets/vecteezy_coin-stack.svg'
import * as Feather from 'react-feather'
import BarChart from '../Fragments/BarChart'
import Button from '../Elements/Button'

export default function BalanceStatistics({ styles, miniLineDatasetChart, barDatasetChart }) {
  return (
    <Card>
      <Card.Header>
        <Card.Title2 title="Balance statistics" />
        <Button
          color="classic"
          ariaLabel="Filter"
          padding="12px"
          height="38px"
          after={<Feather.ChevronDown className={Button.IconClass} />}
        >
          Filter
        </Button>
      </Card.Header>
      <Card.GridLayouts templateColms={'minmax(120px, 1fr) minmax(300px, 500px)'}>
        <Card.Panel className="dsp-flex fl-colm gap-8">
          <span className="font-size-32 font-weg-600">$564</span>
          <div className="box dsp-flex align-itms-center gap-6 line-bottom pad-b-10">
            <img
              src={CoinStack}
              alt="coin stack"
              width={40}
              height={34}
              className="pointer-none"
              style={{ filter: 'saturate(1.4)' }}
            />
            <p className="font-size-12 font-weg-500">Your total balance</p>
          </div>
          <div className="dsp-flex gap-4" style={{ width: '90px', height: '50px' }}>
            <MiniLineChart labels={miniLineDatasetChart.labels} datasets={miniLineDatasetChart.datasets} />
            <div className="dsp-flex align-itms-center gap-2 font-size-12">
              <Feather.ChevronUp width="14px" height="14px" />
              6%
            </div>
          </div>
          <p className="font-size-12 disabled-text-1">Always see your earnings updates</p>
        </Card.Panel>
        <Card.Panel className={`${styles.bar_balance} dsp-flex align-itms-center overflow-hidden`}>
          <div className="post-reltv" style={{ width: '100%', height: '180px' }}>
            <BarChart labels={barDatasetChart.labels} datasets={barDatasetChart.datasets} />
          </div>
        </Card.Panel>
      </Card.GridLayouts>
    </Card>
  )
}
