import React, { useEffect } from 'react'
import Item from '../../Components/DashboardItem/Item';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import laodSportsAction from '../../Redux/Action/thunkMiddleware/laodSportsAction';

function SportsPage() {
    const sports = useSelector((state) => state.sports);
    const nav = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(laodSportsAction())
        dispatch({type:'ADD_ITEM_TYPE', payload:'sports'});
    },[])
    
  return (
    <div className='dashBoardSubContainer'>
        <h2 className='mainTitle'>Sports</h2>
        {sports.map((x) => (<Item key={x.id} 
                            imgUrl={x.imgUrl} 
                            title={x.title}
                            overView={x.overView}
                            id={x.id}
                            type='DELETE_SPORTS'
                            />))}
            <div className='addContainer'>
              <button onClick={() => nav('/dashboard/addItem')}>Add New Item</button>
            </div>
    </div>
  )
}

export default SportsPage