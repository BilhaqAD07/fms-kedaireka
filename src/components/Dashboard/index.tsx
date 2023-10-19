import React from 'react'
import DataRibbon from '@/components/Dashboard/Data Ribbon/DataRibbon'
import Chart from './Chart/Chart'

function Dashboard () {
  return (
    <div className="flex flex-col gap-4 z-0">
        <DataRibbon/>
        <Chart/>
    </div>
  )
}

export default Dashboard
