import React from 'react';

export const Header = (props) => {

    const iconClassName = props.gridView ? "fas fa-th-list pi fa-lg" : "fas fa-th pi fa-lg";
    return <div className="header">
        <h5 className="title">Random People</h5>
        <a href="#" onClick={props.onLoad}><i className="fas fa-sync-alt pi fa-lg"></i></a>
        <a href="#" onClick={props.viewChange} ><i className={iconClassName}></i></a>
        <a href="about" className="pi link">About</a>
    </div>

}