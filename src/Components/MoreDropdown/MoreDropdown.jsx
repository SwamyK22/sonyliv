import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function MoreDropdown() {
    const [flag, setFlag] = useState(true)
    const list = ['Home', 'Movies', 'News', 'Sports'];

  return (
    <>
    <button onClick={() => setFlag(!flag)} className='moreBtn'>
        &#9776;
        </button>
        {flag && <div className='moreItem'>{
            list.map((x) => <Link key={x} to={x === 'Home' ? '/':x} className="li">{x}</Link>)
            }</div>}
   </>
  )
}

export default MoreDropdown