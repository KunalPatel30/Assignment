import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { insert } from '../Features/action';
import { toast } from 'react-toastify';

function Sign_Up() {

    const redirect = useNavigate();

    const dispatch = useDispatch();

    const [formvalue, setFormvalue] = useState({
        id:"",
        name:"",
        email:"",
        mobile:"",
        url:"",
        password:"",
        status:""
    });

    const onchange = (e) => {
        setFormvalue({...formvalue,id:new Date().getTime().toString(),status:"Unblock",[e.target.name]:e.target.value});
    };

    function validate() {
        var result = true;
        if(formvalue.name == "" || formvalue.name == null){
          result = true;
          toast.error('please enter your name!');
        }
        if(formvalue.email == "" || formvalue.email == null){
          result = false;
          toast.error("please enter your email!")
        }
        if(formvalue.mobile == "" || formvalue.mobile == null){
            result = false;
            toast.error("please enter your Mobile!")
        }
        if(formvalue.url == "" || formvalue.url == null){
            result = false;
            toast.error("please enter your URL!")
        }
        if(formvalue.password == "" || formvalue.password == null){
          result = false;
          toast.error("please enter your password!")
        }
        return result;
      };

      const onsubmit = async (e) => {
        e.preventDefault();
        if(validate()){
            dispatch(insert(`http://localhost:3000/user`,formvalue))
            toast.success("User Add Successfull");
            setFormvalue({...formvalue,name:"",email:"",mobile:"",url:"",password:""});
            return redirect('/login')
        }
      }

  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
            <symbol id="bootstrap" viewBox="0 0 118 94">
                <title>Bootstrap</title>
                <path fillRule="evenodd" clipRule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" />
            </symbol>
        </svg>
        <div className="container">
            <Link to="#" className="d-flex align-items-center justify-content-center mt-5 mb-lg-0 text-dark text-decoration-none">
                <svg className="bi me-5" width={60} height={52} role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap" /></svg>
            </Link>
            <form >
                <h1 className='d-flex justify-content-center mt-3 '>Sign Up</h1>

                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <input type="text" className="form-control p-2 col-6 mt-4" value={formvalue.name} onChange={onchange} name='name' id="name" placeholder="Enter Your Name" required="required"  />
                        <input type="email" className="form-control p-2 col-6 mt-3" value={formvalue.email} onChange={onchange} name='email' id="email" placeholder="Enter Your Email" required="required"  />
                        <input type="tel" className="form-control p-2 col-6 mt-3" value={formvalue.mobile} onChange={onchange} name='mobile' id="mobile" placeholder="Enter Your Mobile" required="required" />
                        <input type="url" className="form-control p-2 col-6 mt-3" value={formvalue.url} onChange={onchange} name='url' id="url" placeholder="Enter Your Photo URL" required="required" />
                        <input type="password" className="form-control p-2 col-6 mt-3" value={formvalue.password} onChange={onchange} name='password' id="password" placeholder="Enter Your Password" required="required" />
                    </div>
                    <div>
                      <button className="btn btn-dark offset-5 py-2 px-5 mt-3"type="submit" onClick={onsubmit}  id="sendMessageButton"> Sign Up </button>
                      <h6 className='offset-4 mt-4 mb-2'>Already have an Account ? <NavLink to="/login" className="text-decoration-none text-success">Log In</NavLink></h6>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Sign_Up