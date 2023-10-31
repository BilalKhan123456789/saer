import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../Components//Main'
import HotelCardDetails from '../Components/HotelCardDetails'
import FoodPreview from '../Components/FoodPreview'


function Navigation() {
  return (
    <div>

<Routes>
    
    <Route  path='/' element={<Main/>}/>
    <Route path='/CardDetails' element={<HotelCardDetails/>} />
    <Route path='/FoodPreview' element={<FoodPreview/>} />

    </Routes>      
    </div>
  )
}

export default Navigation
