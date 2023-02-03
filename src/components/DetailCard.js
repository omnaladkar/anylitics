import React from 'react'

const DetailCard = ({selectedUser}) => {
    return (
        <div>
        <a className="btn btn-primary" href="/">Go Back</a>
            <ul className="list-group">
                <li className="list-group-item">name: {selectedUser.name}</li>
                <li className="list-group-item">username: {selectedUser.username}</li>
                <li className="list-group-item"> email: {selectedUser.email}</li>
                <li className="list-group-item"> phone: {selectedUser.phone}</li>
                <li className="list-group-item">website: {selectedUser.website}</li>
                <li className="list-group-item">address</li>
              
                <li className="list-group-dot-item ">street: {selectedUser.address.street}</li>
             <li className="list-group-dot-item " >suite: {selectedUser.address.suite}</li>
             <li className="list-group-dot-item ">city: {selectedUser.address.city}</li>
             <li className="list-group-dot-item ">zipcode: {selectedUser.address.zipcode}</li>
                </ul>
           
        </div>
    )
}

export default DetailCard
