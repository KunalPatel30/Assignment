import React, { useEffect, useState } from 'react';

function User_DataTable() {

    const [users, setUsers] = useState();

    const [filtered, setFiltered] = useState();

    const handleChange = async (e) => {
        const filtered = users.filter((item) => {
            return item.name.includes(e.target.value)
        })
        setFiltered(filtered)
    }

    useEffect(()=> {
        fetch(`http://localhost:3000/user`)
        .then(res=> res.json())
        .then(response => {
            setUsers(response)
        })
    },[])

  return (
    <div>
        <div className='container'>
            <h1 className='d-flex justify-content-center mt-5'>User Data</h1>

            <div className="input-group mb-3 mt-3">
                <input type="text" className="form-control"  onChange={handleChange} placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>

            <table class="table table-dark table-striped mt-5">
                <thead>
                    <tr>
                    <th>id</th>
                    <th>Profile</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th><i className=" fa fa-edit"/> Status</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>  
                {
                    filtered && filtered.length > 0 ?
                    filtered.map((item, index, ent) => {
                        return (
                        <tr>
                            <td>{item.id}</td>
                            <td><img src={item.url} height={"50px"} alt="" /></td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            <td>{item.status}</td>
                            <td>
                                <button className="btn btn-danger btn-sm me-2"><i className="fa fa-trash-o"/> Delete</button>
                                <button className="btn btn-danger btn-sm me-2"><i className="fa fa-user"/> {item.status}</button>
                            </td>
                        </tr>
                        )
                    })
                    : users && users.map((item) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td><img src={item.url} height={"50px"} alt="" /></td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td>{item.status}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm me-2"><i className="fa fa-trash-o"/> Delete</button>
                                    <button className="btn btn-danger btn-sm me-2"><i className="fa fa-user"/> {item.status}</button>
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

export default User_DataTable