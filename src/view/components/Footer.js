import React from 'react';

export const Footer = () => {
    let date = new Date();
    let year = date.getFullYear()
    return (
        <div className="footer">
            <p><i className="far fa-copyright"></i> Copyright People {year}</p>
        </div>
    )
};

