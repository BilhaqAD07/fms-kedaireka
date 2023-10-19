import React from 'react'
import {
  Grid,
  Paper,
  Typography
} from '@mui/material'
import DataChart from '../DataChart/DataChart'
import { lineChartData } from '../mockData'

export interface ChartCardType {
  title: string
  value: string
  changeValue: string
}

export interface ChartProps {
  data?: ChartCardType
}

const Chart = (props: ChartProps) => {
  return (
    <div>
      <Grid container gap={2} className='flex'>
        <Paper className="block lg:flex px-4 py-8">
          <div className="chart max-w-full w-[100vh]">
            <Typography className='font-bold'>Status per Day</Typography>
            <DataChart type={'line'} data={lineChartData}/>
          </div>
        </Paper>
      </Grid>
    </div>
  )
}

export default Chart
