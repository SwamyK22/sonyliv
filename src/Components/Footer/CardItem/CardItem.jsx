import React from 'react'
import '../style.css'

function CardItem({list}) {
  return (
    <div className='cardItem'>
        {list?.map((x) => (<p key={x}>{x}</p>))}
    </div>
  )
}

export default CardItem