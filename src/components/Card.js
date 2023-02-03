import React from 'react'
import { Link } from "react-router-dom";

const Card = ({user}) => {

    return (
        <div className="row">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                  <div className="avatar avatar-lg">
                                <span className="avatar-text avatar-text-primary ">
                                    <span className="initial-wrap rounded-circle"><span>{user.name.charAt(0)}</span></span>
                                </span>
                            </div>
                    <div className="row">
                      <li className='col'>Name:{user.name}</li>
                      <li className="col"><i>UserName:{user.username}</i></li>
                      <a  className="col" href={user.website}>Website:http://{user.website}</a>
                      <p><Link className="btn btn-primary" to={`/users/${user.id}`}> MORE DETAILS</Link></p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
    )
}
export default Card