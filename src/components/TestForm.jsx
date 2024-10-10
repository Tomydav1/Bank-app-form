import {useEffect, useState} from 'react'

function TestForm() {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormValues({...formValues, [name]: value})
    }

    /**
     * This `useEffect` hook is used to log the `formErrors` state and the `formValues` state to the console,
     * only when the `formErrors` state object is empty and the `isSubmit` state is `true`.
     *
     * The `useEffect` hook accepts two arguments: a function that contains the code to be executed, and an array
     * of dependencies. In this case, the function is defined inline and it logs the `formErrors` state and the
     * `formValues` state to the console. The dependencies array is `[formErrors]`, which means that the effect
     * will only re-run when the `formErrors` state changes.
     *
     * The `formErrors` state is an object that contains error messages for each field in the form. If the `formErrors`
     * state is empty, it means that there are no errors in the form.
     *
     * The `isSubmit` state is a boolean that is set to `true` when the form is submitted.
     *
     * So, the effect will only log the `formValues` state to the console when the form is submitted and there are
     * no errors in the form.
     */
    useEffect(() => {
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues)
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

        if(!values.name) {
            errors.name = 'Name is required!'
        }

        if(!values.email) {
            errors.email = 'Email is required!'
        } else if(!regex.test(values.email)) {
            errors.email = 'This is not a valid email format!'
        }
z
        if(!values.password) {
            errors.password = 'Password is required!'
        } else if(values.password.length < 4) {
            errors.password = 'Password must be more than 4 characters!'
        } else if(values.password.length > 10) {
            errors.password = 'Password cannot exceed more than 10 characters!'
        }

        return errors;
    }

    const submitHandler = (e) => {
        e.preventDefault()

        setFormErrors(validate(formValues));
        setIsSubmit(true)
    }
    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder='Name'
                    name='name'
                    value={formValues.name}
                    onChange={handleInputChange}
                />
                <p>{formErrors.name}</p>

                <input
                    type="email"
                    placeholder='email'
                    name='email'
                    value={formValues.email}
                    onChange={handleInputChange}
                />
                <p>{formErrors.email}</p>

                <input
                    type="password"
                    placeholder='password'
                    name='password'
                    value={formValues.password}
                    onChange={handleInputChange}
                />
                <p>{formErrors.password}</p>

                <button onClick={submitHandler}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default TestForm