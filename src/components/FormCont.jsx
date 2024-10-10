import React, { useState, useEffect } from 'react'
import BasicInfo from './BasicInfo';
import MoreInfo from './MoreInfo';
import FormPass from './FormPass';
import FormConf from './FormConf';
import ProgressBar from './ProgressBar';
import Logo from './assets/cashDebit.svg'
import Warning from './assets/warning.svg'

function FormCont() {

  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    birthMonth: '',
    birthDay: '',
    birthYear: '',
    country: '',
    address: '',
    password: '',
    confirmPassword: ''
  })
  const [formErrors, setFormErrors] = useState({})
  const [nextPage, setNextPage] = useState(true)
  const [dontKnow, setDontKnow] = useState({})

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?_limit=10")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })

      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    const newError = validate(formData)

    setDontKnow(newError)
    if (Object.keys(newError).length === 0) {
      setNextPage(false)
    }
    else {
      setNextPage(true)
    }
  }, [formData, page])

  const validate = (values) => {
    const errors = {}
    const numbers = /\d/
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    const date = new Date()
    const countries = posts.map(countries => countries.name.common.toLowerCase())
    const year = date.getFullYear()

    if (page === 0) {
      if (!values.firstName || !values.lastName) {
        errors.name = 'First name and last name are required!'
      }
      if (!values.phoneNumber && !errors.name) {
        errors.phoneNumber = 'Phone number is required!'
      }
      if (!values.email && !errors.name && !errors.phoneNumber) {
        errors.email = 'Email is required!'
      } else if (values.email && !regex.test(values.email)) {
        errors.email = 'Enter a valid email address!'
      }
    }
    else if (page === 1) {
      if (!values.birthDay || !values.birthMonth || !values.birthYear) {
        errors.dateOfBirth = 'Date of birth is required!'
      } else if (
        values.birthYear > year ||
        values.birthYear < 1900 ||
        values.birthDay > 31 ||
        (['april', 'june', 'september', 'november'].includes(values.birthMonth) && values.birthDay > 30)
      ) {
        errors.dateOfBirth = 'Enter a valid date of birth!'
      }

      if (!values.country && !errors.dateOfBirth) {
        errors.country = 'Country name is required!'
      } else if (values.country && !countries.includes(values.country.toLowerCase()) && !errors.dateOfBirth){
        errors.country = 'Enter a valid country name!'
      }

      if (!values.address && !errors.country && !errors.dateOfBirth) {
        errors.address = 'Home Address is required!'
      }
    }
    else if (page === 2) {
      if (!values.password) {
        errors.password = 'Password is required!'
      } else if (values.password && values.password.length < 8){
        errors.password = 'Password is less than 8 characters!'
      } else if (values.password && !numbers.test(values.password)){
        errors.password = 'Password does not contain a number!'
      }

      if (!values.confirmPassword && !errors.password) {
        errors.confirmPassword = 'Confirm password is required!'
      } else if (values.password && values.password !== values.confirmPassword && !errors.password) {
        errors.confirmPassword = 'Ensure the passwords are the same!'
      }
    }

    return errors;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const formTitles = [
    `let's get started`,
    'tell us more',
    'create your secure account',
    'you are only one step away'
  ]

  const nextHandler = (e) => {

    if (!nextPage && page + 1 < formTitles.length) {
      setPage((currPage) => currPage + 1);
      setNextPage(true)
      setFormErrors({})
    } else if(page === formTitles.length - 1){
      alert('We have sent a link to your email address')
    }

    if (page === 1){
      setFilteredData([])
    }

    e.preventDefault()
    setFormErrors(dontKnow)
  }

  const prevHandler = (e) => {
    setPage((currPage) => currPage - 1);
    setNextPage(false)
    e.preventDefault()
  }

  return (
    <div className='form'>
      <div className="container">

        <div className="left-cont">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="progressBar">
            <ProgressBar counter={page} />
          </div>
        </div>

        <form className="right-cont">
          <div className="title">{formTitles[page]}</div>

          <div className="vfyug" autoComplete='off'>
            <div className="FormCont" style={{ transform: `translateX(${-450 * page}px)` }}>
              <div className="form-cont">
                <BasicInfo formData={formData}
                  setFormData={setFormData}
                  inputHandler={handleInputChange}
                  formErrors={formErrors} />
              </div>
              <div className="form-cont">
                <MoreInfo formData={formData}
                  setFormData={setFormData}
                  inputHandler={handleInputChange}
                  posts={posts}
                  setFilteredData={setFilteredData}
                  filteredData={filteredData}
                  formErrors={formErrors} />
              </div>
              <div className="form-cont">
                <FormPass formData={formData}
                  setFormData={setFormData}
                  inputHandler={handleInputChange}
                  formErrors={formErrors} />
              </div>
              <div className="form-cont">
                <FormConf formData={formData}
                  setFormData={setFormData}
                  inputHandler={handleInputChange}
                  formErrors={formErrors} />
              </div>
            </div>
          </div>

          <div className="buttons">
            {page > 0 && (
              <button
                className='prev'
                onClick={prevHandler}>
                Previous
              </button>)}
            <button className='next'
              onClick={nextHandler}>
              {page === formTitles.length - 1 ? 'Verify' : 'Next'}
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default FormCont