import React from 'react';
import Card from './Card';


 const robotList = ({cartoes}) => {
    const cardComponent = cartoes.map((user, i) => {
        return (
            <Card
                key={i} 
                id={cartoes[i].id} 
                name={cartoes[i].name} 
                email={cartoes[i].email}
            />
        ); 
 });
    
    return ( 
        <div>

            <div>
                {cardComponent}
            </div>
        </div>

    );
    }

 export default robotList;