import { days } from '@/app/lib/helper/Utils'

export const lineChartData = {
  labels: days({ count: 7 }),
  datasets: [
    {
      label: 'Temperature (℃)',
      data: [30, 29, 34, 35, 32, 28, 23],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: '#808080',
      tension: 0.1
    },
    {
      label: 'Humidity (%)',
      data: [40, 22, 45, 72, 56, 40, 80],
      fill: false,
      borderColor: 'rgb(255,100,50)',
      backgroundColor: '#808080',
      tension: 0.1
    }
  ]
}
