import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Item from '../../Components/DashboardItem/Item';
import { useNavigate } from 'react-router-dom';
import laodNewsAction from '../../Redux/Action/thunkMiddleware/loadNewsAction';

function NewsPage() {
    const news = useSelector((state) => state.news);
    const nav = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(laodNewsAction());
        dispatch({type:'ADD_ITEM_TYPE', payload:'tvShows'});
    },[])
  return (
    <div className='dashBoardSubContainer'>
        <h2 className='mainTitle'>TV Shows</h2>
        {news.map((x) => (<Item key={x.id} 
                            imgUrl={ x.imgUrl} 
                            title={x.title}
                            overView={x.overView}
                            id={x.id}
                            type='DELETE_NEWS'
                            />))}
            <div className='addContainer'>
              <button onClick={() => nav('/dashboard/addItem')}>Add New Item</button>
            </div>
    </div>
  )
}

export default NewsPage