import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function SideNavbar() {
  const itemType = useSelector((state) => state.itemType);
  const dispatch = useDispatch();
  console.log(itemType);
  return (
    <div className='sideNavBarContainer'>
            <img src="https://images.slivcdn.com/UI_icons/sonyliv_new_revised_header_logo.png?h=40&w=40&t=c_fill&q=low&fr=webp" alt="" />
            <ul>
                <li style={{backgroundColor: itemType === 'moviesDb' ? '#fa4b00' : null}}>
                  <Link to='/dashboard' style={{textDecoration:'none'}}>Movies</Link>
                </li>
                <li style={{backgroundColor: itemType === 'tvShows' ? '#fa4b00' : null}}>
                  <Link to='newsPage' style={{textDecoration:'none'}}>TV Shows</Link>
                </li>
                <li style={{backgroundColor: itemType === 'sports' ? '#fa4b00' : null}}>
                  <Link to='sportsPage' style={{textDecoration:'none'}}>Sports</Link>
                </li>
            </ul>
            <button className='signOutBtn' type='button' onClick={() => dispatch({type: 'ADD_ADMIN', payload: null})}>Sign Out</button>
        </div>
  )
}

export default SideNavbar