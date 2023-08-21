import React from 'react'

const Todoitems = ({items,deleted,edited}) => {
  return (
  <>
    {
      items.map((value)=>{
        return(
                 <div className='container mt-4 mx-auto row justify-content-center align-item-center w-50 bg-success rounded-pill' key={value.id}>
                <div className='col-6 fs-5 my-auto'><div className='align-middle'>{value.name}
                  </div>
                </div> 
                <div className="col-4 hover">
                    <span className='float-end btn fs-4' onClick={()=>{edited(value.id)}}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span>
                    <span className='float-end btn fs-4' onClick={()=>{deleted(value.id)}}><i className="fa fa-trash" aria-hidden="true"></i></span>
                </div>
                </div>)
            })
          }
          </>
      
  )
}

export default Todoitems
