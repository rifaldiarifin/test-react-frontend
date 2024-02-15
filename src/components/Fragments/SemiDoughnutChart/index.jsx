import { Doughnut } from 'react-chartjs-2'

export const doughnutDataset = ({ label, data, backgroundColor }) => {
  return {
    label,
    data,
    backgroundColor
  }
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  rotation: -90,
  cutout: 64,
  circumference: 180,
  elements: {
    arc: {
      offset: 6,
      borderRadius: 10,
      borderWidth: 0
    }
  },
  plugins: {
    title: {
      display: false
    },
    legend: {
      display: false
    },
    tooltip: {
      backgroundColor: 'rgba(51, 51, 51, 0.5)',
      padding: 10,
      cornerRadius: 10,
      borderColor: 'rgba(255, 255, 255, 0.3)',
      borderWidth: '1',
      titleFont: {
        weight: 400,
        size: 12,
        family: 'MainFont'
      },
      callbacks: {
        title: (callback) => {
          return `${callback[0].label.length > 18 ? callback[0].label.substring(0, 15) + '...' : callback[0].label}`
        }
      },
      bodyFont: {
        family: 'SecondFont'
      }
    }
  }
}

const SemiDoughnutChart = ({ labels, datasets, style }) => {
  return <Doughnut options={options} data={{ labels, datasets }} style={style} />
}

export default SemiDoughnutChart
