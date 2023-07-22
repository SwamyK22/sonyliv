import React, { useCallback, useState } from 'react'
import Modal from './Modal';

function SearchModal() {
    const [showModal, setShowModal] = useState(false)

    const closeModal =useCallback(
        () => setShowModal(false),
      [],
    );

  return (
    <>
        <img onClick={() => setShowModal(true)} className='user' src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='23' height='23'%3e%3cg fill='none' fill-rule='evenodd' stroke='%23FFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.174' transform='translate(1.5 2)'%3e%3ccircle cx='8.152' cy='8.152' r='8.152'/%3e%3cpath d='M19.565 19.565l-5.652-5.652'/%3e%3c/g%3e%3c/svg%3e" alt="" />
        {showModal && <Modal closeModal={closeModal}/>}
    </>
  )
}

export default SearchModal