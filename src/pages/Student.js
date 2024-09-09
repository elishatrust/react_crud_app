
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'



const Student = ({title='Student List'}) => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/students`)
            .then((resp) => {
                console.log(resp);
                setStudents(resp.data.students);
            })
            .catch((error) => {
                console.error('There was an error fetching the students!', error);
            });
    }, []);

    const deleteStudent = (id) => {
        axios
            .delete(`http://127.0.0.1:8000/api/students/${id}`)
            .then(() => {
        setStudents(students.filter((student) => student.id !== id));
            })
        .catch((error) => {
            console.error('There was an error deleting the student!', error);
        });
    };

    const studentDetails = students.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.program}</td>
                <td>{item.status}</td>
                <td>
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <Link to={`/students/${item.id}/edit`} className="btn btn-sm btn-primary">
                    <i className="bi bi-pencil-square"></i>
                    </Link>
                    <button onClick={() => deleteStudent(item.id)} className="btn btn-sm btn-danger">
                    <i className="bi bi-trash3"></i>
                    </button>
                </div>
                </td>
            </tr>
        );
    });

    return (
        <>
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header"> 
                                <h4>
                                    {title} 
                                    <Link to="/" className='btn btn-sm btn-primary float-end'> Add Student </Link>  
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
                                        <tbody>{studentDetails}</tbody> 
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