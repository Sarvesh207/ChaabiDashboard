import React from 'react'
import ProgressBarChart from './ProgressBar/ProgressBarChart'
import PieChart from './PieChart/PieChart'
import './MiddleCards.css'

const MiddleCard = () => {
  return (
    <div className='cardsMiddle container'>
        <PieChart/>
        <ProgressBarChart/>
    </div>
  )
}

export default MiddleCard