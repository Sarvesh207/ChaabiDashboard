import React from 'react'
import Heading from '../Heading/Heading'

import LowerCards from "../LowerCards/LowerCards";
import MiddleCard from "../MiddleCard/MiddleCard";
import ProgressBar from "../MiddleCard/ProgressBar/ProgressBarChart";
import UpperCards from "../UpperCards/UpperCards";
const Dashboard = () => {
  return (
    <div>
        <Heading/>
        <UpperCards/>
        <MiddleCard/>
        <LowerCards/>
    </div>
  )
}

export default Dashboard