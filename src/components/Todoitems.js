import React from 'react'

const Todoitems = ({items}) => {
  return (
    <div className='container mt-4 mx-auto row justify-content-center w-50'>
        {
            items.map((value)=>{
               return(
                <div className='col-7 hover bg-success rounded-pill mt-3' key={value.id}>
                    <span className='fs-5 btn'>{value.name}</span>
                    <span className='float-end btn fs-4'><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
                    <span className='float-end btn fs-4'><i class="fa fa-trash" aria-hidden="true"></i></span>
                </div>) 
            })
        }
      
    </div>
  )
}

export default Todoitems
