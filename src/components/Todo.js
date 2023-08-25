import React, { useState, useEffect } from 'react'
import Todoitems from "./Todoitems"
const Todo = () => {
    const initial = () => {
        const lists = localStorage.getItem("Todos");
        if (lists) {
            return JSON.parse(lists);
        } else {
            return [];
        }
    }
    const [Inputdata, setInputdata] = useState("");
    const [items, setitems] = useState(initial);
    const [togglebtn, settogglebtn] = useState(false);
    const [Editele, setEditele] = useState("")
    const additems = () => {
        if (!Inputdata) {
            alert("Please Enter Some value")
        } else if (Inputdata && togglebtn) {
            settogglebtn(false);
            setInputdata(Inputdata);
            const updated = items.map((ele) => {
                if (ele.id === Editele.id) {
                    ele.name = Inputdata;
                    setInputdata("")
                }
                return ele
            })
            setitems(updated)
        }
        else {
            let up = {
                id: new Date().getTime().toString(),
                name: Inputdata
            }

            setitems([...items, up]);
            setInputdata("")
        }
    }
    const deleted = (delid) => {
        const status = window.confirm('Do you want to delete?')
        if (!status) {
            return 0;
        }
        const updated = items.filter((ele) => {
            return ele.id !== delid;
        })
        setitems(updated)
    }
    const edited = (editid) => {
        const edit_item = items.find((ele) => {
            return editid === ele.id;
        })
        setEditele(edit_item)
        settogglebtn(true);
        setInputdata(edit_item.name)
    }
    useEffect(() => {
        localStorage.setItem("Todos", JSON.stringify(items))
    }, [items])
    return (
        <>
            <div className='container'>
                <div className='text-center mt-5'>
                    <h2 className='text-light fw-bold'>Todo List</h2>
                </div>
                <div className='row flex-lg-row  text-center py-4 justify-content-center align-items-center'>
                    <div className='col-10 col-lg-5'>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" value={Inputdata} onChange={(event) => { setInputdata(event.target.value) }}
                                placeholder='Enter the task' aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span class="input-group-text btn btn-primary" onClick={() => { additems() }} id="basic-addon2">{togglebtn === true ? <i className="fa fa-pencil-square-o" aria-hidden="true"></i> : <i className="fas fa-plus" aria-hidden="true"></i>}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Todoitems items={items} deleted={deleted} edited={edited} />
        </>
    )
}

export default Todo
