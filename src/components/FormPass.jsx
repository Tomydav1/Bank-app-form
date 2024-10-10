import React, { useState } from 'react'
import Warning from './assets/warning-yellow.svg'
import WarningRed from './assets/warning.svg'

function FormPass({ formData, setFormData, inputHandler, formErrors }) {
  // const [password, setPassword] = useState('')
  // const [confPassword, setConfPassword] = useState('')
  const [showPass, setShowPass] = useState(false)

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  }

  const confPassHandler = (e) => {
    setConfPassword(e.target.value);
  }

  const showPassHandler = () => {
    setShowPass(!showPass)
  }

  return (

    <div className="FormPass">
      <div className="note">
        <img src={Warning} alt="warning" />
        <p>The password should contain a minimum of 8 characters and at least one number</p>
      </div>
      <div className="formInput">
        <div className="Pass input">
          <label>create password</label>
          <input className={formErrors.password ? 'errorInput' : ''}
            type={showPass ? 'text' : 'password'}
            placeholder='Enter password'
            value={formData.password}
            name='password'
            onChange={inputHandler} />

          {formErrors.password && (
            <div className='error'><img src={WarningRed} alt="" />{formErrors.password}</div>
          )}
        </div>

        <div className="confPass input">
          <label>confirm password</label>
          <input className={formErrors.confirmPassword?'errorInput':''}
            type={showPass ? 'text' : 'password'}
            placeholder='Confirm password'
            value={formData.confirmPassword}
            name='confirmPassword'
            onChange={inputHandler} />

          {formErrors.confirmPassword && (
            <div className='error'><img src={WarningRed} alt="" />{formErrors.confirmPassword}</div>
          )}
        </div>
      </div>
      <div className="show-P">
        <input type="checkbox" onClick={showPassHandler} />
        <p>Show password</p>
      </div>
    </div>
  )
}

export default FormPass