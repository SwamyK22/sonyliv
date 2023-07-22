import React from 'react'
import Input from '../../Components/Input/Input'
import { Form, Formik } from 'formik'
import axiosInstanceDb from '../../util/axiosDb/axiosInstanceDb'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function AddItem() {

  const itemType = useSelector((state) => state.itemType);

  const navigate = useNavigate()

  //Validation
  const validate = (values) => {
    const errors = {};
    if (!values.title) {
        errors.title = '...Required';
      }
    if(!values.imgUrl){
        errors.imgUrl = "...Required";
    }
    if(!values.rating){
        errors.rating = "...Required";
    } else if(!/^((10|\d{1})|\d{1}[.]\d{1})$/i.test(values.rating)){
      errors.rating = "Invalid input"
    }
    if(!values.overView){
        errors.overView = "...Required";
    }
      return errors;
  }


  //Add Item
  const addItem = async(item) => {
    const id  = new Date().valueOf();
    const newItem = {...item, id} 
    try {
      await axiosInstanceDb.post(itemType, newItem);
      if(itemType === 'moviesDb')navigate('/dashboard', { replace: true});
      if(itemType === 'tvShows')navigate('/dashboard/newsPage', { replace: true});
      if(itemType === 'sports')navigate('/dashboard/sportsPage', { replace: true});
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='addItemContainer'>
        <div className='formView'>
            <h3>Add New Item</h3>
          <Formik
          initialValues={{
            title:'',
            imgUrl:"",
            rating:"",
            overView:''
          }}
          validate={(values) => validate(values)}
          onSubmit={(values) => addItem(values)}
          >{({values, handleChange, handleSubmit, errors, touched}) => {
            if(itemType !== 'moviesDb') values.rating = 1;
            return (
              <Form>
            <Input name="title" onChange={handleChange} value={values.title} placeholder="Title"/>
            {errors.title && touched.title && (<p className='err'>{errors.title}</p>)}
            <Input name="imgUrl" onChange={handleChange} value={values.imgUrl} placeholder="Poster Url"/>
            {errors.imgUrl && (<p className='err'>{errors.imgUrl}</p>)}
            {itemType === 'moviesDb' && <> <Input name="rating" type='number' onChange={handleChange} value={values.rating} placeholder="Rating"/>
            {(errors.rating && touched.rating) ? (<p className='err'>{errors.rating}</p>): null} </>}
            <div className='inputContainer'>
              <label htmlFor="overView">Description</label>
              <textarea name="overView" onChange={handleChange} value={values.overView} rows={5} cols={30} placeholder='Description' className='inp'></textarea>
            </div>
            {(errors.overView && touched.overView) ? (<p className='err'>{errors.overView}</p>): null}
            <button type='submit' onSubmit={handleSubmit}>Add</button>
          </Form>  
            )
          }}</Formik>
         
        </div>
    </div>
  )
}

export default AddItem