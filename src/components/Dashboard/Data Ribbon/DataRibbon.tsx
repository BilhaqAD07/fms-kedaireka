import React from 'react'
import { Grid } from '@mui/material'
import DataCard from '../DataCard/DataCard'

function DataRibbon () {
  return (
    <div>
        <Grid container gap={2} className='flex text-center grid-cols-2 md:grid-cols-4'>
            <Grid>
                <DataCard
                    title={'Temperature'}
                    value={'32 ℃'}
                    desc={
                        'This card shows your Temperature sensor status'
                    }
                />
            </Grid>
            <Grid>
                <DataCard
                    title={'Humidity'}
                    value={'30 %'}
                    desc={
                        'This card shows your Humidity sensor status'
                    }
                />
            </Grid>
            <Grid>
                <DataCard
                    title={'Temperature'}
                    value={'32 ℃'}
                    desc={
                        'This card shows your Temperature sensor status'
                    }
                />
            </Grid>
            <Grid>
                <DataCard
                    title={'Humidity'}
                    value={'30 %'}
                    desc={
                        'This card shows your Humidity sensor status'
                    }
                />
            </Grid>
        </Grid>
    </div>
  )
}

export default DataRibbon
