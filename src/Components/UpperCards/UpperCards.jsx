import React from 'react'
import Card from './Card_1/Card'
import Card2 from './Card_2/Card2'
import Card3 from './Card_3/Card3'
import Card4 from './Card_4/Card4'
import './UpperCards.css'


const UpperCards = () => {
  return (
    <div className='cards'>
        <Card/>
        <Card2/>
        <Card3/>
        <Card4/>

    </div>
  )
}

export default UpperCards