import React, { useState } from 'react'
import Dropdown from './assets/dropdown.svg'

function MonthDropdown({formData, setFormData, formErrors}) {
    const [color, setColor] = useState('#5A5A5A')
    // const [selected, setSelected] = useState('')

    const colorHandler = (event) =>{
        setColor(event.target.value ? 'black' : '#5A5A5A')
        setFormData({...formData, birthMonth: event.target.value})
    }

    return (
        <div className='dropdown'>
            <img src={Dropdown} alt="dropdown"/>
            <select className={formErrors.dateOfBirth?'errorInput dropdown':'dropdown'} style={{color: color}}
            onChange={colorHandler} value={formData.birthMonth}>
                <option value="" disabled>month</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">april</option>
                <option value="may">may</option>
                <option value="june">june</option>
                <option value="july">july</option>
                <option value="august">august</option>
                <option value="september">september</option>
                <option value="october">october</option>
                <option value="november">november</option>
                <option value="december">december</option>
                
            </select>
        </div>
    )
}

export default MonthDropdown