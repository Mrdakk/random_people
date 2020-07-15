import React from 'react';

export const UserList = (props) => {
    return (
        <div className="brm" >
            {props.filter.map((user, i) => {
                const cardColor = user.isFemale() ? "red" : "blue"
                return (
                    <div key={i} className={`card ${cardColor} userItem`} >
                        <div className="img"><img src={user.picture} alt="" /></div>
                        <div className="info">
                            <div className="name">
                                <h5>Gender: {user.gender}</h5>
                                <h5>Name: {user.name}</h5>
                            </div>
                            <div className="emaildate">
                                <h5>Email: <i className="fas fa-envelope"></i> {user.hideEmail()}</h5>
                                <h5>Date Of Birth: <i className="fas fa-birthday-cake"></i> {user.modefiedDate()}</h5>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

    )

}