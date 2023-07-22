import React, { useEffect } from 'react'
import Item from '../../Components/DashboardItem/Item'
import { useDispatch, useSelector } from 'react-redux'
import laodStateAction from '../../Redux/Action/thunkMiddleware/laodStateAction';
import { useNavigate } from 'react-router-dom';
function DashBoard() {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const nav = useNavigate()

  

  useEffect(() => {
    dispatch(laodStateAction());
    dispatch({type:'ADD_ITEM_TYPE', payload:'moviesDb'});
  },[])
  return (
    
        <div className='dashBoardSubContainer'>
            <h2 className='mainTitle'>Movies</h2>
            {movies.map((x) => (<Item key={x.id} 
                            imgUrl={x.imgUrl} 
                            title={x.title}
                            overView={x.overView}
                            rating={x.rating}
                            id={x.id}
                            type='DELETE_MOVIE'
                            />))}
            <div className='addContainer'>
              <button onClick={() => nav('addItem')}>Add New Item</button>
            </div>
        </div>
    
  )
}

export default DashBoard