import React, { useEffect, useState } from 'react';
import './Watch.css';

function Watch( { name, timeZone, id, onDelete }) {
    const [time, setTime] = useState('');
    const handleDelete = () => {
        onDelete(id);
    }

    const changeTime = () => {
            const date = new Date();
               const timeZoneOffset = 60 * 60 * Number(timeZone) * 1000;
               const dateWithOffset = new Date(date.getTime() + timeZoneOffset + 1000);
               
               const newTime = new Intl.DateTimeFormat('ru', 
               {hour: '2-digit', minute: 'numeric', second: '2-digit'}).format(dateWithOffset);
               setTime(newTime);
    }
    
   useEffect(() => {
       changeTime();
       const interval = setInterval(changeTime, 1000);
       return () => {
           clearInterval(interval);
       }
   }, [])

    return (
        <div className="container">
            <div>{name}</div>
            <div>{time}</div>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}

export default Watch;