import React, { useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'
import { darkOptions } from './Themes'
import { type ChartConfiguration } from 'chart.js'

const DataChart = (props: ChartConfiguration) => {
  const { data, options } = props
  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        ...props,
        options: {
          ...options,
          ...darkOptions
        }
      })
      return () => {
        chart.destroy()
      }
    }
  }, [data, options, props])
  return <canvas className='bg-white text-white' ref={chartRef} />
}
Chart.register(...registerables)

export default DataChart
