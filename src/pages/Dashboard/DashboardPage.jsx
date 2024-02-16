import React, { Suspense } from 'react'
import * as Feather from 'react-feather'
import Button from '../../components/Elements/Button'
import DashboardUI from '../../components/Fragments/DashboardUI'
import { miniLineDataset } from '../../components/Fragments/MiniLineChart'
import { doughnutDataset } from '../../components/Fragments/SemiDoughnutChart'
import { barDataset } from '../../components/Fragments/BarChart'
import styles from './dashboard.module.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import Card from '../../components/Fragments/Card'
import OutlineCard from '../../components/Fragments/OutlineCard'
import useDemoChatbox from '../../hooks/useDemoChatbox'
import { useDocumentTitle } from '../../hooks/useDocumentHandler'

const BalanceStatistics = React.lazy(() => import('../../components/DashboardFragments/BalanceStatistics'))
const CardVisa = React.lazy(() => import('../../components/DashboardFragments/CardVisa'))
const ListOfItemsToBuyAndChatbox = React.lazy(
  () => import('../../components/DashboardFragments/ListOfItemsToBuyAndChatbox')
)
const LastTransactions = React.lazy(() => import('../../components/DashboardFragments/LastTransactions'))
const Analytics = React.lazy(() => import('../../components/DashboardFragments/Analytics'))
const ExprensiveAndIncome = React.lazy(() => import('../../components/DashboardFragments/ExprensiveAndIncome'))
const LatestSpending = React.lazy(() => import('../../components/DashboardFragments/LatestSpending'))
const GoToPremium = React.lazy(() => import('../../components/DashboardFragments/GoToPremium'))
const LatestSpendingAside = React.lazy(() => import('../../components/DashboardFragments/LatestSpendingAside'))
const GoToPremiumAside = React.lazy(() => import('../../components/DashboardFragments/GoToPremiumAside'))
const ExprensiveAndIncomeAside = React.lazy(
  () => import('../../components/DashboardFragments/ExprensiveAndIncomeAside')
)

export default function DashboardPage() {
  useDocumentTitle()
  const { clientProfile, chatMessages, sendMessage, setChatMessages } = useDemoChatbox()
  // Init Chart.js
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
  )

  // Mini Line Chart Data
  const miniLineDatasetChart = {
    labels: ['l1', 'l2', 'l3', 'l4', 'l5', 'l6'],
    datasets: [miniLineDataset({ data: [2, 5, 6, 8, 4, 5] })]
  }

  // Bar Chart Data
  const barDatasetChart = {
    labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
    datasets: [
      barDataset({ label: 'Current', data: [60, 30, 28, 22, 20], backgroundColor: '#535CE5' }),
      barDataset({ label: 'Previous', data: [50, 25, 20, 18, 10], backgroundColor: '#9a9bff' })
    ]
  }

  // Analytics Data
  const analyticsData = {
    labels: ['Done', 'In Progress', 'To-do', 'None'],
    data: [120, 110, 100]
  }
  const analyticsDatasetChart = {
    dataset: [
      doughnutDataset({
        label: 'Analytics',
        data: [...analyticsData.data, 400 - analyticsData.data.reduce((prev, curr) => (prev = prev += curr), 0)],
        backgroundColor: ['#535CE5', '#FFA612', '#ED6046', '#f4f3ff']
      })
    ]
  }

  return (
    <>
      {/* Main > Header */}
      <DashboardUI.Main.Header>
        <div>
          <DashboardUI.Title title="Hello, Jhon .D" />
          <DashboardUI.TitleParag text="View and control your finances here!" />
        </div>
        <div className="dsp-flex align-itms-center gap-10">
          <Button
            color="default"
            icon={<Feather.Search width={'20px'} height={'20px'} className={Button.IconClass} />}
            iconOnly
            className={'full-rounded'}
          />
        </div>
      </DashboardUI.Main.Header>
      {/* End of Main > Header */}

      {/* Main > Body */}
      <DashboardUI.Main.Body>
        <DashboardUI.Main.Body.Dashboard>
          <DashboardUI.GridLayouts templateColms={'1fr 380px'}>
            <Suspense fallback={<Card.CardPreloader />}>
              <BalanceStatistics
                miniLineDatasetChart={miniLineDatasetChart}
                barDatasetChart={barDatasetChart}
                styles={styles}
              />
            </Suspense>

            <Suspense fallback={<Card.CardPreloader />}>
              <CardVisa styles={styles} />
            </Suspense>
          </DashboardUI.GridLayouts>
          <DashboardUI.GridLayouts>
            <Suspense fallback={<Card.CardPreloader />}>
              <ListOfItemsToBuyAndChatbox
                chatMessages={chatMessages}
                clientProfile={clientProfile}
                sendMessage={sendMessage}
                setChatMessages={setChatMessages}
              />
            </Suspense>
          </DashboardUI.GridLayouts>
          <DashboardUI.GridLayouts templateColms="1fr 330px">
            <Suspense fallback={<Card.CardPreloader />}>
              <LastTransactions />
            </Suspense>

            <Suspense fallback={<Card.CardPreloader />}>
              <Analytics analyticsData={analyticsData} analyticsDatasetChart={analyticsDatasetChart} styles={styles} />
            </Suspense>
          </DashboardUI.GridLayouts>

          <DashboardUI.GridLayouts className={DashboardUI.styles.aside_responsive}>
            <Suspense fallback={<Card.CardPreloader />}>
              <ExprensiveAndIncome styles={styles} />
            </Suspense>
          </DashboardUI.GridLayouts>
          <DashboardUI.GridLayouts className={DashboardUI.styles.aside_responsive}>
            <Suspense fallback={<Card.CardPreloader />}>
              <LatestSpending />
            </Suspense>
          </DashboardUI.GridLayouts>
          <DashboardUI.GridLayouts className={DashboardUI.styles.aside_responsive}>
            <Suspense fallback={<Card.CardPreloader />}>
              <GoToPremium />
            </Suspense>
          </DashboardUI.GridLayouts>
        </DashboardUI.Main.Body.Dashboard>
      </DashboardUI.Main.Body>
      {/* End of Main > Body */}

      {/* Main > Aside */}
      <DashboardUI.Aside>
        <Suspense fallback={<OutlineCard.CardPreloader />}>
          <ExprensiveAndIncomeAside styles={styles} />
        </Suspense>

        <Suspense fallback={<OutlineCard.CardPreloader />}>
          <LatestSpendingAside />
        </Suspense>

        <Suspense fallback={<OutlineCard.CardPreloader />}>
          <GoToPremiumAside />
        </Suspense>
      </DashboardUI.Aside>
      {/* End of Main > Aside */}
    </>
  )
}
