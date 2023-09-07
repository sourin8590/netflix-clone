import React from 'react'
import Tv from './Tv'
import Download from './Download'
import Watch from './Watch'
import Children from './Children'
import Question from './Question'
import FAQ from './FAQ'

const Body = () => {
  return (
      <div>
          <Tv />
          <Download />
          <Watch />
          <Children />
          <Question/>
          {/* <FAQ/> */}
    </div>
  )
}

export default Body