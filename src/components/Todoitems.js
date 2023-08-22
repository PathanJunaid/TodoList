import React, { useState } from 'react'

const Todoitems = ({items,deleted,edited}) => {
  const [hover,sethover]=useState('bg-light')
  const colorChange = (e)=>{
    e.target.classList.toggle('text-primary');
    console.log("1")
    // e.target.className.toggle('bg-success')
  }
  return (
  <>
    {
      items.map((value)=>{
        return(
                 <div className='container mt-4 mx-auto row justify-content-center align-item-center w-50 bg-light rounded-pill' key={value.id}>
                <div className='col-6 fs-5 my-auto'><div className='align-middle'>{value.name}
                  </div>
                </div> 
                <div className="col-4 hover">
                    <span className='float-end btn fs-4' onClick={()=>{edited(value.id)}} >
                      <i className="fa fa-pencil-square-o" aria-hidden="true" onMouseOver={(event)=>{colorChange(event)}} onMouseLeave={(event)=>{colorChange(event)}}></i>
                      </span>
                    <span className='float-end btn fs-4' onClick={()=>{deleted(value.id)}} >
                      <i className="fas fa-trash" aria-hidden="true" onMouseOver={(event)=>{colorChange(event)}} onMouseLeave={(event)=>{colorChange(event)}}></i>
                      </span>
                </div>
                </div>)
            })
          }
          </>
      
  )
}

export default Todoitems
