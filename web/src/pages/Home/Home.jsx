import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import MenuExplored from '../../components/MenuExplored/MenuExplored'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {
  const [category, setCategory] = useState("")
  return (
    <div className='home'>
        <Header/>
        <MenuExplored category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
    </div>
  )
}

export default Home