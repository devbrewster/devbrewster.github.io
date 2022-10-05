import React from "react";

const Card = ({name, email, id, username}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-3'>
            <img src={`https://robohash.org/${id}?200x200`} alt="placeholder"/>
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;
