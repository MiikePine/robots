// import React from 'react';
import { Component } from 'react';

 const Card = ( {name, email, id} ) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow shadow-5'>
            <img 
                alt='robots' 
                src={`https://robohash.org/${id}set=set2&size?20x20`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>  
    );
 }

 export default Card;