import { type ChartConfiguration } from 'chart.js'

export const lightOptions: ChartConfiguration['options'] = {
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: '#d3d3d3'
      }
    },
    x: {
      grid: {
        color: '#d3d3d3'
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        color: '#000'
      }
    }
  }
}

export const darkOptions: ChartConfiguration['options'] = {
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(10,10,10, 0.2)'
      },
      ticks: {
        color: '#808080'
      }
    },
    x: {
      grid: {
        color: 'rgba(10,10,10, 0.2)'
      },
      ticks: {
        color: '#808080'
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        color: '#808080'
      }
    }
  }
}
