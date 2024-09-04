import React from 'react'

export const Card = ({title, children , img}) => {
  return (
    <div className='w-[430px]  border-2 border-TextBlack rounded-3xl'>
      <div className='h-1/2 flex flex-col items-center justify-center py-5 mb-2'>
          <h3 className='font-semibold text-[36px] text-DeepPurple'>{title}</h3>
          <img src={img} alt = {title} width='330' className='border-2 rounded-lg border-DeepPurple mt-2'/>
      </div>
      <div className='h-1/2 rounded-b-3xl bg-AccentPurpleBord bg-opacity-25'>
          {children}
      </div>
    </div>
  )
}



export default Card;