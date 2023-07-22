import React from 'react'
import { useDispatch } from 'react-redux';
import { movieDeleteAction } from '../../Redux/Action/movies/moviesAction';


function Item(props) {
  const { imgUrl, title, overView, rating, id, type } = props;
  const dispatch = useDispatch();

  const deleteItem = (id, type) => {
    dispatch(movieDeleteAction(id, type))
  }
  return (
    <div className='itemContainer'>
        <img className='titleImg' src={imgUrl} alt="poster"/>
        <div className='itemDiscription'>
            <h5 className='itemTitle'>{title}</h5>
            <h6>Description:</h6>
            <p>{overView}</p>
            {rating && <p className='rating'><span>Rating: </span>{rating}</p>}
        </div>
        <button onClick={() => deleteItem(id, type)}>delete</button>
    </div>
  )
}

export default Item