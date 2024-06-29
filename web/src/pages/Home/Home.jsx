import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import MenuExplored from '../../components/MenuExplored/MenuExplored'

const Home = () => {
  const [category, setCategory] = useState("")
  return (
    <div className='home'>
        <Header/>
        <MenuExplored category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home