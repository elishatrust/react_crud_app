
import React from 'react'
// import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Student = ({title='Student List'}) => {

    // useEffect(() =>{

    // }, []);

    return (
        <>
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header"> 
                                <h4>
                                    {title} 
                                    <Link to="" className='btn btn-sm btn-primary float-end'> Add Student </Link>  
                                </h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Phone</th>
                                                <th>Email</th>
                                                <th>Gender</th>
                                                <th>Program</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>John Doe</td>
                                                <td>0987654321</td>
                                                <td>johndoe@example.com</td>
                                                <td>Male</td>
                                                <td>BSc. In CS</td>
                                                <td>Active</td>
                                                <td>
                                                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                                        <button type="button" className="btn btn-sm btn-primary"><i className="bi bi-pencil-square"></i></button>
                                                        <button type="button" className="btn btn-sm btn-danger"><i className="bi bi-trash3"></i></button>
                                                    </div>
                                                    {/* <Link to="" className='btn btn-sm btn-primary'>
                                                        <i className="bi bi-pencil-square"></i>
                                                    </Link>
                                                    <Link to="" className='btn btn-sm btn-danger '>
                                                        <i className="bi bi-trash3"></i>
                                                    </Link> */}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>                                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Student