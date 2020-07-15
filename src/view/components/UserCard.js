import React from "react";

export const UserCard = (props) => {
    return (
        <div className="mainCard container">

            {props.filter.map((elem, i) => {
                const cardColor = elem.isFemale() ? "red" : "blue"
                return (
                    <div className="col-4" key={i}>
                        <div className={`card ${cardColor}`}>
                            <h5>{elem.fullName()}</h5>
                            <img className="card-img-top" src={elem.picture} alt="Card cap" />
                            <div className="card-body">
                                <span className="font">Email: <i className="fas fa-envelope"></i> <span className="font">{elem.hideEmail()}</span> </span>
                                <h6>Date Of Birth: <i className="fas fa-birthday-cake"></i> {elem.modefiedDate()}</h6>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}