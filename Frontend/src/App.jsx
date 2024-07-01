
import React from 'react'

import Home1 from './Home1'

import { Route, Routes } from 'react-router-dom'
import Courses from './course/Courses'
import Signup from './components/Signup'

const App = () => {
  return (
   <>
<div className='dark:bg-slate-900 dark:text-white'>
 <Routes>
<Route path='/' element={<Home1/>} />
<Route path='/course' element={<Courses/>} />

<Route path='/signup' element={<Signup/>} />
 </Routes>
 </div>
   
   </>
  )
}

export default App
