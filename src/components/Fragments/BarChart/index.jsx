import { Bar } from 'react-chartjs-2'

const options = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    bar: {
      borderRadius: 4
    }
  },
  scales: {
    y: {
      grid: {
        display: false
      },
      beginAtZero: true,
      ticks: {
        callback(value) {
          return `$${parseInt(value).toLocaleString('en-US', { currency: 'USD' })}`
        },
        font: {
          family: 'Montserrat'
        }
      }
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
        font: {
          family: 'Montserrat'
        }
      }
    }
  },
  layout: {
    padding: 0
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
        family: 'Montserrat'
      },
      bodyFont: {
        family: 'Montserrat'
      },
      callbacks: {
        label: (tooltipItem) => {
          return `${tooltipItem.dataset.label}: $${parseInt(tooltipItem.raw).toLocaleString('en-US', {
            currency: 'USD'
          })}`
        }
      }
    }
  }
}

export const barDataset = ({ label, data, backgroundColor }) => {
  return {
    label,
    data,
    categoryPercentage: 0.8, // here
    // maxBarThickness: 40,
    barPercentage: 0.9, // here
    fill: {
      target: 'origin',
      above: 'rgba(253, 119, 255, .05)', // Area will be red above the origin
      below: 'rgb(0, 0, 255)' // And blue below the origin
    },
    backgroundColor
  }
}

export default function BarChart({ labels, datasets }) {
  return <Bar options={options} data={{ labels, datasets }} />
}
