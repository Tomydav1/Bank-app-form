import React from 'react'
import Warning from './assets/warning.svg'

function BasicInfo({ formData, setFormData, inputHandler, formDataError, formErrors }) {
  return (

    <div className="BasicInfo">
      <div className="formInput">
        <div className="nameInputCont">
          <div className="nameInput">
            <div className="firstName input">
              <label>first name</label>
              <input className={formErrors.name?'errorInput':''}
                type="text"
                placeholder='Enter your first name'
                value={formData.firstName}
                name='firstName'
                onChange={inputHandler} />
            </div>

            <div className="lastName input">
              <label>last name</label>
              <input className={formErrors.name?'errorInput':''}
                type="text"
                placeholder='Enter your last name'
                value={formData.lastName}
                name='lastName'
                onChange={inputHandler} />
            </div>
          </div>

          {formErrors.name && (
            <div className='error'><img src={Warning} alt="" />{formErrors.name}</div>
          )}
        </div>

        <div className="number input">
          <label>phone number</label>
          <input className={formErrors.phoneNumber?'errorInput':''}
            type="number"
            placeholder='Enter phone number'
            value={formData.phoneNumber}
            name='phoneNumber'
            onChange={inputHandler} />
          {formErrors.phoneNumber && (
            <div className='error'><img src={Warning} alt="" />{formErrors.phoneNumber}</div>
          )}
        </div>

        <div className="email input">
          <label>email address</label>
          <input className={formErrors.email?'errorInput':''}
            type="text"
            placeholder='Example@gmail.com'
            value={formData.email}
            name='email'
            onChange={inputHandler} />

          {formErrors.email && (
            <div className='error'><img src={Warning} alt="" />{formErrors.email}</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BasicInfo