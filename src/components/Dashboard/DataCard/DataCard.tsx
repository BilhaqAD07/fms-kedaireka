import React from 'react'
import {
  IconButton,
  Paper,
  Tooltip,
  Typography
} from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

export interface DataCardProps {
  title: string
  value: string
  desc: string
}

const DataCard = (props: DataCardProps) => {
  const { title, value, desc } = props
  return (
    <div>
        <Paper className={'h-full relative p-4 bg-primary_blue dark:bg-secondary_dark text-white'} style={{ width: 'calc(100% - 0.1rem)' }}>
            <div className="header flex justify-center items-center">
                <Typography className=''>
                    {title}
                </Typography>
                <Tooltip className=''
                    title={
                        <Typography>
                            {`${desc} which is ${value}`}
                        </Typography>
                    }
                >
                    <IconButton>
                        <InfoOutlinedIcon className='text-white'/>
                    </IconButton>
                </Tooltip>
            </div>
            <Typography className='text-2xl'>
                {value}
            </Typography>
        </Paper>
    </div>
  )
}

export default DataCard
