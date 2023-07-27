import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { singleselectuser, update } from '../Features/action';
import { toast } from 'react-toastify';

function Edit_Profile() {

  const redirect = useNavigate();

   const {id} = useParams();

   const {singleuser} = useSelector((state)=> state.user)

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

  useEffect(() => {
    dispatch(singleselectuser(`http://localhost:3000/user/${id}`))
  },[])

  useEffect(()=> {
    setFormvalue({...singleuser})
  },[singleuser])


  const onchange = (e) => {
    setFormvalue({...formvalue,[e.target.name]:e.target.value});
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


  const onsubmit = (e) =>{
    e.preventDefault();
    if(validate()){
      dispatch(update(`http://localhost:3000/user/${id}`,formvalue))
      setFormvalue({...formvalue,name:"",email:"",mobile:"",url:"",password:""});
      toast.success("Edit Successfull")
      redirect('/userdata')
    }
  }

  return (
    <div>
        <div className="container">
            <form >
                <h1 className='d-flex justify-content-center mt-5 '>Edit Profile</h1>

                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <input type="text" className="form-control p-2 col-6 mt-5" value={formvalue.name} onChange={onchange} name='name'   id="name" placeholder="Enter Your Name" required="required"  />
                        <input type="email" className="form-control p-2 col-6 mt-3" value={formvalue.email} onChange={onchange} name='email'   id="email" placeholder="Enter Your Email" required="required"  />
                        <input type="tel" className="form-control p-2 col-6 mt-3" value={formvalue.mobile} onChange={onchange} name='mobile'   id="mobile" placeholder="Enter Your Mobile" required="required" />
                        <input type="url" className="form-control p-2 col-6 mt-3" value={formvalue.url} onChange={onchange} name='url'   id="url" placeholder="Enter Your Photo URL" required="required" />
                        <input type="password" className="form-control p-2 col-6 mt-3" value={formvalue.password} onChange={onchange} name='password'   id="password" placeholder="Enter Your Password" required="required" />
                    </div>
                    <div>
                      <button className="btn btn-primary offset-5 py-2 px-5 mt-3"type="submit" onClick={onsubmit} id="sendMessageButton"> Save </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Edit_Profile