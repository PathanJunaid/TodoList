import React from 'react'

const Todoitems = ({ items, deleted, edited }) => {
  const colorChange = (e) => {
    e.target.classList.toggle('text-primary');
    // e.target.className.toggle('bg-success')
  }
  return (
    <>
    <div className="container">
      {
        items.map((value) => {
          return (
            <div className='mt-4 mx-auto row justify-content-center text-center align-item-center bg-light rounded-3' key={value.id}>
              <div className='col-7 fs-5 my-auto'>
                <div className='align-middle'>{value.name}</div>
              </div>
              <div className="col-5 hover">
                <span className='btn fs-4' onClick={() => { edited(value.id) }} >
                  <i className="fa fa-pencil-square-o" aria-hidden="true" onMouseOver={(event) => { colorChange(event) }} onMouseLeave={(event) => { colorChange(event) }}></i>
                </span>
                <span className='btn fs-4' onClick={() => { deleted(value.id) }} >
                  <i className="fas fa-trash" aria-hidden="true" onMouseOver={(event) => { colorChange(event) }} onMouseLeave={(event) => { colorChange(event) }}></i>
                </span>
              </div>
            </div>)
        })
      }

    </div>
    </>

  )
}

export default Todoitems
