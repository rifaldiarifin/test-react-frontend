import { Line } from 'react-chartjs-2'

const options = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    point: {
      pointStyle: false
    },
    line: {
      tension: 0.4
    }
  },
  scales: {
    y: {
      display: false
    },
    x: {
      display: false
    }
  },
  plugins: {
    legend: {
      position: "'top' as const"
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart'
    },
    tooltip: false
  }
}

export const miniLineDataset = ({ data, borderColor = '#535CE5', backgroundColor = 'rgba(255, 99, 132, 0.5)' }) => {
  return {
    data,
    borderColor,
    backgroundColor
  }
}

export default function MiniLineChart({ labels, datasets }) {
  return <Line options={options} data={{ labels, datasets }} />
}
