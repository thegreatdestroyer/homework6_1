import React, { useState } from 'react';
import Watch from '../Watch/Watch';
import './AddForm.css';

function AddForm() {
    const [times, setTimes] = useState([]);
    const [form, setForm] = useState({ name: '', timeZone: ''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ( {
            ...prev,
            [name]: value
        }));
    }

    const handleDelete = (id) => {
        const newTimes = times.filter((time) => time.id !== id);
        setTimes(newTimes);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        
        const newTimes = [...times, {
            id: date.getTime(),
            name: form.name,
            timeZone: form.timeZone
        }];
        setTimes(newTimes);
        setForm({name: '', timeZone: ''});
    }


    return (
        <>
        <form onSubmit={handleSubmit} className="form">
        <div className="input">
            <label htmlFor="name">Название</label>
            <input id="name" value={form.name} name="name" type="text" onChange={handleChange}></input>
        </div>
        <div className="input">
            <label htmlFor="timeZone">Временная зона</label>
            <input id="timeZone" value={form.timeZone} name="timeZone" onChange={handleChange} type="number"></input>
        </div>
            <button className="button">Добавить</button>
        </form>
        <div className="times">
        {times.map((time) => ( <Watch key={time.id} timeZone={time.timeZone} id={time.id} name={time.name}
            onDelete={handleDelete}/> )
        )}
        </div>
        </>
    )
}

export default AddForm;