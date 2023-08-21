import React ,{useState,useEffect} from 'react'
import Todoitems from "./Todoitems"
const Todo = () => {
    const initial = ()=>{
       const lists =  localStorage.getItem("Todos");
       if(lists){
        return JSON.parse(lists);
       }else{
        return [ ];
       }
    }
    const [Inputdata,setInputdata]= useState("");
    const [items,setitems]= useState(initial);
    const [togglebtn,settogglebtn]=useState(false);
    const [Editele,setEditele]= useState("")
    const additems = ()=>{
        if(!Inputdata){
            alert("Please Enter Some value")
        }else if(Inputdata && togglebtn){
            settogglebtn(false);
            setInputdata(Inputdata);
            const updated = items.map((ele)=>{
                if(ele.id===Editele.id){
                    ele.name = Inputdata;
                    setInputdata("")
                }
                return ele
            })
            setitems(updated)
        }
        else{
            let up = {
                id: new Date().getTime().toString(),
                name: Inputdata
            }

            setitems([...items, up]);
            setInputdata("")
        }   
    }
    const deleted = (delid)=>{
        const updated = items.filter((ele)=>{
            return ele.id!=delid;
        })
        setitems(updated)
    }
    const edited = (editid)=>{
        const edit_item = items.find((ele)=>{
            return editid === ele.id;
        })
        setEditele(edit_item)
        settogglebtn(true);
        setInputdata(edit_item.name)
    }
    useEffect(()=>{
        localStorage.setItem("Todos",JSON.stringify(items))
    },[items])
  return (
    <>
    <div className='container'>
        <div className='text-center mt-5'>
            <h2 className='text-light fw-bold'>Todo List</h2>
        </div>
        <div className='mx-auto text-center py-4'>
            <input type="text" className='border border-2 border-primary rounded-pill w-25 py-2 px-3' value={Inputdata} onChange={(event)=>{setInputdata(event.target.value)}}
             placeholder='Enter the task'/>
            <button className='btn btn-primary mx-3' onClick={()=>{additems()}}>
                {togglebtn ===true ? <i className="fa fa-pencil-square-o" aria-hidden="true"></i>:<i className="fas fa-plus" aria-hidden="true"></i>}
                </button>
        </div>
    </div>
    <Todoitems items={items} deleted={deleted} edited = {edited}/>
    </>
  )
}

export default Todo
