import React from 'react'
import Email from './assets/email.svg'

function FormConf() {
  return (


    <div className="FormConf">
      <img src={Email} alt="email" />
      <div className="content">
        <h4>verify your email address</h4>
        <p>
          To complete your profile and access all the features of
          Cash Debit, you’ll need to verify your email address.
        </p>
      </div>
    </div>

  )
}

export default FormConf