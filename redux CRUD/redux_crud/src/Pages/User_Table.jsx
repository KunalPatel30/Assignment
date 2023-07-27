import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { ondelete, selectuser, singleselectuser, update } from '../Features/action';
import { toast } from 'react-toastify';

function User_Table() {

    const redirect = useNavigate();

    const dispatch = useDispatch();

    const {alluser,singleuser} = useSelector((state)=>state.user);

    useEffect(()=>{
        dispatch(selectuser());
    })

    const onclickdelete = (id) => {
        dispatch(ondelete(`http://localhost:3000/user/${id}`));
        toast.success('User Delete Successfull')
        dispatch(selectuser());
    }

    const onstatuschanger = (id) => {
        dispatch(singleselectuser(`http://localhost:3000/user/${id}`));
        if(singleuser.status == "Block"){
            dispatch(update(`http://localhost:3000/user/${id}`,{status:"Unblock"}))
            toast.success('User Unblock Successfull')
            dispatch(selectuser());
        }
        else{
            dispatch(update(`http://localhost:3000/user/${id}`,{status:"Block"}))
            toast.success('User Block Successfull')
            dispatch(selectuser());
        }
    }

    
  return (
    <div>
        <div className='container'>
            <h1 className='d-flex justify-content-center mt-5 '>User Data</h1>

            <table class="table table-dark table-striped mt-5">
                <thead>
                    <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Profile</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>  
                {
                    alluser.map((item, index, ent) => {
                        return (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td><img src={item.url} height={"50px"} alt="" /></td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            <td>{item.status}</td>
                            <td>
                                <button onClick={()=>{onstatuschanger(item.id)}} className="btn btn-danger btn-sm me-2"><i className="fa fa-user"/>{" "}{item.status}</button>
                                <button onClick={()=>{onclickdelete(item.id)}} className="btn btn-danger btn-sm me-2"><i className="fa fa-trash-o"/> Delete</button>
                                <button onClick={() =>{redirect('/edituser/'+ item.id)}} className='btn btn-primary btn-sm '><i className=" fa fa-edit"/> Edit</button>
                            </td>
                        </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default User_Table