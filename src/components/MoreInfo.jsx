import React from 'react'
import MonthDropdown from './MonthDropdown'
import CountryName from './CountryName'
import Warning from './assets/warning.svg'

function MoreInfo({ formData, setFormData, inputHandler, posts, formErrors, setFilteredData, filteredData }) {
  return (

    <div className="MoreInfo">
      <div className="formInput">
        <div className="dateOfBirth input">

          <label>date of birth</label>

          <div className="dobCont">
            <div className="birthdayInputs">
              <MonthDropdown formData={formData} setFormData={setFormData} formErrors={formErrors} />
              <input type="number" className={formErrors.dateOfBirth ? 'errorInput' : ''}
                placeholder='Day'
                value={formData.birthDay}
                name='birthDay'
                onChange={inputHandler} />
              <input type="number" className={formErrors.dateOfBirth ? 'errorInput' : ''}
                placeholder='Year'
                value={formData.birthYear}
                name='birthYear'
                onChange={inputHandler} />

            </div>
            {formErrors.dateOfBirth && (
              <div className='error'><img src={Warning} alt="" />{formErrors.dateOfBirth}</div>
            )}
          </div>

        </div>

        <div className='country'>
          <div className="input">
            <label>Country</label>
            <CountryName formData={formData}
              setFormData={setFormData}
              posts={posts}
              formErrors={formErrors}
              filteredData={filteredData}
              setFilteredData={setFilteredData} />
          </div>

          {formErrors.country && (
            <div className='error'><img src={Warning} alt="" />{formErrors.country}</div>
          )}
        </div>

        <div className="email input">
          <label>Home address</label>
          <input className={formErrors.address ? 'errorInput' : ''}
            type="text"
            placeholder='Enter home address'
            value={formData.address}
            name='address'
            onChange={inputHandler} />
          {formErrors.address && (
            <div className='error'><img src={Warning} alt="" />{formErrors.address}</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MoreInfo