import * as Feather from 'react-feather'
import Button from '../Elements/Button'
import Card from '../Fragments/Card'
import SemiDoughnutChart from '../Fragments/SemiDoughnutChart'

export default function Analytics({ analyticsData, analyticsDatasetChart, styles }) {
  return (
    <Card>
      <Card.Header>
        <Card.Title title="Analytics" />
        <Button
          color="transparent"
          height="36px"
          icon={<Feather.MoreVertical className={Button.IconClass} />}
          iconOnly
        />
      </Card.Header>
      <Card.Panel>
        <div className="post-reltv pad-10">
          <div className="post-reltv overflow-hidden mrgn-x-auto" style={{ maxWidth: '300px', height: '150px' }}>
            <SemiDoughnutChart labels={analyticsDatasetChart.labels} datasets={analyticsDatasetChart.dataset} />
            <div className={styles.doughnut_percentage}>
              <span className={styles.doughnut_percentage__percent}>90%</span>
              <span className={styles.doughnut_percentage__description}>Done</span>
            </div>
          </div>
          <div className={styles.doughnut_percentage__labels}>
            {analyticsData.labels.map((label, index) =>
              index !== analyticsData.labels.length - 1 ? (
                <div
                  key={index}
                  className={styles.doughnut_percentage__labels__label}
                  style={{ '--bg-dot': analyticsDatasetChart.dataset[0].backgroundColor[index] }}
                >
                  {label}
                </div>
              ) : null
            )}
          </div>
        </div>
      </Card.Panel>
    </Card>
  )
}
