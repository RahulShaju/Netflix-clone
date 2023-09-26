import React from 'react'

import LoggedInHeader from './LoggedInHeader'
import useNowplayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'


const Browse = () => {
  useNowplayingMovies()
  return (
    <div>
<div className='fixed z-20 bg-black bg-opacity-10 text-white'>
     <LoggedInHeader/>
      
      {/* <SecondaryContainer/> */}
    </div>
    <div >
    <MainContainer/>
    </div>
    </div>
    
  )
}

export default Browse
