import React from 'react'
import CountUp from 'react-countup'

const DetailCard = ({ textColor = 'text-secondary-700', count, countsFor }) => {
  return (
    // <div className=' shadow-lg flex flex-col text-center rounded-lg p-2'>
    //   <span className={`pt-4 pb-2 font-bold text-2xl  ${textColor}`}>
    //     {count}
    //   </span>
    //   <span className='select-none'>{countsFor}</span>
    // </div>
    <div className=' shadow-lg flex flex-col text-center rounded-lg p-2'>
      <CountUp start={0} end={count} delay={0} duration={1}>
        {({countUpRef})=>(<span ref={countUpRef} className={`pt-4 pb-2 font-bold text-2xl  ${textColor}`}></span>)}
      </CountUp>
      <span className='select-none'>{countsFor}</span>
    </div>
  )
}

export default DetailCard
