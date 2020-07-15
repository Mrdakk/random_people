import React from "react"

export const SearchBar = (props) => {
    return (
        <div className="src"><input type="text" onChange={props.value} placeholder=" search users" /></div>

    )
}