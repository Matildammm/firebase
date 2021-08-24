import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './firebase';

const Data = () => {
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [users, setUsers] = useState([])
    const db = firebase.firestore();


    const getName = (e) => {
        setName(e.target.value)
    }
    const getSurname = (e) => {
        setSurname(e.target.value)
    }

    const createUser = (e) => {
        e.preventDefault();
        db.collection('users').add({
            name: name,
            surname: surname,
            description: descruption,
            location: location,
            age: age

        })
            .then((res) => { console.log('user created') })
            .catch((err) => { console.log(err) })


    }

    useEffect(() => {
        let userinfo = [];
        db.collection('users').get()
            .then((res) => {
                res.forEach(action => {
                    userinfo.push({ ...action.data(), id: action.id });
                    console.log(action.data())
                })
                setUsers(userinfo);
            })

    }, [])

    const deleteUser = (e) => {
        let uid = e.target.id

        db.collection('users').doc(id).delete()
            .then(() => { console.log('user deleted') })
            .catch((err) => { console.log(err) })
    }


    return (
        <>
            <div className={"container mt-4"}>
                <form onSubmit={createUser}>
                    <div class="input-group">
                        <span className="input-group-text">First and last name</span>
                        <input name="name" onChange={getName} type="text" aria-label="First name" class="form-control"></input>
                        <input surname="surname" onChange={getSurname} type="text" aria-label="Surname" class="form-control"></input>
                        <button type="submit" className="btn btn-warning">Add</button>

                    </div>
                </form>
                {

                    users.map((action) => (
                        <div className="card mt-4" key={action.id}>
                            <div className="card-header">
                                Custom users
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">User details</h5>
                                <p className="card-text">{action.name}, {action.surname}.</p>
                                <button id={action.id} onClick={deleteUser} className="btn btn-danger">Delete user</button>
                            </div>
                        </div>
                    ))

                }

            </div>

        </>
    )
}

export default Data