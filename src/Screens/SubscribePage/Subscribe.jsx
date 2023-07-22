import React from 'react'
import SubscribeTable from '../../Components/SubscribeTable/SubscribeTable'
import { useNavigate } from 'react-router-dom'

function Subscribe() {
    const nav = useNavigate()
  return (
    <div className='subscribeContainer'>
        <div className='imgContainer'>
            <img src="https://images.slivcdn.com/UI_icons/New_Final_Icons_30052020/liv_icon.png?t=c_fill&q=low&fr=webp" alt="img" />
            <button type='button' onClick={() => nav('/signin')}>Sign In</button>
        </div>
        <SubscribeTable />
    </div>
  )
}

export default Subscribe