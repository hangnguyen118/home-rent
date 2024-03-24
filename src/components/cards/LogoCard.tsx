import React from 'react'

export type Props = {
  name: string
}
const LogoCard: React.FC<Props> = ({name}) => {
  return (
  <div className='m-2 rounded'>
      <h3 className='w-44 py-8 font-semibold italic text-2xl text-primaryContainer border-primaryContainer border-2 hover:text-purple'>{name}</h3>
    </div>
  )
}

export default LogoCard;
